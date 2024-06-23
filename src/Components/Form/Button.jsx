import { twMerge } from "tailwind-merge";

export default function Button({ className, children, ...rest }) {
    return (
        <>
            <button className={twMerge(`bg-primary text-white rounded-lg px-1 md:px-2 lg:px-6 py-2 text-xs sm:text-sm lg:text-lg ${className}`)} {...rest}>{children}</button>
        </>
    )
}