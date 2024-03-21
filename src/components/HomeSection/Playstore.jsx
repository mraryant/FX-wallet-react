import "../../styles/Playstore.css"

import rightimg3 from "../../assets/majorimg/walletRight3.png"

const Playstore = () => {
  return (
    <>
      <div className="flex justify-center items-center" >


        <div className="  shadow-inner-top-bottom-lg    py-10 rounded-3xl min-h-[80vh] w-[90vw]  flex items-center justify-evenly tablet:flex-col tablet:gap-20 ">

          <div id="left " className="  w-[40%] tablet:w-[90%] h-[100%]   flex  justify-center " >
            <div className=" w-full h-[100%] p-10 flex gap-5 flex-col justify-center shadow-2xl rounded-3xl bg-gray-100  ">

              <div>
                {/* <img src={logo} alt="FXST Wallet logo" /> */}
              </div>

              <h1 className=" font-bold text-2xl " >Your One-Step, Web3 Wallet</h1>

              <p className='left-section-p'> Buy, sell, and swap crypto, earn rewards, and discover  DApps, all inn one place </p>

              <div className="buttons">
                <button className='btn1 active:scale-[0.9] transition-scale duration-100 ease-in-out'>Mobile</button>
                <button className='btn2 active:scale-[0.9] transition-scale duration-100 ease-in-out'>Extension</button>
              </div>
              <button className="download-app rounded-lg active:scale-[0.9] transition-scale duration-100 ease-in-out">Download Mobile App</button>
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