import SvgIcon, { TypeIcon } from '../SvgIcon';

const ArrowsExchangeIcon = ({ color = '#333', width, height, viewBox }: TypeIcon) => {
  return (
    <SvgIcon width={width} height={height} viewBox={viewBox}>
      <path
        d="M1 5H12.6694C12.7683 5 12.8072 4.87168 12.7249 4.81679L6.99967 1"
        stroke={color}
        strokeWidth="1.25"
      />
      <path
        d="M13 9H1.33028C1.23134 9 1.19248 9.12832 1.27481 9.18321L7 13"
        stroke={color}
        strokeWidth="1.25"
      />
    </SvgIcon>
  );
};

export default ArrowsExchangeIcon;
