import React, { useState, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import './input-file.scss'

export const InputFile = (
    {
        multiple = false,
        accept,
        maxSize,
        onFilesSelected,
        label = 'или перетащите их в эту область',
        error,
    }) => {
    const [isDragging, setIsDragging] = useState(false);
    const [files, setFiles] = useState([]);
    const fileInputRef = useRef(null);

    const validateFile = (file) => {
        if (accept && !accept.split(',').includes(file.type)) {
            return 'Недопустимый тип файла';
        }
        if (maxSize && file.size > maxSize) {
            return `Файл превышает ${maxSize / 1024 / 1024}MB`;
        }
        return null;
    };

    const handleFiles = useCallback(
        (selectedFiles) => {
            const validatedFiles = Array.from(selectedFiles).map((file) => ({
                file,
                error: validateFile(file),
            }));

            const validFiles = validatedFiles.filter((f) => !f.error);
            const errors = validatedFiles.filter((f) => f.error);

            setFiles(validatedFiles);
            onFilesSelected?.(validFiles, errors);

            if (errors.length > 0) {
                console.error('Ошибки загрузки:', errors);
            }
        },
        [accept, maxSize, onFilesSelected]
    );

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        const droppedFiles = e.dataTransfer.files;
        if (droppedFiles) {
            handleFiles(droppedFiles);
        }
    };

    const handleInputChange = (e) => {
        const selectedFiles = e.target.files;
        if (selectedFiles) {
            handleFiles(selectedFiles);
        }
    };

    const triggerFileSelect = () => {
        fileInputRef.current?.click();
    };

    return (
        <div
            className={`input-file ${isDragging ? 'dragging' : ''} ${error ? 'error' : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={triggerFileSelect}
        >
            <input
                type="file"
                ref={fileInputRef}
                multiple={multiple}
                accept={accept}
                onChange={handleInputChange}
                className="hidden-input"
            />

            <div className="input-file__content">

                <img className='input-file__icon' src="/assets/icons/photo-film-big.svg" alt=""/>

                <span className="input-file__label--blue">Файлы</span>

                <span className="input-file__label">{label}</span>

                {files.length > 0 && (
                    <div className="input-file__list">
                        {files.map(({ file, error }, index) => (
                            <div key={index} className={`input-file__list-item ${error ? 'error' : ''}`}>
                                <span>{file.name}</span>
                                {error && <span className="error-message">{error}</span>}
                            </div>
                        ))}
                    </div>
                )}

                {error && <div className="error-message">{error}</div>}
            </div>
        </div>
    );
};

InputFile.propTypes = {
    multiple: PropTypes.bool,
    accept: PropTypes.string,
    maxSize: PropTypes.number,
    onFilesSelected: PropTypes.func,
    label: PropTypes.string,
    error: PropTypes.string,
};
