import {twMerge} from "tailwind-merge";

export default function Input({ className, ...rest }) {
    return (
        <>
        <input type="text" className={twMerge(`rounded-lg placeholder:font-medium py-3 px-5 placeholder:text-gray-300 border border-gray-300 ${className || ''}`)} {...rest} />
        </>
    )
}