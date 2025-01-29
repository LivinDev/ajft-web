// Button.tsx
import styles from '../../styles/ui/button.module.css';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  linkTo?: string;
  bgColor?: string;
  size?: 'small' | 'medium' | 'large';
  textSize?: string;
  outline?: boolean;
  icon?: React.ReactNode;         // For any icon component
  iconPosition?: 'left' | 'right'; // Control icon position
  disabled?: boolean;             // Added disabled state
  variant?: 'filled' | 'outline' | 'ghost'; // Added variant options
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  linkTo,
  bgColor = '#007bff',
  size = 'medium',
  textSize = '1rem',
  outline = false,
  icon,
  iconPosition = 'right',
  disabled = false,
  variant = 'filled',
}) => {
  const buttonStyle = {
    backgroundColor: outline ? 'transparent' : bgColor,
    fontSize: textSize,
    border: outline ? `2px solid ${bgColor}` : 'none',
    color: outline ? bgColor : 'white',
    opacity: disabled ? 0.6 : 1,
    cursor: disabled ? 'not-allowed' : 'pointer',
  };

  const handleClick = () => {
    if (disabled) return;
    if (onClick) {
      onClick();
    }
    if (linkTo) {
      window.location.href = linkTo;
    }
  };

  // Combine classes based on props
  const buttonClassName = [
    styles.button,
    styles[size],
    disabled && styles.disabled,
    icon && styles.withIcon,
    icon && styles[`icon${iconPosition.charAt(0).toUpperCase() + iconPosition.slice(1)}`],
    styles[variant],
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={buttonClassName}
      style={buttonStyle}
      onClick={handleClick}
      disabled={disabled}
      type="button"
    >
      {iconPosition === 'left' && icon && (
        <span className={styles.iconLeft}>{icon}</span>
      )}
      <span className={styles.text}>{text}</span>
      {iconPosition === 'right' && icon && (
        <span className={styles.iconRight}>{icon}</span>
      )}
    </button>
  );
};

export default Button;