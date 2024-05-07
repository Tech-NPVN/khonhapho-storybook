import { ComponentProps, forwardRef } from 'react';

type InputProps = ComponentProps<'input'> & { value: string,errorMessage:string }




export const Input = forwardRef<HTMLInputElement, InputProps>(({color,size, value,...props }, ref) => {
    return (
        <input
            ref={ref}
            className="p-3 bg-red-200"
            type={props.type}
            name={props.name}
            placeholder={props.placeholder}
            onError={props.onError}
            style={{color}}
            value={value}
            {...props}
        />
    );
});
