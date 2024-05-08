type TypeSvgIcon = React.SVGProps<SVGSVGElement> & {
  children: React.ReactNode;
};

export type TypeIcon = {
  color?: string;
  width?: string;
  height?: string;
  viewBox?: string;
  className?: string;
};

const SvgIcon = ({ width, height, viewBox, children, className, ...props }: TypeSvgIcon) => {
  return (
    <svg
      width={width ?? '16'}
      height={height ?? '16'}
      viewBox={viewBox ?? '0 0 16 17'}
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {children}
    </svg>
  );
};

export default SvgIcon;
