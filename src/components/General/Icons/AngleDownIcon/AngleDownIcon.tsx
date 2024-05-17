import SvgIcon, { TypeIcon } from '../SvgIcon';

const AngleDownIcon = ({ color = '#333', height, width, viewBox, className }: TypeIcon) => {
  return (
    <SvgIcon
      width={width}
      height={height}
      viewBox={viewBox}
      className={`dark:[&>path]:fill-white ${className}`}
    >
      <path
        d="M13.2214 5.3335H12.1688C12.0972 5.3335 12.0298 5.35954 11.9877 5.40225L8.00029 9.48141L4.01285 5.40225C3.97075 5.35954 3.90338 5.3335 3.8318 5.3335H2.77915C2.68792 5.3335 2.63458 5.41058 2.68792 5.46579L7.63677 10.5293C7.81642 10.7127 8.18415 10.7127 8.3624 10.5293L13.3113 5.46579C13.366 5.41058 13.3127 5.3335 13.2214 5.3335Z"
        fill={color}
      />
    </SvgIcon>
  );
};

export default AngleDownIcon;
