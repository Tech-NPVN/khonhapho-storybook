import { cn } from '@/utils';
import { VariantProps, cva } from 'class-variance-authority';

const avatarStyles = cva(
    'object-cover',
    {
        variants: {
            shape: {
                circle: ["rounded-full "],
                square: ["rounded-none "],
            },
        },
        defaultVariants: {
            shape: "circle",
        },

    }
);

type AvatarProps = React.ImgHTMLAttributes<HTMLImageElement> & VariantProps<typeof avatarStyles>
    & {
        alt: string;
        shape?: 'circle' | 'square';
        src: string;
        width: number;
        height: number;
    }

export const Avatar = ({ className, alt, shape, src, width, height, ...props }: AvatarProps) => {
    return (
        <img
            className={cn(avatarStyles({ className, shape }))}
            alt={alt}
            src={src}
            style={{width, height}}
            {...props}
        />

    );
}