import SvgIcon, { TypeIcon } from '../SvgIcon';

const EmailIcon = ({
  color = '#333',
  width,
  height,
  viewBox = '0 0 20 20',
  className = '',
}: TypeIcon) => {
  return (
    <SvgIcon width={width} height={height} viewBox={viewBox} className={className}>
      <path
        d="M2.7 1.30469H15.3C16.1663 1.30469 16.875 2.09219 16.875 3.05469V13.5547C16.875 14.5172 16.1663 15.3047 15.3 15.3047H2.7C1.83375 15.3047 1.125 14.5172 1.125 13.5547V3.05469C1.125 2.09219 1.83375 1.30469 2.7 1.30469Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.875 3.05469L9 9.17969L1.125 3.05469"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
};

export default EmailIcon;
