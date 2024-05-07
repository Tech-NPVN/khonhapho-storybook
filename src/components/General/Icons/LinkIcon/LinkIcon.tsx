import SvgIcon, { TypeIcon } from '../SvgIcon';

const LinkIcon = ({ color = '#333', width, height, viewBox = '0 0 22 22' }: TypeIcon) => {
  return (
    <SvgIcon width={width} height={height} viewBox={viewBox}>
      <path
        d="M6.46269 11.6481L4.19406 13.9168C3.12011 14.9907 3.12011 16.7319 4.19406 17.8059C5.268 18.8798 7.0092 18.8798 8.08314 17.8059L11.9722 13.9168C13.0462 12.8428 13.0462 11.1016 11.9722 10.0277"
        stroke={color}
        strokeWidth="2"
      />
      <path
        d="M10.0276 11.9724C8.95361 10.8984 8.95361 9.15723 10.0276 8.08329L13.9166 4.1942C14.9906 3.12026 16.7318 3.12026 17.8057 4.1942C18.8797 5.26814 18.8797 7.00935 17.8057 8.08329L15.354 10.5418"
        stroke={color}
        strokeWidth="2"
      />
    </SvgIcon>
  );
};

export default LinkIcon;
