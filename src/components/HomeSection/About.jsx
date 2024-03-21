
import "../../styles/About.css"
import icon1 from "../../assets/Icon.png"
import icon2 from "../../assets/Icon-1.png"
import icon3 from "../../assets/Icon-2.png"

import imo1 from "../../assets/microimg/imo1.png"
import imo2 from "../../assets/microimg/imo2.png"
import imo3 from "../../assets/microimg/imo3.png"
import imo4 from "../../assets/microimg/imo4.png"
import imo5 from "../../assets/microimg/imo5.png"

import btcimg from "../../assets/microimg/btcimg.png"
import btcgraph from "../../assets/microimg/btcgraph.png"
import Profileabt from "../../assets/microimg/profileabt.png"

import btcwhite from "../../assets/microimg/btcwhite.png"
import abtarro from "../../assets/microimg/aboutArrow.png"


const About = () => {
    return (
        <>


            <section className="About-us-section   ">

                <div className="flex gap-5   justify-between items-center laptop:flex-col " >

                    <div className="grid-container laptop:w-[100%] ">
                        <div className="left-grid flex flex-col gap-10  p-4 ">
                            <div className=" flex flex-col gap-3 laptop:items-center ">

                                <h2 className="font-bold text-4xl laptop:text-3xl laptop:text-center "> Why Choose FXST Wallet</h2>
                                <p className="laptop:text-center" >
                                    FX Wallet has a variety of features that make it <br />
                                    the best place to start trading
                                </p>
                            </div>


                            <div className=" flex flex-col gap-10    ">

                                <div className="flex items-center gap-10 max-w-[600px] shadow-lg bg-gray-50 hover:bg-gray-100 hover:scale-[1.02]  transition-scale duration-300 ease-in-out  rounded-lg p-2 tablet:w-[100%] ">

                                    <img className="img" src={icon1} alt="Manage portfolio icon" />
                                    <div className="left-grid-box2">
                                        <h2 className=" font-bold text-2xl" >Manage Your Portfolio</h2>
                                        <p className=" text-gray-700" >
                                            Buy and sell popular digital currencies, keep track of them in the one place.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-10 max-w-[600px] shadow-lg bg-gray-50 hover:bg-gray-100 hover:scale-[1.02]  transition-scale duration-300 ease-in-out   rounded-lg p-2">

                                    <img className="img" src={icon2} alt="Manage portfolio icon" />
                                    <div className="left-grid-box2">
                                        <h2 className=" font-bold text-2xl" >Recurring buys</h2>
                                        <p className=" text-gray-700" >
                                            Invest in cryptocurrency slowly over time by scheduling buys daily, weekly, or monthly.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-10 max-w-[600px] shadow-lg bg-gray-50 hover:scale-[1.02]  transition-scale duration-300 ease-in-out   rounded-lg p-2">

                                    <img className="img" src={icon3} alt="Manage portfolio icon" />
                                    <div className="left-grid-box2">
                                        <h2 className=" font-bold text-2xl" >Mobile apps</h2>
                                        <p className=" text-gray-700" >
                                            Stay on top of the markets with the Coinbase app for Android or iOS.
                                        </p>
                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>


                    <div className=" relative flex gap-5  flex-col justify-center items-center p-3 laptop:w-[100%] ">

                        <div className="flex max-w-[400px] bg-gray-100 rounded-lg p-5 m-4 justify-center items-center flex-col gap-3  shadow-xl  hover:scale-[1.02]  transition-scale duration-300 ease-in-out" >
                            <div className="  font-medium   ">
                                <h2>How Was Your Experience ?</h2>
                            </div>
                            <div className=" w-full flex gap-5 ">
                                <img src={imo1} className=" phone:w-[8vw] " alt="Love icon" />
                                <img src={imo2} className=" phone:w-[8vw] " alt="Laugh icon" />
                                <img src={imo3} className=" phone:w-[8vw] " alt="Wow icon" />
                                <img src={imo4} className=" phone:w-[8vw] " alt="Sad icon" />
                                <img src={imo5} className=" phone:w-[8vw] " alt="Sad icon" />
                            </div>
                        </div>
                        <div className=" h-[120px]  absolute left-10 top-40 laptop:hidden " >
                            <img className=" h-full" src={abtarro} alt="" />
                        </div>

                        <div className="right-grid  ">
                            <div className=" flex  min-w-fit justify-center items-center p-2 gap-4 bg-gray-100 rounded-lg  shadow-xl hover:scale-[1.02]  transition-scale duration-300 ease-in-out">
                                <div className="bitcoin">
                                    <img
                                        src={btcimg}
                                        alt="Bitcoin icon"
                                        className="bitcoin-icon"
                                    />
                                </div>
                                <div className="bitcoin-info">
                                    <p className="font-semibold text-center   " >BTC</p>
                                    <p className="text-center" >+1.46%</p>
                                </div>

                                <div className="bitcoin-info">
                                    <p className="font-semibold text-center " >$56,623.54</p>
                                    <img
                                        src={btcgraph}
                                        alt="Bitcoin icon"
                                        className="bitcoin-icon"
                                    />
                                </div>
                            </div>



                            <div className=" bg-gray-100 rounded-lg  shadow-xl hover:scale-[1.02]  transition-scale duration-300 ease-in-out  ">
                                <div className=" flex flex-col gap-3 items-center justify-center p-2 ">

                                    <img
                                        src={Profileabt}
                                        alt="Profile picture"
                                        className="profile-img"
                                    // height=" 50px"
                                    // width="50px"
                                    />

                                    <div className=" flex flex-col gap-1 justify-center items-center ">
                                        <h3>Esther Howard</h3>
                                        <p>estherhoward01@gmail.com</p>
                                    </div>

                                    <div className=" relative card-buttons">
                                        <div className=" absolute top-2 right-2 " >
                                            <img src={btcwhite} alt="" />
                                        </div>
                                        <h1 className="text-xl"> portfolio</h1>
                                        <div className=" flex  flex-col">
                                            <h3 className=" font-extralight text-sm "> Balance</h3>
                                            <div className="flex items-baseline gap-3">
                                                <h3> $2,509.75 </h3>
                                                <h3 className=" text-xs"> +9.77% </h3>
                                            </div>
                                        </div>
                                        <div className=" flex gap-2">
                                            <button className=" border text-sm font-thin rounded-full px-4 py-1 ">Deposit</button>
                                            <button className=" border text-sm font-thin rounded-full px-4 py-1">Withdraw</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About