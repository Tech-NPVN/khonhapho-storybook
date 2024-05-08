import SvgIcon, { TypeIcon } from '../SvgIcon';

const AngleUpIcon = ({ color = '#333', height, width, viewBox }: TypeIcon) => {
  return (
    <SvgIcon width={width} height={height} viewBox={viewBox}>
      <path
        d="M2.77827 10.666L3.83092 10.666C3.9025 10.666 3.96987 10.64 4.01197 10.5973L7.99941 6.5181L11.9868 10.5973C12.0289 10.64 12.0963 10.666 12.1679 10.666L13.2205 10.666C13.3118 10.666 13.3651 10.5889 13.3118 10.5337L8.36292 5.47018C8.18327 5.28685 7.81555 5.28685 7.6373 5.47018L2.68844 10.5337C2.63371 10.5889 2.68704 10.666 2.77827 10.666Z"
        fill={color}
      />
    </SvgIcon>
  );
};

export default AngleUpIcon;
