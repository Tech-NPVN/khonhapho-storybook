import SvgIcon, { TypeIcon } from '../SvgIcon';

const CheckIcon = ({
  color = '#333',
  width,
  height,
  viewBox = '0 0 22 22',
  className = '',
}: TypeIcon) => {
  return (
    <SvgIcon width={width} height={height} viewBox={viewBox} className={className} fill={color}>
      <path
        d="M19.5931 4.08203H18.0914C17.8808 4.08203 17.681 4.17871 17.5521 4.34414L8.6941 15.5654L4.44664 10.1836C4.38238 10.102 4.30048 10.0361 4.20709 9.99066C4.11369 9.94526 4.01122 9.92161 3.90738 9.92148H2.40562C2.26168 9.92148 2.18218 10.0869 2.27027 10.1986L8.15484 17.6537C8.42984 18.0018 8.95836 18.0018 9.2355 17.6537L19.7285 4.35703C19.8166 4.24746 19.7371 4.08203 19.5931 4.08203Z"
        fill=""
      />
    </SvgIcon>
  );
};

export default CheckIcon;
