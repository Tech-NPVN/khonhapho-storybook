import { cn } from '@/utils';
import { VariantProps, cva } from 'class-variance-authority';

const starStyles = cva('fill-current', {
  variants: {
    size: {
      small: 'h-4 w-4',
      medium: 'h-6 w-6',
      large: 'h-9 w-9',
    },
  },
  defaultVariants: {
    size: 'small',
  },
});

type RateProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof starStyles> & {
    rating: number;
  };

export const Rate = ({ rating, size, ...props }: RateProps) => {
  const handleWidth = (order: number) => {
    if (order <= rating) {
      return '100%';
    } else if (order > rating && order - rating < 1) {
      return (rating - Math.floor(rating)) * 100 + '%';
    }
    return '0%';
  };

  return (
    <div className="flex " {...props}>
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <div key={index} className="relative">
            <div
              className="absolute top-0 left-0 h-full overflow-hidden"
              style={{ width: handleWidth(index + 1) }}
            >
              <svg
                enableBackground="new 0 0 15 15"
                viewBox="0 0 15 15"
                x="0"
                y="0"
                className={cn(starStyles({ size }), 'text-warningLight')}
              >
                <polygon
                  points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                ></polygon>
              </svg>
            </div>
            <svg
              enableBackground="new 0 0 15 15"
              viewBox="0 0 15 15"
              x="0"
              y="0"
              className={cn(starStyles({ size }), 'text-dividerLight dark:text-textSecondaryDark')}
            >
              <polygon
                points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
              ></polygon>
            </svg>
          </div>
        ))}
    </div>
  );
};
