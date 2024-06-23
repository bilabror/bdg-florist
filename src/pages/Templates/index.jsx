import Header from "./header.jsx"
import Footer from "@/Components/Layouts/Footer.jsx"
import {twMerge} from "tailwind-merge"

function Navbar({ children }) {
    return (
    <>
        <Header></Header>
        <div className={twMerge(`min-h-screen`)}>
            {children}
        </div>
        <Footer></Footer>
    </>
    );
}

export default Navbar;