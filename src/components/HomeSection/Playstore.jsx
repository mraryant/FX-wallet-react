import "../../styles/Playstore.css"

import rightimg3 from "../../assets/majorimg/walletRight3.png"
import Google from "../../assets/microimg/Google Play.png"
import Apple from "../../assets/microimg/Apple Logo.png"

const Playstore = () => {
  return (
    <>
      <div id="Get-App" className="flex pb-10 justify-center items-center" >


        <div className="  shadow-inner-top-bottom-lg      rounded-3xl min-h-[80vh] w-[90vw] phone:w-[100%]  flex items-center justify-between tablet:flex-col tablet:gap-20 ">

          <div id="left " className="  w-[50%]   tablet:w-[90%] h-[100%]   flex  justify-center " >
            <div className=" w-[600px] phone:w-[100%] h-[100%] p-10 phone:px-5 flex gap-5 flex-col justify-center shadow-2xl rounded-3xl bg-blue-100  ">



              <h1 className=" font-bold text-2xl " >Get Personal with
                FXST Wallet Today!</h1>

              <p className='left-section-p'>Experience the convenience of instant transactions, robust security features, and a user-friendly interface designed to streamline your crypto experience. Join the future of finance with FXST Wallet today.</p>

              <div className="buttons flex flex-wrap  gap-5">
                <div className="flex flex-col gap-2">

                  <button className=' flex justify-center items-center gap-2 bg-gray-800 text-white p-3  rounded-lg    hover:scale-[1.03] active:scale-[1] transition-scale duration-100 ease-in-out '>
                    <div>
                      <p className=" text-xs" >Download On</p>
                      <h3 className="text-lg">Apple Store</h3>
                    </div>
                    <div className=" w-[60px]">
                      <img src={Apple} alt=" ps" />
                    </div>
                  </button>
                  <div className="flex justify-between   " >
                    <p className="font-bold ">For iOS</p>
                    <p>iOS 15.6+</p>
                  </div>
                </div>


                <div className="flex flex-col gap-2" >
                  <button className=' flex justify-center items-center gap-4 bg-gray-800 text-white p-3  rounded-lg  hover:scale-[1.03] active:scale-[1] transition-scale duration-100 ease-in-out'>
                    <div>
                      <p className=" text-xs" >Download On</p>
                      <h3 className="text-lg">Apple Store</h3>
                    </div>
                    <div className=" w-[60px]" >
                      <img src={Google} alt=" ps" />
                    </div>
                  </button>
                  <div className="flex justify-between    " >
                    <p className="font-bold" >For Android</p>

                    <p>Android 8.0+</p>
                  </div>
                </div>

              </div>

            </div>
          </div>

          <div className=" w-[40%] tablet:w-[90%]  ">
            <img src={rightimg3} className="   h-[100%]   rounded-2xl" alt="Company logo" />
          </div>

        </div>
      </div>
    </>
  )
}

export default Playstore