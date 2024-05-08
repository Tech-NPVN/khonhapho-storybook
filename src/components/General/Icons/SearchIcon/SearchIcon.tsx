import SvgIcon, { TypeIcon } from '../SvgIcon';

const SearchIcon = ({ color = '#333', width, height, viewBox, className = '' }: TypeIcon) => {
  return (
    <SvgIcon width={width} height={height} viewBox={viewBox} className={className}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.1304 10.2069L14.6666 13.7432L13.743 14.6668L10.2067 11.1306L11.1304 10.2069Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.21157 2.63978C4.68654 2.63978 2.63959 4.68672 2.63959 7.21175C2.63959 9.73679 4.68654 11.7837 7.21157 11.7837C9.7366 11.7837 11.7835 9.73679 11.7835 7.21175C11.7835 4.68672 9.7366 2.63978 7.21157 2.63978ZM1.33331 7.21175C1.33331 3.96528 3.9651 1.3335 7.21157 1.3335C10.458 1.3335 13.0898 3.96528 13.0898 7.21175C13.0898 10.4582 10.458 13.09 7.21157 13.09C3.9651 13.09 1.33331 10.4582 1.33331 7.21175Z"
        fill={color}
      />
    </SvgIcon>
  );
};

export default SearchIcon;
