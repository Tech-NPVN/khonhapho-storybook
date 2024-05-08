import SvgIcon, { TypeIcon } from '../SvgIcon';

const AnglePrevIcon = ({
  color = '#333',
  width,
  height,
  viewBox = '0 0 22 43',
  className = '',
}: TypeIcon) => {
  return (
    <SvgIcon width={width} height={height} viewBox={viewBox} className={className}>
      <path
        d="M21.6668 4.96876V0.617274C21.6668 0.240108 21.3217 0.0318218 21.0887 0.262625L0.884819 20.0836C0.713159 20.2512 0.574258 20.466 0.478711 20.7113C0.383164 20.9567 0.333496 21.2262 0.333496 21.4993C0.333496 21.7725 0.383164 22.042 0.478711 22.2874C0.574258 22.5327 0.713159 22.7474 0.884819 22.9151L21.0887 42.7361C21.3262 42.9669 21.6668 42.7586 21.6668 42.3814V38.0299C21.6668 37.7541 21.5637 37.4895 21.3934 37.3206L5.25904 21.5022L21.3934 5.67806C21.5637 5.50918 21.6668 5.2446 21.6668 4.96876Z"
        fill={color}
      />
    </SvgIcon>
  );
};

export default AnglePrevIcon;
