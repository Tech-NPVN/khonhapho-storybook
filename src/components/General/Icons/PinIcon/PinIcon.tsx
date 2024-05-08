import SvgIcon, { TypeIcon } from '../SvgIcon';

const PinIcon = ({ color = '#333', width, height, viewBox = '0 0 20 22' }: TypeIcon) => {
  return (
    <SvgIcon width={width} height={height} viewBox={viewBox}>
      <path
        d="M2.22217 21V3.22222C2.22217 1.99492 3.21709 1 4.44439 1H15.5555C16.7828 1 17.7777 1.99492 17.7777 3.22222V21L11.2016 16.7726C10.4696 16.3019 9.53028 16.3019 8.79828 16.7726L2.22217 21Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
};

export default PinIcon;
