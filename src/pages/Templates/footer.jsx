import {twMerge} from "tailwind-merge"

function Navbar() {
    return (
    <>
        <div className={twMerge(`flex flex-grow bg-[#129475] items-center w-full px-24 py-5 mb-auto`)}>
            Ini Footer
        </div>
    </>
    );
}

export default Navbar;