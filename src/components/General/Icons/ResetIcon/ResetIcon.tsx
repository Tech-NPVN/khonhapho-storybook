import SvgIcon, { TypeIcon } from '../SvgIcon';

const ResetIcon = ({ color = '#333', width, height, viewBox = '0 0 20 20' }: TypeIcon) => {
  return (
    <SvgIcon width={width} height={height} viewBox={viewBox}>
      <path
        d="M2.90547 19.307L3.93906 17.9852C1.63516 16.1828 0.156249 13.3797 0.15625 10.232C0.15625 4.79688 4.55078 0.397665 9.98828 0.390634C15.4305 0.383603 19.8437 4.7922 19.8437 10.232C19.8437 14.4813 17.1484 18.1024 13.3727 19.4805C13.2742 19.5156 13.1641 19.4641 13.1312 19.3656L12.6742 18.0367C12.6583 17.9904 12.6612 17.9397 12.6822 17.8954C12.7033 17.8512 12.7408 17.817 12.7867 17.8C12.9039 17.7578 13.0211 17.7109 13.1359 17.6617C14.0969 17.2563 14.9594 16.675 15.7 15.9344C16.436 15.1997 17.0233 14.3299 17.4297 13.3727C17.8492 12.3813 18.0625 11.3242 18.0625 10.2367C18.0625 9.14688 17.8492 8.0922 17.4297 7.10079C17.0251 6.14261 16.4375 5.27248 15.7 4.53907C14.9654 3.80243 14.0946 3.21575 13.1359 2.81173C12.1422 2.3922 11.0875 2.17892 9.99766 2.17892C8.90781 2.17892 7.85313 2.3922 6.85937 2.81173C5.89844 3.2172 5.03594 3.79845 4.29531 4.53907C3.55469 5.2797 2.97344 6.1422 2.56562 7.10079C2.14609 8.0922 1.93281 9.14923 1.93281 10.2367C1.93281 11.3266 2.14609 12.3813 2.56562 13.3727C2.97026 14.3308 3.55778 15.201 4.29531 15.9344C4.52734 16.1664 4.77344 16.3844 5.03125 16.5859L6.13281 15.175C6.15441 15.1471 6.18344 15.1258 6.21658 15.1137C6.24972 15.1015 6.28561 15.099 6.32014 15.1063C6.35466 15.1137 6.38641 15.1306 6.41173 15.1552C6.43705 15.1798 6.45492 15.211 6.46328 15.2453L7.47109 19.3609C7.49922 19.4781 7.41016 19.593 7.29062 19.593L3.05078 19.6117C2.89609 19.6094 2.80937 19.4289 2.90547 19.307Z"
        fill={color}
      />
    </SvgIcon>
  );
};

export default ResetIcon;