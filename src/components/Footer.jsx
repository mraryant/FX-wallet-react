
import logo from "../assets/fxstwaletlogo.png"
import facebook from "../assets/microimg/facebook.png"
import twitter from "../assets/microimg/twitter.png"
import linkdin from "../assets/microimg/linkdin.png"
import instagram from "../assets/microimg/instagram.png"


const Footer = () => {
  return (
    <>
      <footer className="  bg-[#E3E3E3] z-50  rounded-t-2xl ">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between tablet:justify-center">

            <div className=" flex  flex-col gap-5 mb-6 max-w-[40%] tablet:max-w-[100%] tablet:items-center  md:mb-0">
              <a href="" className="flex items-center">
                <img src={logo} className="h-[50px] me-3" alt="FlowBite Logo" />
                {/* <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Flowbite</span> */}
              </a>
              <p className=" tablet:text-center " >Experience the convenience of instant transactions, robust security features, and a user-friendly interface designed to streamline your crypto experience. Join the future of finance with FXST Wallet today.</p>
              <div className="flex gap-5" >
                <img className="shadow-xl hover:scale-[1.2] " src={facebook} alt="" />
                <img className="shadow-xl hover:scale-[1.2] " src={twitter} alt="" />
                <img className="shadow-xl hover:scale-[1.2] " src={linkdin} alt="" />
                <img className=" shadow-xl hover:scale-[1.2]  " src={instagram} alt="" />
                {/* <img src={Medium} alt="" /> */}

              </div>
            </div>
            <div className="mt-10 flex gap-[5vmax] tablet:justify-evenly tablet:flex-wrap ">
              <div className=" flex flex-col tablet:items-center " >
                <h2 className="  text-primary-gradient mb-6 text-sm font-semibold   uppercase text-[#7E25EF]">Resources</h2>
                <ul className="  text-gray-700 font-medium">
                  <li className="mb-4 tablet:text-center  ">
                    <a href="#" className="unline  hover:underline" >Home </a>
                  </li>
                  <li className="  tablet:text-center  " >
                    <a href="https://tailwindcss.com/" className="hover:underline">Service</a>
                  </li>
                </ul>
              </div>
              {/* <div className=" flex flex-col tablet:items-center ">
                <h2 className=" text-primary-gradient mb-6 text-sm font-semibold  uppercase text-[#7E25EF]">Follow us</h2>
                <ul className="  text-gray-700 font-medium">
                  <li className="mb-4 tablet:text-center">
                    <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Github</a>
                  </li>
                  <li className="  tablet:text-center  ">
                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
                  </li>
                </ul>
              </div> */}
              <div className=" flex flex-col tablet:items-center ">
                <h2 className=" text-primary-gradient mb-6 text-sm font-semibold   uppercase text-[#7E25EF]">Legal</h2>
                <ul className="  text-gray-700 font-medium">
                  <li className="mb-4 tablet:text-center">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                  </li>
                  <li className="  tablet:text-center  ">
                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6  border-[#7E25EF] sm:mx-auto  *:lg:my-8" />
          <div className="sm:flex sm:items-center tablet:text-center sm:justify-between">
            <span className="text-sm   sm:text-center  text-gray-700">© 2024 <a href="" className="hover:underline">FX wallet</a>. All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">

            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer