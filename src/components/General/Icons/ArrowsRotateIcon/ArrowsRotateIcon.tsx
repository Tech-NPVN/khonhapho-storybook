import SvgIcon, { TypeIcon } from '../SvgIcon';

const ArrowsRotateIcon = ({ color = '#333', width, height, viewBox, className = '' }: TypeIcon) => {
  return (
    <SvgIcon width={width} height={height} viewBox={viewBox} className={className}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.33333 2.68902C5.48465 2.68902 3.15152 5.07972 3.15152 7.9987C3.15152 8.32453 2.89374 8.58866 2.57576 8.58866C2.25778 8.58866 2 8.32453 2 7.9987C2 4.42807 4.84868 1.50909 8.33333 1.50909C10.7991 1.50909 12.9581 2.9359 13.9757 5.08647C14.1144 5.37966 13.9949 5.73257 13.7088 5.87472C13.4226 6.01687 13.0782 5.89443 12.9395 5.60124C12.1147 3.85806 10.3585 2.68902 8.33333 2.68902Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.0909 7.40873C14.4089 7.40873 14.6667 7.67287 14.6667 7.9987C14.6667 11.5693 11.818 14.4883 8.33333 14.4883C5.86758 14.4883 3.70861 13.0615 2.69102 10.9109C2.55229 10.6177 2.67178 10.2648 2.9579 10.1227C3.24403 9.98053 3.58844 10.103 3.72717 10.3962C4.552 12.1393 6.30818 13.3084 8.33333 13.3084C11.182 13.3084 13.5152 10.9177 13.5152 7.9987C13.5152 7.67287 13.7729 7.40873 14.0909 7.40873Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.0531 1.33745C14.3682 1.38123 14.589 1.67846 14.5463 2.00134L14.0857 5.48212C14.043 5.80449 13.7538 6.03064 13.4391 5.98764L9.98451 5.51567C9.66932 5.47261 9.44787 5.17588 9.4899 4.85291C9.53192 4.52994 9.82151 4.30303 10.1367 4.34609L13.0218 4.74027L13.4052 1.8428C13.4479 1.51992 13.738 1.29367 14.0531 1.33745Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.58098 10.5153C2.62364 10.1929 2.91291 9.96676 3.22761 10.0098L6.68216 10.4817C6.99735 10.5248 7.21879 10.8215 7.17677 11.1445C7.13474 11.4675 6.84516 11.6944 6.52997 11.6513L3.64486 11.2571L3.26145 14.1546C3.21872 14.4775 2.92865 14.7037 2.61355 14.6599C2.29845 14.6162 2.07765 14.3189 2.12037 13.9961L2.58098 10.5153Z"
        fill={color}
      />
    </SvgIcon>
  );
};

export default ArrowsRotateIcon;