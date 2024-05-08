import SvgIcon, { TypeIcon } from '../SvgIcon';

const DetailIcon = ({
  color = '#333',
  width,
  height,
  viewBox = '0 0 21 20',
  className = '',
}: TypeIcon) => {
  return (
    <SvgIcon width={width} height={height} viewBox={viewBox} className={className}>
      <rect x="0.5" y="6" width="1.5" height="8" fill={color} />
      <rect x="4.25" y="4.75" width="12.5" height="10.5" stroke={color} strokeWidth="1.5" />
      <rect x="19" y="6" width="1.5" height="8" fill={color} />
    </SvgIcon>
  );
};

export default DetailIcon;
