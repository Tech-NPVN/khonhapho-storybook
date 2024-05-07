import SvgIcon, { TypeIcon } from '../SvgIcon';

const DownSolidIcon = ({ color = '#333', width, height, viewBox = '0 0 12 12' }: TypeIcon) => {
  return (
    <SvgIcon width={width} height={height} viewBox={viewBox}>
      <path
        d="M9.84812 3.51562H2.15124C1.92038 3.51562 1.79148 3.75937 1.93445 3.92578L5.78288 8.38828C5.89304 8.51602 6.10515 8.51602 6.21648 8.38828L10.0649 3.92578C10.2079 3.75937 10.079 3.51562 9.84812 3.51562Z"
        fill={color}
      />
    </SvgIcon>
  );
};

export default DownSolidIcon;
