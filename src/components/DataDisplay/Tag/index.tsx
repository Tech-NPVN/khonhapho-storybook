import { cn } from '@/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { ReactNode } from 'react';

const tagStyles = cva(
    'rounded py-1 px-2 flex  items-center gap-1',
    {
        variants: {

        },
        defaultVariants: {
            shape: "circle",
        },

    }
);

type TagProps = React.ImgHTMLAttributes<HTMLDivElement> & VariantProps<typeof tagStyles>
    & {
        color?: string;
        children?: ReactNode;
        backgroundColor?: string;
        borderRadius?: number;
        closeIcon?: boolean;
    }

export const Tag = ({ children, className, backgroundColor, closeIcon, borderRadius, color, ...props }: TagProps) => {
    return (
        <div
            {...props}
            className={cn(tagStyles({ className }))}
            style={{ color, backgroundColor }}
        >
            <span>
                {children}
            </span>
            {closeIcon &&
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.96208 6.00032L11.7985 0.401399C11.8796 0.308352 11.8114 0.166992 11.6861 0.166992H10.2158C10.1292 0.166992 10.0463 0.204569 9.98922 0.268986L6.00033 4.88734L2.01143 0.268986C1.95616 0.204569 1.87325 0.166992 1.78481 0.166992H0.314536C0.189249 0.166992 0.121079 0.308352 0.202146 0.401399L5.03857 6.00032L0.202146 11.5992C0.183986 11.62 0.172336 11.6454 0.168578 11.6723C0.16482 11.6993 0.169113 11.7268 0.180946 11.7515C0.192779 11.7761 0.211657 11.797 0.235336 11.8116C0.259016 11.8261 0.286503 11.8338 0.314536 11.8337H1.78481C1.8714 11.8337 1.95431 11.7961 2.01143 11.7317L6.00033 7.11331L9.98922 11.7317C10.0445 11.7961 10.1274 11.8337 10.2158 11.8337H11.6861C11.8114 11.8337 11.8796 11.6923 11.7985 11.5992L6.96208 6.00032Z" fill="#242526" />
                </svg>
            }

        </div>

    );
}