import { Button, CloseIcon } from '@/components/General';
import { cn } from '@/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { ReactNode } from 'react';

const tagStyles = cva(
    'rounded px-4 py-1 text-[16px] flex items-center justify-center w-fit bg-[#e7e7e7] text-[#000000]',
    {
        variants: {

        },
        defaultVariants: {

        },

    }
);

type TagProps = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof tagStyles>
    & {
        color?: string;
        children?: ReactNode;
        backgroundColor?: string;
        closeable?: boolean;
    }

export const Tag = ({ children, className, backgroundColor, closeable, color, ...props }: TagProps) => {
    return (

        <div
            className={cn(tagStyles({ className }))}
            style={{ color, backgroundColor }}
        >
            <span>
                {children}
            </span>
            {closeable &&
                <Button className='px-0' {...props}>
                    <CloseIcon color='' className='cursor-pointer fill-[gray] hover:fill-[#242526] transition-colors duration-300 ease-in-out' />
                </Button>
            }
        </div>
    );
}