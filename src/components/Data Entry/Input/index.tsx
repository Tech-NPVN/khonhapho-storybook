import { ComponentProps, forwardRef } from 'react';

type InputProps = ComponentProps<'input'>;



export const Input = forwardRef<HTMLInputElement, InputProps>(({ ...props }, ref) => {
    return (
        <input
            ref={ref}
            className="p-3 w-full"
            type={props.type}
            name={props.name}
            placeholder={props.placeholder}
            onError={props.onError}
            {...props}
        />
    );
});
