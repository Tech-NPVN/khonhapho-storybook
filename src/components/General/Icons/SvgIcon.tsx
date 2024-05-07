type TypeSvgIcon = React.SVGProps<SVGSVGElement> & {
  children: React.ReactNode;
};

export type TypeIcon = {
  color?: string;
  width?: string;
  height?: string;
  viewBox?: string;
};

const SvgIcon = ({ width, height, viewBox, children, ...props }: TypeSvgIcon) => {
  return (
    <svg
      width={width ?? '16'}
      height={height ?? '16'}
      viewBox={viewBox ?? '0 0 16 17'}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {children}
    </svg>
  );
};

export default SvgIcon;
