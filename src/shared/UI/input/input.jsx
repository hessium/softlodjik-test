import React, {useId, forwardRef} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './input.scss';

export const Input =
    forwardRef((
        {
            variant,
            type = 'text',
            label,
            helperText,
            error,
            success,
            disabled,
            className,
            prefixIcon,
            suffixIcon,
            fullWidth = true,
            ...rest
        }, ref
    ) => {
        const id = useId();
        const hasError = !!error;

        const inputClasses = classNames(
            'input',
            `input--${variant}`,
            {
                'input--error': hasError,
                'input--success': success,
                'input--disabled': disabled,
                'input--with-icon': prefixIcon || suffixIcon,
                'input--full-width': fullWidth
            },
            className
        );

        return (
            <div className={classNames('input-container', {'input-container--full-width': fullWidth})}>
                {label && (
                    <label htmlFor={id} className="input__label">
                        {label}
                    </label>
                )}

                <div className="input__wrapper">
                    {prefixIcon && (
                        <span className="input__icon input__icon--prefix">
                            {prefixIcon}
                         </span>
                    )}

                    <input
                        id={id}
                        ref={ref}
                        type={type}
                        className={inputClasses}
                        disabled={disabled}
                        aria-invalid={hasError}
                        aria-describedby={helperText ? `${id}-helper` : undefined}
                        {...rest}
                    />

                    {suffixIcon && (
                        <span className="input__icon input__icon--suffix">
            {suffixIcon}
          </span>
                    )}
                </div>

                {helperText && !hasError && (
                    <span id={`${id}-helper`} className="input__helper-text">
          {helperText}
        </span>
                )}

                {hasError && (
                    <span className="input__error-text">
          {error}
        </span>
                )}
            </div>
        );
    });

Input.propTypes = {
    variant: PropTypes.oneOf(['icon', 'gray', 'dark', 'outline']),
    type: PropTypes.oneOf(['text', 'password', 'email', 'number', 'tel', 'url', 'search']),
    label: PropTypes.string,
    helperText: PropTypes.string,
    error: PropTypes.string,
    success: PropTypes.bool,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    prefixIcon: PropTypes.node,
    suffixIcon: PropTypes.node,
    fullWidth: PropTypes.bool,
};

Input.defaultProps = {
    type: 'text',
    variant: 'outline',
};