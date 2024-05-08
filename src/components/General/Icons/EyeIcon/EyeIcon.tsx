import SvgIcon, { TypeIcon } from '../SvgIcon';

const EyeIcon = ({ color = '#333', width, height, viewBox, className = '' }: TypeIcon) => {
  return (
    <SvgIcon width={width} height={height} viewBox={viewBox} className={className}>
      <path
        d="M14.7219 7.59688C13.2407 4.47656 11.0016 2.90625 8.00006 2.90625C4.99693 2.90625 2.75943 4.47656 1.27818 7.59844C1.21877 7.72425 1.18796 7.86165 1.18796 8.00078C1.18796 8.13991 1.21877 8.27732 1.27818 8.40312C2.75943 11.5234 4.9985 13.0938 8.00006 13.0938C11.0032 13.0938 13.2407 11.5234 14.7219 8.40156C14.8422 8.14844 14.8422 7.85469 14.7219 7.59688ZM8.00006 11.9688C5.47975 11.9688 3.63443 10.6906 2.33287 8C3.63443 5.30938 5.47975 4.03125 8.00006 4.03125C10.5204 4.03125 12.3657 5.30938 13.6672 8C12.3672 10.6906 10.5219 11.9688 8.00006 11.9688ZM7.93756 5.25C6.41881 5.25 5.18756 6.48125 5.18756 8C5.18756 9.51875 6.41881 10.75 7.93756 10.75C9.45631 10.75 10.6876 9.51875 10.6876 8C10.6876 6.48125 9.45631 5.25 7.93756 5.25ZM7.93756 9.75C6.97037 9.75 6.18756 8.96719 6.18756 8C6.18756 7.03281 6.97037 6.25 7.93756 6.25C8.90475 6.25 9.68756 7.03281 9.68756 8C9.68756 8.96719 8.90475 9.75 7.93756 9.75Z"
        fill={color}
      />
    </SvgIcon>
  );
};

export default EyeIcon;
