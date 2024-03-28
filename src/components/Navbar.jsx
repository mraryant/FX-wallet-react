
import { useEffect, useState } from 'react';
import logo from "../assets/fxstwaletlogo.png"

const Navbar = () => {


    const [isScrolled, setisScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setisScrolled(window.scrollY > 0);
        }
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [])


    const [isNavVisible, setIsNavVisible] = useState(false);

    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };

    return (
        <>
            <nav
                className={`${isScrolled ? 'bg-gray-200 dark:transparent' : 'bg-transparent'
                    } w-full z-10 overflow-x-hidden   top-0 start-0 border-b border-none dark:border-gray-600`}
            >
                <div className=" max-w-full   flex flex-wrap items-center justify-between mx-auto p-4 px-4 md:p-4 md:px-8">
                    <a href="#">
                        <div className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img src={logo} className=' w-[150px]  ' alt="VOIP" />
                            {/* <h1 className=' text-4xl font-bold font-outfit  text-primary-gradient phone:text-xl ' >FX wallet</h1> */}
                        </div>
                    </a>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button type="button" className=" active:scale-[0.9] transition-scale hover:scale-[1.05]  transition-scale duration-300 ease-in-out  button1     phone:font-medium    text-sm first-line  phone:h-[40px]  ">Buy Token</button>
                        <button
                            onClick={toggleNav}
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-blue-300 bg-gray-600 border border-[#5ab7ec] rounded-lg md:hidden   focus:outline-none focus:ring-2 focus:ring-[#5a8dec]   ring-[#d938d9]  hover:bg-gray-700  "
                            aria-controls="navbar-sticky1"
                            aria-expanded={isNavVisible}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            </svg>
                        </button>
                    </div>
                    <div
                        id="navbar-sticky1"
                        className={`items-center justify-between  w-full md:flex md:w-auto md:order-1 ${isNavVisible ? 'block' : 'hidden'
                            }`}
                    >
                        <ul className=" navcar  flex     flex-col p-4   md:py-1.5   mt-4 font-medium border border-blue-300  md:rounded-[50px] rounded-lg   md:space-x-[2vmax] rtl:space-x-reverse md:flex-row md:mt-0 md:border-0   text-white tablet:bg-gray-500    ">

                            <a className='#' href="#hero-main"  >
                                <li className='md:border-none tablet:hover:bg-gray-400 flex items-center border-b-[1px]   border-gradient '>

                                    <div className="  font-semibold   py-2 px-3 text-black tablet:text-white  rounded  md:hover:bg-transparent md:p-0  dark:border-gray-700 hover:border-b-2 font-outfit   ">Home</div>
                                </li>
                            </a>
                            {/* <li className='md:border-none tablet:hover:bg-gray-400 flex items-center border-b-[1px] border-gradient'>
                                <a className='' href="#about-main">
                                    <div className=" font-semibold   py-2 px-3 text-black tablet:text-white rounded  md:hover:bg-transparent md:p-0       dark:border-gray-700 hover:border-b-2 font-outfit ">About Us</div>
                                </a>
                            </li> */}
                            <a className='' href="#Features">
                                <li className='md:border-none tablet:hover:bg-gray-400 flex items-center border-b-[1px] border-gradient '>
                                    <div className=" font-semibold   py-2 px-3 text-black tablet:text-white rounded  md:hover:bg-transparent md:p-0       dark:border-gray-700 hover:border-b-2 font-outfit ">Feature</div>
                                </li>
                            </a>
                            <a className='About-Work' href="#roadmap-main">
                                <li className='md:border-none tablet:hover:bg-gray-400 flex items-center border-b-[1px] border-gradient '>
                                    <div className=" font-semibold   py-2 px-3 text-black tablet:text-white rounded  md:hover:bg-transparent md:p-0       dark:border-gray-700 hover:border-b-2 font-outfit ">About Work</div>
                                </li>
                            </a>
                            <a className='Get-App' href="#toko-main">
                                <li className='md:border-none tablet:hover:bg-gray-400 flex items-center border-b-[1px] border-gradient '>
                                    <div className=" font-semibold   py-2 px-3 text-black tablet:text-white rounded  md:hover:bg-transparent md:p-0       dark:border-gray-700 hover:border-b-2 font-outfit ">Get App</div>
                                </li>
                            </a>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar