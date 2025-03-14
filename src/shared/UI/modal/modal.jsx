import { useEffect, useRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import './modal.scss';
import {Button} from "../button/button.jsx";

export const Modal = ({
                   isOpen,
                   onClose,
                   title,
                   children,
                   confirmText = 'Далее',
                   cancelText = 'Отменить',
                   onConfirm
               }) => {
    const dialogRef = useRef(null);

    // Создаем уникальный корневой элемент для портала
    const portalRoot = useMemo(() => {
        if (typeof document === 'undefined') return null;
        const root = document.createElement('div');
        root.classList.add('modal-portal-root');
        return root;
    }, []);

    useEffect(() => {
        if (isOpen && portalRoot) {
            document.body.appendChild(portalRoot);
            return () => {
                document.body.removeChild(portalRoot);
            };
        }
    }, [isOpen, portalRoot]);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (isOpen) {
            dialog?.showModal();
        } else {
            dialog?.close();
        }
    }, [isOpen]);

    const handleBackdropClick = (e) => {
        const dialog = dialogRef.current;
        if (dialog && e.target === dialog) {
            onClose();
        }
    };

    if (!isOpen || !portalRoot) return null;

    return createPortal(
        <dialog
            ref={dialogRef}
            className="modal"
            onClick={handleBackdropClick}
            onClose={onClose}
        >
            <div className="modal__wrapper">
                <div className="modal__content">
                    <div className="modal__header">
                        <h2 className="modal__title">{title}</h2>
                        <button
                            className="modal__close"
                            onClick={onClose}
                            aria-label="Close"
                        >
                            &times;
                        </button>
                    </div>

                    <div className="modal__body">
                        <div className="modal__body-content">
                            {children}
                        </div>
                    </div>

                    <div className="modal__footer">
                        <Button
                            variant='bordered'
                            onClick={onClose}
                        >
                            {cancelText}
                        </Button>
                        <Button
                            onClick={onConfirm}
                        >
                            {confirmText}
                        </Button>
                    </div>
                </div>
            </div>
        </dialog>,
        portalRoot
    );
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    confirmText: PropTypes.string,
    cancelText: PropTypes.string,
    onConfirm: PropTypes.func,
};
