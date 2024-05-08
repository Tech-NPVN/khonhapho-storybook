import SvgIcon, { TypeIcon } from '../SvgIcon';

const ListUiIcon = ({
  color = '#333',
  width,
  height,
  viewBox = '0 0 21 20',
  className = '',
}: TypeIcon) => {
  return (
    <SvgIcon width={width} height={height} viewBox={viewBox} className={className}>
      <rect x="1.55127" y="3.1543" width="3.23077" height="3.23077" rx="1.61538" fill={color} />
      <rect x="5.85889" y="3.1543" width="12.9231" height="3.23077" rx="1.61538" fill={color} />
      <rect x="1.55127" y="8.38477" width="3.23077" height="3.23077" rx="1.61538" fill={color} />
      <rect x="5.85889" y="8.38477" width="12.9231" height="3.23077" rx="1.61538" fill={color} />
      <rect x="1.55127" y="13.6152" width="3.23077" height="3.23077" rx="1.61538" fill={color} />
      <rect x="5.85889" y="13.6152" width="12.9231" height="3.23077" rx="1.61538" fill={color} />
    </SvgIcon>
  );
};

export default ListUiIcon;
