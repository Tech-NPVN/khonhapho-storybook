import SvgIcon, { TypeIcon } from '../SvgIcon';

const AlarmClock = ({ color = '#333', height, width, viewBox = '0 0 22 22' }: TypeIcon) => {
  return (
    <SvgIcon width={width} height={height} viewBox={viewBox}>
      <path
        d="M11.0001 21C15.9707 21 20.0001 16.9706 20.0001 12C20.0001 7.02944 15.9707 3 11.0001 3C6.02953 3 2.00009 7.02944 2.00009 12C2.00009 16.9706 6.02953 21 11.0001 21Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.4999 8.5L10.9999 12"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.9998 18L18.9998 21"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.99982 18L2.99982 21"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 4L4 1"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.9998 1L20.9998 4"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.9999 3V1"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
};

export default AlarmClock;
