import {twMerge} from "tailwind-merge";

export default function IconCircle({className, src, ...rest}) {
    return (
        <>
            <div className={twMerge(`bg-primary w-10 h-10 rounded-full flex justify-center items-center ${className}`)} {...rest}>
                <img src={src} alt="" />
            </div>
        </>
    )
}