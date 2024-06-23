import bonbon from '../../assets/logo/bonbon.png';
import menu from '../../assets/icons/menu.svg';
import Button from "../../Components/Form/Button.jsx";
import {twMerge} from "tailwind-merge"
import { useState } from 'react';


function Navbar() {
    let isActive = window.location.pathname;
    const [navbar, setNavbar] = useState(false);

    function toggleNavbar() {
        setNavbar(!navbar);
    }

    return (
    <>
        <div className={twMerge(`hidden sm:flex items-center w-full px-2 md:px-12 lg:px-24 shadow-xl sticky top-0 bg-white`)}>
            <img src={bonbon} className={twMerge(`w-[5%]`)}></img>
            <div className={twMerge(`flex items-center justify-center sm:space-x-6 md:space-x-12 lg:space-x-20 text-xs sm:text-sm lg:text-lg w-[90%]`)}>
                <a href='/' className={twMerge(`${isActive == '/' ? 'font-bold' : ''}`)}>Beranda</a>
                <a href='/katalog' className={twMerge(`${isActive == '/katalog' ? 'font-bold' : ''}`)}>Katalog</a>
                <a href='/forum' className={twMerge(`${isActive == '/forum' ? 'font-bold' : ''}`)}>Forum</a>
                <a href='/blog' className={twMerge(`${isActive == '/blog' ? 'font-bold' : ''}`)}>Blog</a>
            </div>
            <Button className={twMerge(`w-[10%]`)}>Masuk</Button>
        </div>

        <div className={twMerge(`flex sm:hidden items-center justify-between w-full px-2 md:px-12 lg:px-24 shadow-xl sticky top-0 bg-white`)}>
            <img src={bonbon} className={twMerge(`w-[10%]`)}></img>
            <img src={menu} onClick={toggleNavbar}></img>
        </div>

        {
            navbar == true && (
                <>
                    <div className={twMerge(`flex flex-col right-0 bg-[#F9FAFB] border-2 border-slate-100 rounded w-[100%] text-left px-3 py-3 sticky top-[5%]`)}>
                        <a href='/' className={twMerge(`${isActive == '/' ? 'font-bold' : ''} p-2`)}>Beranda</a>
                        <a href='/katalog' className={twMerge(`${isActive == '/katalog' ? 'font-bold' : ''} p-2`)}>Katalog</a>
                        <a href='/forum' className={twMerge(`${isActive == '/forum' ? 'font-bold' : ''} p-2`)}>Forum</a>
                        <a href='/blog' className={twMerge(`${isActive == '/blog' ? 'font-bold' : ''} p-2`)}>Blog</a>
                    </div>
                </>
            )
        }
    </>
    );
}

export default Navbar;