import bonbonIcon from "@/assets/logo/bonbon-white.png"
import Button from "@/Components/Form/Button.jsx"
import instagramIcon from "@/assets/icons/akar-icons_instagram-fill.svg"
import youtubeIcon from "@/assets/icons/ant-design_facebook-outlined.svg"
import twitterIcon from "@/assets/icons/ant-design_youtube-outlined.svg"
import facebookIcon from "@/assets/icons/iconoir_twitter.svg"
import IconCircle from "@/Components/IconCircle.jsx";
import Input from "@/Components/Form/Input.jsx";

const FirstFooterItem = () => (
    <div className="w-full flex text-lg flex-col items-start text-white/75 lg:w-1/3">
        <div className="">
            <img src={bonbonIcon} alt="Brand logo"/>
        </div>
        <div className="text-left">
            <span className="block">Alamat</span>
            <span className="block">Bonbon Florist , Sumuran,</span>
            <span>
                Ajung, Jember, Jawa Timur
                Kode Pos: 68175
            </span>
        </div>
    </div>
)

const SecondFooterItem = ({  contactIcons }) => (
    <div className="flex justify-start w-full text-white/75 lg:w-1/3 lg:justify-center lg:items-center lg:flex lg:text-lg lg:flex-col ">
        <div className="space-y-5 lg:space-y-10 flex items-start flex-col">
            <div>
                <span className="text-white text-lg font-medium">Contact US</span>
            </div>
            <div className="text-left items-start">
                <Button
                    className="border border-white bg-white/20 flex items-center gap-2 group cursor-pointer hover:bg-white hover:text-primary">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <g clipPath="url(#clip0_186_2440)">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M17.915 15.3056C17.617 15.1566 16.156 14.4386 15.884 14.3386C15.612 14.2396 15.414 14.1906 15.215 14.4886C15.017 14.7846 14.448 15.4546 14.275 15.6526C14.101 15.8516 13.928 15.8756 13.631 15.7276C13.334 15.5776 12.376 15.2646 11.241 14.2526C10.358 13.4646 9.761 12.4916 9.588 12.1936C9.415 11.8966 9.569 11.7356 9.718 11.5876C9.852 11.4546 10.015 11.2406 10.164 11.0676C10.313 10.8936 10.362 10.7696 10.461 10.5706C10.561 10.3726 10.511 10.1996 10.436 10.0506C10.362 9.90162 9.768 8.43863 9.52 7.84363C9.279 7.26463 9.034 7.34363 8.852 7.33362C8.678 7.32562 8.48 7.32363 8.282 7.32363C8.084 7.32363 7.762 7.39762 7.49 7.69562C7.217 7.99262 6.45 8.71163 6.45 10.1746C6.45 11.6366 7.514 13.0496 7.663 13.2486C7.812 13.4466 9.758 16.4486 12.739 17.7356C13.449 18.0416 14.002 18.2246 14.433 18.3606C15.145 18.5876 15.793 18.5556 16.305 18.4786C16.875 18.3936 18.063 17.7596 18.311 17.0656C18.558 16.3716 18.558 15.7766 18.484 15.6526C18.41 15.5286 18.212 15.4546 17.914 15.3056H17.915ZM12.493 22.7086H12.489C10.7184 22.7089 8.98037 22.233 7.457 21.3306L7.097 21.1166L3.355 22.0986L4.354 18.4506L4.119 18.0766C3.12914 16.501 2.60529 14.6774 2.608 12.8166C2.61 7.36662 7.044 2.93263 12.497 2.93263C15.137 2.93263 17.619 3.96263 19.485 5.83063C20.4054 6.74721 21.1349 7.83719 21.6313 9.03752C22.1277 10.2379 22.3811 11.5247 22.377 12.8236C22.375 18.2736 17.941 22.7086 12.493 22.7086ZM20.905 4.41162C19.8032 3.30255 18.4922 2.42316 17.0481 1.82443C15.6039 1.22569 14.0553 0.919508 12.492 0.923625C5.938 0.923625 0.602 6.25863 0.6 12.8156C0.599 14.9116 1.146 16.9576 2.187 18.7606L0.5 24.9236L6.804 23.2696C8.54787 24.2197 10.5021 24.7176 12.488 24.7176H12.493C19.047 24.7176 24.383 19.3826 24.385 12.8246C24.3898 11.2619 24.0848 9.71373 23.4874 8.26966C22.8901 6.82559 22.0124 5.5143 20.905 4.41162Z"
                                  fill="white"
                                  className="group-hover:fill-primary"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_186_2440">
                                <rect width="24" height="24" fill="white"
                                      transform="translate(0.5 0.923584)"/>
                            </clipPath>
                        </defs>
                    </svg>

                    Contact Us
                </Button>
            </div>

            <div className="flex gap-2 items-center">
                {contactIcons.map((item, idx) => (
                    <a href="" key={idx}>
                        <IconCircle
                            className="bg-white w-12 h-12 transition ease-in-out hover:scale-110 hover:bg-white/90"
                            title={item.title} src={item.icon}/>
                    </a>
                ))}
            </div>
        </div>
    </div>
)

const ThirdFooterItem = () => (
    <div className="w-full text-lg text-white/75 lg:flex lg:justify-end lg:w-1/3 ">
        <div className="flex space-y-2.5 flex-col items-start lg:w-2/3 lg:space-y-10 ">
            <div>
                <span className="text-white text-xl lg:text-lg font-medium">Berlangganan</span>
            </div>
            <div className="text-left w-full">
                <Input placeholder="Email" type="email" className="text-gray-700 w-full"/>
                <Button
                    className="block border border-white w-full mt-5 cursor-pointer bg-white/20 hover:text-primary hover:bg-white">
                    Kirim
                </Button>
            </div>
        </div>
    </div>
)

export default function Footer() {

    const contactIcons = [
        {
            icon: instagramIcon,
            title: "Instagram",
        },
        {
            icon: youtubeIcon,
            title: "Instagram"
        },
        {
            icon: twitterIcon,
            title: "Twitter",
        },
        {
            icon: facebookIcon,
            title: "Facebook",
        },
    ];
    return (
        <section className="w-full pb-5 left-0 right-0 bg-primary bottom-0 mt-auto" id="footer">
            <div
                className="container space-y-10 my-10 lg:my-12 flex w-5/6 justify-between items-center flex-col selection:text-white selection:bg-green-600 font-roboto lg:flex-row lg:w-full">
                <FirstFooterItem />
                <SecondFooterItem contactIcons={contactIcons} />
                <ThirdFooterItem />
            </div>

        </section>
    )
}