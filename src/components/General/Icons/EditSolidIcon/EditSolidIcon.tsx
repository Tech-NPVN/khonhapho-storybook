import SvgIcon, { TypeIcon } from '../SvgIcon';

const EditSolidIcon = ({
  color = '#333',
  width,
  height,
  viewBox = '0 0 20 21',
  className = '',
}: TypeIcon) => {
  return (
    <SvgIcon width={width} height={height} viewBox={viewBox} className={className}>
      <path
        d="M15.1298 1.48794C15.3947 1.22302 15.7092 1.01288 16.0553 0.869508C16.4015 0.726136 16.7725 0.652344 17.1471 0.652344C17.5217 0.652344 17.8927 0.726136 18.2389 0.869508C18.585 1.01288 18.8995 1.22302 19.1644 1.48794C19.4293 1.75286 19.6395 2.06736 19.7828 2.41349C19.9262 2.75962 20 3.1306 20 3.50524C20 3.87989 19.9262 4.25087 19.7828 4.597C19.6395 4.94313 19.4293 5.25763 19.1644 5.52255L5.54759 19.1394L0 20.6523L1.51298 15.1048L15.1298 1.48794Z"
        fill={color}
      />
    </SvgIcon>
  );
};

export default EditSolidIcon;
