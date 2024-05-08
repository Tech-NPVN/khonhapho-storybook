import SvgIcon, { TypeIcon } from '../SvgIcon';

const BuildingIcon = ({ color = '#333', width, height, viewBox, className = '' }: TypeIcon) => {
  return (
    <SvgIcon width={width} height={height} viewBox={viewBox} className={className}>
      <rect x="6.16406" y="0.804688" width="8.33333" height="13" rx="0.5" stroke={color} />
      <circle cx="9.55122" cy="2.63715" r="0.777778" fill={color} />
      <circle cx="12.6645" cy="2.63715" r="0.777778" fill={color} />
      <circle cx="12.6645" cy="5.74848" r="0.777778" fill={color} />
      <circle cx="12.6645" cy="8.85981" r="0.777778" fill={color} />
      <path
        d="M1 7.73225L5.66667 4.19336L10.3333 7.73225V13.2934C10.3333 13.5615 10.2241 13.8187 10.0296 14.0083C9.83511 14.1979 9.57134 14.3045 9.2963 14.3045H2.03704C1.762 14.3045 1.49822 14.1979 1.30374 14.0083C1.10926 13.8187 1 13.5615 1 13.2934V7.73225Z"
        stroke={color}
        // fill={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M4.10938 14.3053V9.63867H7.22049V14.3053" />
      <path
        d="M4.10938 14.3053V9.63867H7.22049V14.3053"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
};

export default BuildingIcon;
