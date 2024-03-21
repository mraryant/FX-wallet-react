import "../../styles/Privecy.css"
import card1 from "../../assets/majorimg/privecy-card1.png"

 

const Privecy = () => {
  

  return (
    <>
      

      <div className=" flex justify-center py-10">

        <div className=" bggrad-privecy shadow-inner-top-bottom-lg shadow-2xl   py-10 rounded-3xl min-h-[100vh] w-[90vw]  flex items-center justify-evenly tablet:flex-col tablet:gap-20 ">


          <div className="section">
            <h1 className=" tablet:text-center  text-4xl font-bold phone:texl-3xl " > Stay Private And Secure </h1>
            <p className="text-center">

              Rest easy knowing that our privacy and security measures keep you in
              control of your data and digital assets, while also keeping them safe.
            </p>



            <div className=" flex gap-10 py-10 w-[100%]  overflow-x-auto  " style={{ scrollSnapType: "x mandatory", scrollbarWidth: "thin" }} >

              <div className="safety ml-[8vw] shadow-2xl tablet:flex-col-reverse tablet:w-[90%]  ">
                <div className="safety1 flex flex-col gap-5  tablet:items-center ">
                  <div className="flex flex-col gap-5 tablet:items-center " >
                    <h1 className="tablet:text-center leading-tight text-3xl phone:text-2xl font-bold " > True Ownership of your crypto Assests</h1>
                    <h5 className="tablet:text-center">
                      We secure your wallet, but don’t control or have access to your private keys or secret phrase- only you do.
                    </h5>
                  </div>
                  <button className="btn1 w-fit "> Get Started </button>
                </div>
                <div className="safety2">
                  <img src={card1}></img>
                </div>
              </div>

              <div className="safety   shadow-2xl tablet:flex-col-reverse tablet:w-[90%]  ">
                <div className="safety1 flex flex-col gap-5  tablet:items-center ">
                  <div className="flex flex-col gap-5 tablet:items-center " >
                    <h1 className="tablet:text-center leading-tight text-3xl phone:text-2xl font-bold " > True Ownership of your crypto Assests</h1>
                    <h5 className="tablet:text-center">
                      We secure your wallet, but don’t control or have access to your private keys or secret phrase- only you do.
                    </h5>
                  </div>
                  <button className="btn1 w-fit "> Get Started </button>
                </div>
                <div className="safety2">
                  <img src={card1}></img>
                </div>
              </div>

              <div className="safety mr-[8vw] shadow-2xl tablet:flex-col-reverse tablet:w-[90%]  ">
                <div className="safety1 flex flex-col gap-5  tablet:items-center ">
                  <div className="flex flex-col gap-5 tablet:items-center " >
                    <h1 className="tablet:text-center leading-tight text-3xl phone:text-2xl font-bold " > True Ownership of your crypto Assests</h1>
                    <h5 className="tablet:text-center">
                      We secure your wallet, but don’t control or have access to your private keys or secret phrase- only you do.
                    </h5>
                  </div>
                  <button className="btn1 w-fit "> Get Started </button>
                </div>
                <div className="safety2">
                  <img src={card1}></img>
                </div>
              </div>
            </div>



          </div>
        </div>
      </div>

    </>
  )
}

export default Privecy