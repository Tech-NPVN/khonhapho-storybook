import SvgIcon, { TypeIcon } from '../SvgIcon';

const PhoneEnabledIcon = ({ color = '#333', height, width, viewBox }: TypeIcon) => {
  return (
    <SvgIcon width={width} height={height} viewBox={viewBox}>
      <path
        d="M13.8379 3.59687L12.1738 1.93438C12.0564 1.81647 11.9169 1.72293 11.7633 1.65911C11.6096 1.59529 11.4449 1.56246 11.2785 1.5625C10.9395 1.5625 10.6207 1.69531 10.3816 1.93438L8.59102 3.725C8.47312 3.84238 8.37958 3.98191 8.31576 4.13555C8.25194 4.2892 8.21911 4.45394 8.21915 4.62031C8.21915 4.95938 8.35196 5.27813 8.59102 5.51719L9.9004 6.82656C9.5939 7.50213 9.16778 8.1167 8.64258 8.64062C8.11871 9.16709 7.50419 9.59477 6.82852 9.90312L5.51915 8.59375C5.40176 8.47585 5.26224 8.3823 5.10859 8.31849C4.95495 8.25467 4.79021 8.22184 4.62383 8.22188C4.28477 8.22188 3.96602 8.35469 3.72696 8.59375L1.93477 10.3828C1.81673 10.5004 1.7231 10.6402 1.65928 10.7941C1.59546 10.948 1.5627 11.1131 1.5629 11.2797C1.5629 11.6188 1.69571 11.9375 1.93477 12.1766L3.59571 13.8375C3.97696 14.2203 4.50352 14.4375 5.04415 14.4375C5.15821 14.4375 5.26759 14.4281 5.3754 14.4094C7.48165 14.0625 9.57071 12.9422 11.2566 11.2578C12.941 9.575 14.0598 7.4875 14.4113 5.375C14.5176 4.72969 14.3035 4.06562 13.8379 3.59687Z"
        fill={color}
      />
    </SvgIcon>
  );
};

export default PhoneEnabledIcon;
