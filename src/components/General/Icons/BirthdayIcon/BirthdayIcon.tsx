import SvgIcon, { TypeIcon } from '../SvgIcon';

const BirthdayIcon = ({ color = '#333', width, height, viewBox, className = '' }: TypeIcon) => {
  return (
    <SvgIcon width={width} height={height} viewBox={viewBox} className={className}>
      <path
        d="M11.8992 2.70508H2.09922C1.32602 2.70508 0.699219 3.33188 0.699219 4.10508V13.9051C0.699219 14.6783 1.32602 15.3051 2.09922 15.3051H11.8992C12.6724 15.3051 13.2992 14.6783 13.2992 13.9051V4.10508C13.2992 3.33188 12.6724 2.70508 11.8992 2.70508Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.79883 1.30469V4.10469"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.19922 1.30469V4.10469"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0.699219 6.9043H13.2992"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <ellipse cx="3.10039" cy="9.2918" rx="0.7" ry="0.7" fill={color} />
      <ellipse cx="10.7996" cy="9.2918" rx="0.7" ry="0.7" fill={color} />
      <ellipse cx="7.29961" cy="9.2918" rx="0.7" ry="0.7" fill={color} />
    </SvgIcon>
  );
};

export default BirthdayIcon;
