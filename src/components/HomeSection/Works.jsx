

import "../../styles/Works.css"


import rightimg2 from "../../assets/majorimg/walletRight2.png"
const Works = () => {
  return (
    <>

      <div id="About-Work" className=" flex justify-center py-10 " >


        <div className=" bggrad shadow-inner-top-bottom-lg shadow-2xl   py-10 rounded-3xl min-h-[100vh] w-[90vw]  flex items-center justify-evenly tablet:flex-col tablet:gap-20 ">

          <div id="left " className="  w-[50%] tablet:w-[90%] h-[100%]   flex  justify-center " >

            <div className=" w-full h-[100%] p-10 flex gap-5 flex-col justify-center shadow-2xl rounded-3xl   ">


              <h1 className=" font-bold text-4xl">How This Works</h1>
              <p>Using FXST Wallet is as easy as 1-2-3! </p>

              <ul className="list-disc">
                <li>
                  First, download the app from the App Store or Google Play Store and install <br />
                  it on your device.
                </li>
                <li>
                  Once installed, open the app and create your account by following <br />
                  the simple registration process.
                </li>
                <li>

                  Next, securely link your bank account or credit/debit card to your<br />
                  FXST Wallet to easily deposit funds.
                </li>
              </ul>

              <p>
                Now {" you're"} ready to start managing your crypto assets! Simply navigate<br />
                through the user-friendly interface to buy, sell, and trade cryptocurrencies <br />
                with ease. You can also send and receive digital currencies effortlessly,<br />
                making transactions seamless and hassle-free. With built-in security <br />
                measures and intuitive controls, FXST Wallet ensures that your crypto journey <br />
                is both safe and convenient. Start using FXST Wallet today and take control of <br />
                your digital finances like  never before!
              </p>


              <button className="download-app rounded-lg hover:scale-[1.05] active:scale-[0.9]  transition-scale duration-300 ease-in-out">Download Mobile App</button>
            </div>
          </div>

          <div className=" w-[40%] flex justify-center tablet:w-[90%]  ">
            <img src={rightimg2} className="   h-[100%]   rounded-2xl" alt="Company logo" />
          </div>

        </div>
      </div>

      {/* <section className="works-section">
        <div className="left-section">
          <h1>How This Works</h1>
          <p>Using FXST Wallet is as easy as 1-2-3! </p>

          <ul>
            <li>
              First, download the app from the App Store or Google Play Store and install <br />
              it on your device.
            </li>
            <li>
              Once installed, open the app and create your account by following <br />
              the simple registration process.
            </li>
            <li>

              Next, securely link your bank account or credit/debit card to your<br />
              FXST Wallet to easily deposit funds.
            </li>
          </ul>

          <p>
            Now {" you're"} ready to start managing your crypto assets! Simply navigate<br />
            through the user-friendly interface to buy, sell, and trade cryptocurrencies <br />
            with ease. You can also send and receive digital currencies effortlessly,<br />
            making transactions seamless and hassle-free. With built-in security <br />
            measures and intuitive controls, FXST Wallet ensures that your crypto journey <br />
            is both safe and convenient. Start using FXST Wallet today and take control of <br />
            your digital finances like  never before!
          </p>
          <div className="b01">Get Started</div>
        </div>
        <div className="right-section">
          <div className="img1 ">
            <img
              src="/fxstwalletlogo/iphone_14_.svg"
              alt="FXST Wallet Mobile App"
            />
            <p>Download FXST Wallet App</p>
          </div>
        </div>
      </section> */}
    </>
  )
}

export default Works