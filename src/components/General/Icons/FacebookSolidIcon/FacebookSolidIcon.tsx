import SvgIcon, { TypeIcon } from '../SvgIcon';

const FacebookSolidIcon = ({
  color = '#333',
  width,
  height,
  viewBox = '0 0 20 21',
  className = '',
}: TypeIcon) => {
  return (
    <SvgIcon width={width} height={height} viewBox={viewBox} className={className}>
      <rect y="0.304688" width="20" height="20" rx="4" fill={color} />
      <path
        d="M8.22601 16.7497H10.8576V10.4697H12.6944L12.8944 8.36969H10.8576V7.17469C10.8576 6.67469 10.9576 6.48469 11.4628 6.48469H12.8944V4.30469H11.0629C9.09969 4.30469 8.21548 5.12469 8.21548 6.69469V8.37469H6.8418V10.4997H8.21548L8.22601 16.7497Z"
        fill="white"
      />
    </SvgIcon>
  );
};

export default FacebookSolidIcon;
