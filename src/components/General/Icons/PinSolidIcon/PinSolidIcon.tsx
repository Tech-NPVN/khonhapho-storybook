import SvgIcon, { TypeIcon } from '../SvgIcon';

const PinSolidIcon = ({
  color = '#333',
  width,
  height,
  viewBox = '0 0 9 12',
  className = '',
}: TypeIcon) => {
  return (
    <SvgIcon width={width} height={height} viewBox={viewBox} className={className}>
      <path
        d="M0 12V1.125C0 0.503672 0.503672 0 1.125 0H7.875C8.49633 0 9 0.503672 9 1.125V12L4.5 9.375L0 12Z"
        fill={color}
      />
    </SvgIcon>
  );
};

export default PinSolidIcon;
