import {
    useState,
    useEffect,
    useRef,
    forwardRef,
    useId
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button } from "../button/button.jsx";
import './select.scss';

export const Select = forwardRef((
    {
        options = [],
        value,
        onChange,
        variant = 'grey',
        placeholder = 'Select...',
        disabled = false,
        error,
        helperText,
        fullWidth = false,
        className,
        prefixIcon,
        suffixIcon,
        reset = true,
        isMulti = false,
        ...rest
    }, ref
) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLabels, setSelectedLabels] = useState([]);
    const selectRef = useRef(null);
    const id = useId();
    const hasError = !!error;

    useEffect(() => {
        if (isMulti) {
            const selected = options.filter(opt => value?.includes(opt.value));
            setSelectedLabels(selected.map(opt => opt.label));
        } else {
            const selectedOption = options.find(opt => opt.value === value);
            setSelectedLabels(selectedOption ? [selectedOption.label] : []);
        }
    }, [value, options, isMulti]);

    const handleSelect = (option) => {
        if (isMulti) {
            const newValue = value?.includes(option.value)
                ? value.filter(v => v !== option.value)
                : [...(value || []), option.value];
            onChange?.(newValue);
        } else {
            onChange?.(option.value);
            setIsOpen(false);
        }
    };

    const handleReset = () => {
        onChange?.(isMulti ? [] : null);
    };

    const removeTag = (tagValue, e) => {
        e.stopPropagation();
        if (isMulti) {
            onChange?.(value.filter(v => v !== tagValue));
        }
    };

    const toggleDropdown = () => {
        if (!disabled) setIsOpen(!isOpen);
    };

    const selectClasses = classNames(
        'select',
        `select--${variant}`,
        {
            'select--open': isOpen,
            'select--error': hasError,
            'select--disabled': disabled,
            'select--full-width': fullWidth,
            'select--with-prefix': prefixIcon,
            'select--with-suffix': suffixIcon,
            'select--multi': isMulti,
        },
        className
    );

    return (
        <div
            className={classNames('select-container', {
                'select-container--full-width': fullWidth
            })}
            ref={selectRef}
        >
            <div
                role="combobox"
                aria-expanded={isOpen}
                aria-controls={`${id}-listbox`}
                aria-labelledby={`${id}-label`}
                className={selectClasses}
                onClick={toggleDropdown}
                ref={ref}
                {...rest}
            >
                <div className="select__content">
                    {isMulti && (
                        <div className="select__tags">
                            {selectedLabels.map((label, index) => (
                                <div key={index} className="select__tag">
                                    <span className="select__tag-label">{label}</span>
                                    <button
                                        type="button"
                                        className="select__tag-remove"
                                        onClick={(e) => removeTag(value[index], e)}
                                    >
                                        ×
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}

                    {(selectedLabels.length === 0 || !isMulti) && (
                        <span className="select__value">
                            {selectedLabels[0] || placeholder}
                        </span>
                    )}
                </div>


                <div className="select__indicators">
                    <span className="select__icon select__icon--suffix">
                        <ChevronIcon />
                    </span>
                </div>
            </div>

            {isOpen && (
                <ul
                    id={`${id}-listbox`}
                    role="listbox"
                    className="select__dropdown"
                >
                    {options.map(option => {
                        const isSelected = isMulti
                            ? value?.includes(option.value)
                            : value === option.value;

                        return (
                            <li
                                key={option.value}
                                role="option"
                                aria-selected={isSelected}
                                className={classNames('select__option', {
                                    'select__option--selected': isSelected,
                                    'select__option--multi': isMulti
                                })}
                                onClick={() => handleSelect(option)}
                            >
                                {isMulti && (
                                    <input
                                        type="checkbox"
                                        checked={isSelected}
                                        readOnly
                                        className="select__checkbox"
                                    />
                                )}
                                {prefixIcon && (
                                    <span className="select__icon select__icon--prefix">
                                        {prefixIcon}
                                    </span>
                                )}
                                <span className="select__label">{option.label}</span>
                            </li>
                        )}
                    )}
                    {reset && (
                        <div className="select__reset">
                            <Button
                                onClick={handleReset}
                                variant='bordered'
                            >
                                Сбросить выбор
                            </Button>
                        </div>
                    )}
                </ul>
            )}

            {helperText && !hasError && (
                <span className="select__helper-text">
                    {helperText}
                </span>
            )}

            {hasError && (
                <span className="select__error-text">
                    {error}
                </span>
            )}
        </div>
    );
});

const ChevronIcon = () => (
    <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_3001_527)">
            <path
                d="M4.29378 11.7064C4.68441 12.0971 5.31878 12.0971 5.70941 11.7064L9.70941 7.70645C9.99691 7.41895 10.0813 6.99082 9.92503 6.61582C9.76878 6.24082 9.40628 5.99707 9.00003 5.99707L1.00003 6.0002C0.596906 6.0002 0.231281 6.24395 0.0750307 6.61895C-0.0812193 6.99395 0.00628069 7.42207 0.290656 7.70957L4.29066 11.7096L4.29378 11.7064Z"
                fill="#A1A1A1"/>
        </g>
        <defs>
            <clipPath id="clip0_3001_527">
                <rect width="10" height="16" fill="white"/>
            </clipPath>
        </defs>
    </svg>

);

Select.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.any.isRequired,
        label: PropTypes.string.isRequired,
    })),
    value: PropTypes.oneOfType([
        PropTypes.any,
        PropTypes.arrayOf(PropTypes.any)
    ]),
    onChange: PropTypes.func,
    variant: PropTypes.oneOf(['outline', 'gray', 'dark']),
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.string,
    helperText: PropTypes.string,
    fullWidth: PropTypes.bool,
    className: PropTypes.string,
    prefixIcon: PropTypes.node,
    suffixIcon: PropTypes.node,
    reset: PropTypes.bool,
    isMulti: PropTypes.bool,
};

Select.defaultProps = {
    reset: true,
    isMulti: false,
};