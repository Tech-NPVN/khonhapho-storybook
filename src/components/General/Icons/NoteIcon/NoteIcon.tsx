import SvgIcon, { TypeIcon } from '../SvgIcon';

const NoteIcon = ({ color = '#333', width, height, viewBox, className = '' }: TypeIcon) => {
  return (
    <SvgIcon
      width={width}
      height={height}
      viewBox={viewBox}
      className={`dark:[&>path]:stroke-white dark:[&>g>rect]:stroke-white ${className}`}
    >
      <g clipPath="url(#clip0_757_77883)">
        <rect x="8.5" y="8.5" width="15" height="15" stroke={color} />
      </g>
      <path d="M0.5 0.5H15.5V12C15.5 13.933 13.933 15.5 12 15.5H0.5V0.5Z" stroke={color} />
      <defs>
        <clipPath id="clip0_757_77883">
          <path d="M0 0H16V12C16 14.2091 14.2091 16 12 16H0V0Z" fill="white" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

export default NoteIcon;
