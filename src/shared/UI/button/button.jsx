import PropTypes from 'prop-types';
import classNames from 'classnames';
import './button.scss';

export const Button =
    ({
         variant = 'filled',
         size = 'large' ,
         children,
         className,
         ...props
    }) => {
    return (
        <button
            className={classNames(
                'button',
                `button--${variant}`,
                `button--${size}`,
                className
            )}
            {...props}
        >
            <span className="button__content">{children}</span>
        </button>
    );
};

Button.propTypes = {
    variant: PropTypes.oneOf(['filled', 'transparent', 'bordered', 'gray', 'dark', 'blue-light']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};
