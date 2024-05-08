import SvgIcon, { TypeIcon } from '../SvgIcon';

const ArrowsUpToLineIcon = ({
  color = '#333',
  width,
  height,
  viewBox,
  className = '',
}: TypeIcon) => {
  return (
    <SvgIcon width={width} height={height} viewBox={viewBox} className={className}>
      <path d="M1 1H17" stroke={color} strokeWidth="1.5" strokeLinecap="square" />
      <path
        d="M9 5L6.11325 10H11.8868L9 5ZM8.5 17V17.5H9.5V17H8.5ZM8.5 9.5V17H9.5V9.5H8.5Z"
        fill={color}
      />
    </SvgIcon>
  );
};

export default ArrowsUpToLineIcon;
