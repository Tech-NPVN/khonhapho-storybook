import SvgIcon, { TypeIcon } from '../SvgIcon';

const NextSolidIcon = ({
  color = '#333',
  width,
  height,
  viewBox = '0 0 12 12',
  className = '',
}: TypeIcon) => {
  return (
    <SvgIcon width={width} height={height} viewBox={viewBox} className={className}>
      <path
        d="M8.38828 5.78337L3.92578 1.93493C3.75937 1.79196 3.51562 1.92087 3.51562 2.15173V9.84861C3.51562 10.0795 3.75937 10.2084 3.92578 10.0654L8.38828 6.21696C8.51602 6.10681 8.51602 5.89353 8.38828 5.78337Z"
        fill={color}
      />
    </SvgIcon>
  );
};

export default NextSolidIcon;
