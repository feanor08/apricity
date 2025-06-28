import { ReactNode, CSSProperties, HTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

export interface ButtonProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';

  /** External link → <a> */
  href?: string;
  /** Internal route → <Link> */
  to?: string;
  /** Click handler for plain <button> */
  onClick?: () => void;

  /** Native `<button>` types (“submit” etc.) */
  type?: 'button' | 'submit' | 'reset';

  className?: string;
  style?: CSSProperties;
}

const Button = ({
  children,
  variant = 'primary',
  href,
  to,
  onClick,
  className = '',
  style,
  type = 'button',          // default for native button
  ...rest
}: ButtonProps) => {
  const buttonClass = `btn btn-${variant} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={buttonClass} style={style} {...rest}>
        {children}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={buttonClass} style={style} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}           
      onClick={onClick}
      className={buttonClass}
      style={style}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
