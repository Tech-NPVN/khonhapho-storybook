import { Typography } from '@/components/General';

export const NoResult = ({
  title = 'Không tìm thấy dữ liệu',
  className,
}: {
  title?: string;
  className?: string;
}) => {
  return (
    <div className={`flex flex-col justify-center items-center gap-4 mt-4 ${className}`}>
      <svg
        width="111"
        height="107"
        viewBox="0 0 111 107"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1097_144458)">
          <ellipse cx="95.1399" cy="12.7592" rx="15.3606" ry="12.4546" fill="#E5E6E8" />
          <path
            d="M81.3203 23.942C80.4037 24.2291 79.6489 23.1845 80.2093 22.4043L85.2694 15.3598C85.6677 14.8053 86.4923 14.8042 86.8922 15.3576L90.1092 19.8101C90.5091 20.3635 90.249 21.146 89.5975 21.35L81.3203 23.942Z"
            fill="#E5E6E8"
          />
          <ellipse cx="88.4965" cy="13.1743" rx="1.66061" ry="1.66061" fill="white" />
          <circle cx="94.7242" cy="13.1734" r="2.07576" fill="white" />
          <circle cx="101.367" cy="12.7594" r="2.07576" fill="white" />
          <ellipse cx="46.732" cy="98.6387" rx="46.232" ry="8.07226" fill="#D4D4D4" />
          <rect
            width="49.835"
            height="28.1632"
            transform="matrix(0.642612 -0.766191 0.771254 0.636528 8.90039 72.9297)"
            fill="#D9D9D9"
          />
          <rect
            width="49.9897"
            height="28.3651"
            transform="matrix(-0.652572 -0.757726 0.76296 -0.646446 63.6855 91.375)"
            fill="#D9D9D9"
          />
          <rect x="20.5332" y="18.9863" width="52.3091" height="72.2365" rx="4" fill="white" />
          <rect x="25.9297" y="24.3828" width="41.5152" height="24.9091" rx="2" fill="#E5E6E8" />
          <rect
            x="25.9297"
            y="55.1055"
            width="41.5152"
            height="3.32122"
            rx="1.66061"
            fill="#E5E6E8"
          />
          <rect
            x="25.9297"
            y="64.2383"
            width="41.5152"
            height="3.32122"
            rx="1.66061"
            fill="#E5E6E8"
          />
          <path
            d="M8.9082 72.957H24.1567C28.575 72.957 32.1567 76.5388 32.1567 80.957V102.018H16.9082C12.4899 102.018 8.9082 98.4359 8.9082 94.0177V72.957Z"
            fill="#E5E6E8"
          />
          <path
            d="M62.0488 80.957C62.0488 76.5387 65.6306 72.957 70.0488 72.957H85.2973V94.0177C85.2973 98.436 81.7156 102.018 77.2973 102.018H62.0488V80.957Z"
            fill="#E5E6E8"
          />
          <rect x="28.0059" y="80.8457" width="36.9485" height="21.1727" fill="#E5E6E8" />
          <path
            d="M35.0445 81.9039C32.851 81.2696 31.3893 79.1238 31.1066 78.197C30.7916 78.3635 30.4089 79.2643 30.364 79.5934C30.3191 79.9225 30.8379 80.8809 30.5573 81.3314L32.6535 82.0362L35.0445 81.9039Z"
            fill="#E5E6E8"
          />
          <path
            d="M59.2315 81.4272C60.0166 81.3683 62.9552 80.2964 63.402 78.329L63.4521 77.9988C63.4433 78.1115 63.4264 78.2216 63.402 78.329L63.0709 80.5095L62.8123 82.6105C62.3138 82.4397 61.2339 82.1045 60.9027 82.1293C60.5715 82.1542 59.4592 81.6876 59.2315 81.4272Z"
            fill="#E5E6E8"
          />
        </g>
        <defs>
          <clipPath id="clip0_1097_144458">
            <rect width="110" height="106.406" fill="white" transform="translate(0.5 0.304688)" />
          </clipPath>
        </defs>
      </svg>

      <Typography variant="p" className="text-sm">
        {title}
      </Typography>
    </div>
  );
};
