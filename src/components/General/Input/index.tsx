import { ComponentProps, forwardRef } from 'react';

// type InputProps = ComponentProps<'input'>;

interface Props {
    type: React.HTMLInputTypeAttribute,
    errorMessage?: string,
    placeholder?: string,
    name: string,
}


export const Input = forwardRef<HTMLInputElement, Props>(({ placeholder, name, type,errorMessage, ...props }: Props, ref) => {
    return (
        <input
            ref={ref}
            className="p-3 w-full"
            placeholder={placeholder}
            type={type}
            name={name}
            {...props}
        />
    );
});
