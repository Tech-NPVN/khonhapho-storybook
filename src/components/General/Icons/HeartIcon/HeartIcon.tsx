import SvgIcon, { TypeIcon } from '../SvgIcon';

const HeartIcon = ({
  color = '#333',
  width,
  height,
  viewBox = '0 0 16 22',
  className = '',
}: TypeIcon) => {
  return (
    <SvgIcon width={width} height={height} viewBox={viewBox} className={className}>
      <circle cx="8" cy="11" r="8" fill="url(#paint0_linear_380_18306)" />
      <path
        d="M11.1075 8.007C11.4273 8.29479 11.6671 8.63055 11.795 9.03026C11.923 9.44595 11.9389 9.84566 11.843 10.2614C11.7471 10.6771 11.5552 11.0288 11.2674 11.3166L8.18167 14.5143C8.06975 14.6262 7.94185 14.6742 7.81394 14.6742C7.67004 14.6742 7.54214 14.6262 7.44621 14.5143L4.36045 11.3326C4.05667 11.0288 3.86481 10.6771 3.76888 10.2614C3.67295 9.84566 3.70493 9.44595 3.83284 9.03026C3.96074 8.63055 4.18458 8.29479 4.52034 8.007C4.80813 7.76717 5.12789 7.60729 5.49563 7.54334C5.84737 7.47938 6.2151 7.51136 6.56685 7.62328C6.91859 7.75119 7.22237 7.94305 7.49417 8.21485L7.81394 8.53462L8.13371 8.21485C8.38952 7.94305 8.70929 7.75119 9.06103 7.62328C9.41278 7.51136 9.76452 7.47938 10.1323 7.54334C10.484 7.60729 10.8198 7.76717 11.1075 8.007Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_380_18306"
          x1="8"
          y1="3"
          x2="8"
          y2="19"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={color} />
          <stop offset="1" stopColor={color} />
        </linearGradient>
      </defs>
    </SvgIcon>
  );
};

export default HeartIcon;
