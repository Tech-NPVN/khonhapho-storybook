import SvgIcon, { TypeIcon } from '../SvgIcon';

const ReportIcon = ({ color = '#333', width, height, viewBox, className = '' }: TypeIcon) => {
  return (
    <SvgIcon
      width={width}
      height={height}
      viewBox={viewBox}
      className={`dark:[&>path]:fill-white ${className}`}
    >
      <path
        d="M13.3531 4.50938L9.99063 1.14688C9.89688 1.05313 9.77031 1 9.6375 1H3C2.72344 1 2.5 1.22344 2.5 1.5V14.5C2.5 14.7766 2.72344 15 3 15H13C13.2766 15 13.5 14.7766 13.5 14.5V4.86406C13.5 4.73125 13.4469 4.60313 13.3531 4.50938ZM9.40625 2.15313L12.3469 5.09375H9.40625V2.15313ZM12.375 13.875H3.625V2.125H8.34375V5.5C8.34375 5.67405 8.41289 5.84097 8.53596 5.96404C8.65903 6.08711 8.82595 6.15625 9 6.15625H12.375V13.875Z"
        fill={color}
      />
      <path
        d="M4.875 7.65625V8.40625C4.875 8.475 4.93125 8.53125 5 8.53125H11C11.0687 8.53125 11.125 8.475 11.125 8.40625V7.65625C11.125 7.5875 11.0687 7.53125 11 7.53125H5C4.93125 7.53125 4.875 7.5875 4.875 7.65625ZM7.875 9.65625H5C4.93125 9.65625 4.875 9.7125 4.875 9.78125V10.5312C4.875 10.6 4.93125 10.6562 5 10.6562H7.875C7.94375 10.6562 8 10.6 8 10.5312V9.78125C8 9.7125 7.94375 9.65625 7.875 9.65625Z"
        fill={color}
      />
    </SvgIcon>
  );
};

export default ReportIcon;
