
import styles from '../../styles/ui/button.module.css'; // Import CSS module for styling

interface ButtonProps {
  text: string;
  onClick?: () => void;
  linkTo?: string;
  bgColor?: string;
  size?: 'small' | 'medium' | 'large';
  textSize?: string;
  outline?: boolean; // New prop for outline style
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  linkTo,
  bgColor = '#007bff', // Default color
  size = 'medium', // Default size
  textSize = '1rem', // Default text size
  outline = false, // Default outline style
}) => {
  const buttonStyle = {
    backgroundColor: outline ? 'transparent' : bgColor,
    fontSize: textSize,
    border: outline ? `2px solid ${bgColor}` : 'none',
    color: outline ? bgColor : 'white',
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    if (linkTo) {
      window.location.href = linkTo;
    }
  };

  // Determine button className based on size prop
  let buttonClassName = styles.button; // Default class
  if (size === 'small') {
    buttonClassName = `${styles.button} ${styles.small}`;
  } else if (size === 'medium') {
    buttonClassName = `${styles.button} ${styles.medium}`;
  } else if (size === 'large') {
    buttonClassName = `${styles.button} ${styles.large}`;
  }

  return (
    <button
      className={buttonClassName}
      style={buttonStyle}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
