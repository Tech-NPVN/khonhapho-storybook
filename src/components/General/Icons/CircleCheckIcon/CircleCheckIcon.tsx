import SvgIcon, { TypeIcon } from '../SvgIcon';

const CircleCheckIcon = ({ color = '#333', width, height, viewBox = '0 0 21 20' }: TypeIcon) => {
  return (
    <SvgIcon width={width} height={height} viewBox={viewBox}>
      <rect x="0.5" width="20" height="20" rx="10" fill="#36D399" />
      <path
        d="M15.1872 6.22656H14.3681C14.2532 6.22656 14.1442 6.2793 14.0739 6.36953L9.24228 12.4902L6.92548 9.55469C6.89044 9.51019 6.84576 9.47421 6.79482 9.44945C6.74388 9.42469 6.68798 9.41179 6.63134 9.41172H5.8122C5.73369 9.41172 5.69033 9.50195 5.73837 9.56289L8.94814 13.6293C9.09814 13.8191 9.38642 13.8191 9.53759 13.6293L15.261 6.37656C15.3091 6.3168 15.2657 6.22656 15.1872 6.22656Z"
        fill={color}
      />
    </SvgIcon>
  );
};

export default CircleCheckIcon;
