import bonbon from '../../assets/logo/bonbon.png';
import Button from "../../Components/Form/Button.jsx";
import {twMerge} from "tailwind-merge"

let isActive = window.location.pathname;

function Navbar() {
    return (
    <>
        <div className={twMerge(`flex items-center w-full px-24 shadow-xl sticky top-0 bg-white`)}>
            <img src={bonbon} className={twMerge(`w-[5%]`)}></img>
            <div className={twMerge(`flex items-center justify-center space-x-20 w-[90%]`)}>
                <a href='/' className={twMerge(`${isActive == '/' ? 'font-bold' : ''}`)}>Beranda</a>
                <a href='/katalog' className={twMerge(`${isActive == '/katalog' ? 'font-bold' : ''}`)}>Katalog</a>
                <a href='/forum' className={twMerge(`${isActive == '/forum' ? 'font-bold' : ''}`)}>Forum</a>
                <a href='/blog' className={twMerge(`${isActive == '/blog' ? 'font-bold' : ''}`)}>Blog</a>
            </div>
            <Button className={twMerge(`w-[10%]`)}>Masuk</Button>
        </div>
    </>
    );
}

export default Navbar;