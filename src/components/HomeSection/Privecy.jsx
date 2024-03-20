import "../../styles/Privecy.css"
import card1 from "../../assets/majorimg/privecy-card1.png"

const Privecy = () => {
  return (
    <>
      <div className=" flex justify-center py-10">

        <div className=" bggrad-privecy shadow-inner-top-bottom-lg shadow-2xl   py-10 rounded-3xl min-h-[100vh] w-[90vw]  flex items-center justify-evenly tablet:flex-col tablet:gap-20 ">


          <div className="section">
            <h1> Stay Private And Secure </h1>
            <p className="text-center">

              Rest easy knowing that our privacy and security measures keep you in
              control of your data and digital assets, while also keeping them safe.
            </p>

            <div className="safety shadow-2xl">
              <div className="safety1">
                <h1> True Ownership of your crypto Assests</h1>
                <p>
                  {" "}
                  We secure your wallet, but don’t control or have access to your
                  private keys or secret phrase- only you do.
                </p>
                <button className="btn1"> Get Started </button>
              </div>
              <div className="safety2">
                <img src={card1}></img>
              </div>
            </div>



          </div>
        </div>
      </div>
    </>
  )
}

export default Privecy