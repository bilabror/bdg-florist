import { twMerge } from "tailwind-merge";

export default function Button({ className, children, ...rest }) {
    return (
        <>
            <button className={twMerge(`bg-primary text-white rounded-lg px-6 py-2 ${className || ''}`)} {...rest}>{children}</button>
        </>
    )
}