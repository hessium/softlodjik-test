import React from 'react';
import PropTypes from 'prop-types';
import './input-checkbox.scss';


export const InputCheckbox = ({ id,icon= true, checked, onChange, label, disabled, className }) => {
    const handleClick = () => !disabled && onChange(!checked);

    return (
        <div className='input-checkbox'>
            <input
                type="checkbox"
                id={id}
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
                hidden
            />
            {label && (
                <label
                    onClick={handleClick}
                    htmlFor={id}
                    className={`input-checkbox__label  
                    ${disabled ? 'input-checkbox--disabled' : ''} 
                    ${checked ? 'input-checkbox--checked' : ''}
                    ${className}`}
                >
                    {icon &&
                        <span className="input-checkbox__input-icon">
                            <img src="/assets/icons/file.svg" alt=""/>
                        </span>
                    }
                    <span>{label}</span>
                </label>
            )}
        </div>
    );
};

InputCheckbox.propTypes = {
    id: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string,
    icon: PropTypes.bool,
    disabled: PropTypes.bool,
    className: PropTypes.string,
};