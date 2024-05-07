import { cn } from '@/utils';
import { VariantProps, cva } from 'class-variance-authority';

const rateStyles = cva(
    'object-cover',
    {
        variants: {
            size: {
                sm: ["h-[22px] w-[22px]"],
                lg: ["h-[40px] w-[40px]"],
                default: ["h-[30px] w-[30px] "],
            },
            shape: {
                circle: ["rounded-full "],
                square: ["rounded-none "],
            },
        },
        defaultVariants: {
            size: "lg",
            shape: "circle",
        },

    }
);

type RateProps = React.ComponentProps<"button"> & VariantProps<typeof rateStyles>
    & {
        alt: string;
        shape?: 'circle' | 'square';
        src: string;
        width: number;
        height: number;
    }

export const Rate = ({ className, alt, shape, src, width, height }: RateProps) => {
    return (
        <div>
            {src && (
                <img
                    className={cn(rateStyles({ className, shape }))}
                    alt={alt}
                    src={src as string}
                    style={{ width: `${width}px`, height: `${height}px` }}
                />
            )}
        </div>
    );
}