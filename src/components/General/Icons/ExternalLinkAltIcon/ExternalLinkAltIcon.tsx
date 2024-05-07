import SvgIcon, { TypeIcon } from '../SvgIcon';

const ExternalLinkAltIcon = ({
  color = '#333',
  width,
  height,
  viewBox = '0 0 10 10',
}: TypeIcon) => {
  return (
    <SvgIcon width={width} height={height} viewBox={viewBox}>
      <path
        d="M9 7V8.25C9 8.66421 8.66421 9 8.25 9H1V1.75C1 1.33579 1.33579 1 1.75 1H3"
        stroke={color}
        strokeWidth="0.75"
        strokeLinecap="round"
      />
      <path d="M4 6L9 1M9 1H5M9 1V5" stroke={color} strokeWidth="0.75" strokeLinecap="round" />
    </SvgIcon>
  );
};

export default ExternalLinkAltIcon;
