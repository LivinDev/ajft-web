

interface YouTubeIconProps {
  size?: number;
  color?: string;
}

const YouTubeIcon: React.FC<YouTubeIconProps> = ({ size = 24, color = 'black' }) => (
  <svg
    width={size}
    height={(size * 24) / 27} // Maintaining the aspect ratio
    viewBox="0 0 27 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.2625 0H25.4031L16.3581 10.1652L27 24H18.6686L12.1384 15.611L4.67486 24H0.530357L10.2041 13.1236L0 0.00189153H8.54357L14.4373 7.66835L21.2625 0ZM19.8064 21.5637H22.1014L7.29 2.30958H4.82914L19.8064 21.5637Z"
      fill={color}
    />
  </svg>
);

export default YouTubeIcon;
