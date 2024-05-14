import SvgIcon, { TypeIcon } from '../SvgIcon';

const GitBranchIcon = ({ color = '#333', width, height, viewBox, className = '' }: TypeIcon) => {
  return (
    <SvgIcon
      width={width}
      height={height}
      viewBox={viewBox}
      className={`dark:[&>path]:stroke-white  ${className}`}
    >
      <path d="M2.5 4.80469V11.8047" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M9.5 8.30469C10.4665 8.30469 11.25 7.52119 11.25 6.55469C11.25 5.58819 10.4665 4.80469 9.5 4.80469C8.5335 4.80469 7.75 5.58819 7.75 6.55469C7.75 7.52119 8.5335 8.30469 9.5 8.30469Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 4.80469C3.4665 4.80469 4.25 4.02119 4.25 3.05469C4.25 2.08819 3.4665 1.30469 2.5 1.30469C1.5335 1.30469 0.75 2.08819 0.75 3.05469C0.75 4.02119 1.5335 4.80469 2.5 4.80469Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 15.3047C3.4665 15.3047 4.25 14.5212 4.25 13.5547C4.25 12.5882 3.4665 11.8047 2.5 11.8047C1.5335 11.8047 0.75 12.5882 0.75 13.5547C0.75 14.5212 1.5335 15.3047 2.5 15.3047Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 8.30469C9.5 9.69707 8.94688 11.0324 7.96231 12.017C6.97774 13.0016 5.64239 13.5547 4.25 13.5547"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
};

export default GitBranchIcon;
