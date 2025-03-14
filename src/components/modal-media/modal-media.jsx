import {Modal} from "../../shared/UI/modal/modal.jsx";
import './modal-media.scss'
import {Input} from "../../shared/UI/input/input.jsx";
import {InputFile} from "../../shared/UI/input-file/input-file.jsx";
import {useState} from "react";
import {InputCheckbox} from "../../shared/UI/input-checkbox/input-checkbox.jsx";

export const ModalMedia = ({isOpen, setIsOpen}) => {

    const [isPhotoChecked, setIsPhotoChecked] = useState(false);
    const [isVideoChecked, setIsVideoChecked] = useState(false);

    const modalMediaHeader = () => {
        return (
            <>
                <img src="/assets/icons/photo-film.svg" alt=""/>
                <span>Добавление медиа файлов</span>
            </>
        )
    }

    return (
        <>
            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                title={modalMediaHeader()}
                onConfirm={() => {
                    console.log('Action confirmed!');
                    setIsOpen(false);
                }}
            >
                <div className='modal-media__header'>
                    <div className="modal-media__number">
                        1
                    </div>

                    <h2>Файлы</h2>
                </div>
                <div className="modal-media__progress">
                    <div className="modal-media__progress-bar modal-media__progress-bar--full"></div>
                    <div className="modal-media__progress-bar"></div>
                </div>
                <div className="modal-media__description">
                    Перед загрузкой файлов ознакомьтесь с
                    <a href="#" className='modal-media__description-link'>Требованиями</a>
                    к фото и видео
                </div>
                <div className="modal-media__row">
                    <h3 className='modal-media__subtitle'>Название файлов</h3>

                    <div className='modal-media__inputs'>
                        <Input
                            className='modal-media__input'
                            placeholder='Введите название для этих файлов'
                        />
                    </div>
                </div>

                <div className="modal-media__row">
                    <h3 className='modal-media__subtitle'>Тип файлов</h3>

                    <div className='modal-media__inputs'>
                        <InputCheckbox
                            id="photo"
                            checked={isPhotoChecked}
                            onChange={setIsPhotoChecked}
                            label="Фото"
                        />

                        <InputCheckbox
                            id="video"
                            checked={isVideoChecked}
                            onChange={setIsVideoChecked}
                            label="Видео"
                        />
                    </div>
                </div>
                <InputFile
                    multiple
                    accept="image/*, .pdf, .docx"
                    maxSize={5 * 1024 * 1024}
                    onFilesSelected={(validFiles, errors) => {
                        console.log('Valid:', validFiles);
                        console.log('Errors:', errors);
                    }}
                />
            </Modal>
        </>
    );
};