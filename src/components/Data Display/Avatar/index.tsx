import { cn } from '@/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { ReactNode } from 'react';

const avatarStyles = cva(
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

type AvatarProps = React.ComponentProps<"button"> & VariantProps<typeof avatarStyles>
    & {
        alt: string;
        shape: 'circle' | 'square';
        children: ReactNode;
        src: string | ReactNode;
        width?: number;
        height?: number;
    }

export const Avatar = ({ className, size, alt, shape, src, width, height, children }: AvatarProps) => {
    return (
        <div>
            {src && (
                <img
                    className={cn(avatarStyles({ className, size, shape }))}
                    alt={alt}
                    src={src as string}
                    style={{ width: `${width}px`, height: `${height}px` }}
                />
            )}
        </div>
    );
}