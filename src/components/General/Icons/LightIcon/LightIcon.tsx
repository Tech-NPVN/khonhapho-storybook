import SvgIcon, { TypeIcon } from '../SvgIcon';

const LightIcon = ({
  color = '#333',
  width,
  height,
  viewBox = '0 0 16 16',
  className = '',
}: TypeIcon) => {
  return (
    <SvgIcon width={width} height={height} viewBox={viewBox} className={className}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.33337 7.44461H3.00004V8.55572H1.33337V7.44461Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.66671 2.88116L4.84127 4.05572L4.0556 4.84139L2.88103 3.66683L3.66671 2.88116Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.5556 1.3335V3.00016H7.44449V1.3335H8.5556Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.119 3.66683L11.9445 4.84139L11.1588 4.05572L12.3334 2.88116L13.119 3.66683Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 7.44461H14.6667V8.55572H13V7.44461Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9445 11.1589L13.119 12.3335L12.3334 13.1192L11.1588 11.9446L11.9445 11.1589Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.5556 13.0002V14.6668H7.44449V13.0002H8.5556Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.84127 11.9446L3.66671 13.1192L2.88103 12.3335L4.0556 11.1589L4.84127 11.9446Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.00004 5.22239C6.46592 5.22239 5.22226 6.46604 5.22226 8.00016C5.22226 9.53429 6.46592 10.7779 8.00004 10.7779C9.53417 10.7779 10.7778 9.53429 10.7778 8.00016C10.7778 6.46604 9.53417 5.22239 8.00004 5.22239ZM4.11115 8.00016C4.11115 5.85239 5.85227 4.11127 8.00004 4.11127C10.1478 4.11127 11.8889 5.85239 11.8889 8.00016C11.8889 10.1479 10.1478 11.8891 8.00004 11.8891C5.85227 11.8891 4.11115 10.1479 4.11115 8.00016Z"
        fill={color}
      />
    </SvgIcon>
  );
};

export default LightIcon;
