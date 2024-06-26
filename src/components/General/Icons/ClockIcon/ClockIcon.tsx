import SvgIcon, { TypeIcon } from '../SvgIcon';

const ClockIcon = ({ color = '#333', width, height, viewBox, className }: TypeIcon) => {
  return (
    <SvgIcon
      width={width}
      height={height}
      viewBox={viewBox}
      className={`dark:[&>path]:fill-white ${className}`}
    >
      <path
        d="M8 1.5C4.13438 1.5 1 4.63438 1 8.5C1 12.3656 4.13438 15.5 8 15.5C11.8656 15.5 15 12.3656 15 8.5C15 4.63438 11.8656 1.5 8 1.5ZM8 14.3125C4.79063 14.3125 2.1875 11.7094 2.1875 8.5C2.1875 5.29063 4.79063 2.6875 8 2.6875C11.2094 2.6875 13.8125 5.29063 13.8125 8.5C13.8125 11.7094 11.2094 14.3125 8 14.3125Z"
        fill={color}
      />
      <path
        d="M10.7297 10.4781L8.50156 8.86718V5C8.50156 4.93125 8.44531 4.875 8.37656 4.875H7.625C7.55625 4.875 7.5 4.93125 7.5 5V9.30311C7.5 9.34374 7.51875 9.38124 7.55156 9.40467L10.1359 11.289C10.1922 11.3297 10.2703 11.3172 10.3109 11.2625L10.7578 10.6531C10.7984 10.5953 10.7859 10.5172 10.7297 10.4781Z"
        fill={color}
      />
    </SvgIcon>
  );
};

export default ClockIcon;
