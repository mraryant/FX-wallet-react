
import "../../styles/Features.css"

import featureCard1 from "../../assets/majorimg/featurCard1.png"
import featureCard2 from "../../assets/majorimg/featurCard2.png"
import featureCard3 from "../../assets/majorimg/featurCard3.png"

import up45arro from "../../assets/microimg/tp45arro.png"

const Features = () => {
    return (
        <>
            <section className="features-section p-3 ">
                <div className=" flex flex-col gap-4">
                    <h1 className=" font-bold  text-2xl  text-blue-400 " > Feature</h1>
                    <h2 className=" font-semibold text-5xl  text-gray-700 " >Explore FXST Wallet Features</h2>
                </div>

                <div className='fea'>
                    <div className="features-grid">
                        <div className="feature-box  bg-gray-100 shadow-2xl  border border-1 border-gray-300">
                            <div className=" h-[60%] flex justify-center " >
                                <img
                                    className="  w-full h-full "
                                    src={featureCard1} // Replace with your image path
                                    alt="Manage portfolio icon"
                                />
                            </div>
                            <h3 className=" font-bold text-2xl" >2Factor Authentication</h3>
                            <p>
                                Lorem ipsum dolor sit ametcon sec tetur adipiscing elit sed do eiusmod tempor in cididod temunt..
                            </p>
                            <button className='feature-box-button rounded-lg active:scale-[0.9] transition-scale duration-100 ease-in-out '>Get Started</button>
                        </div>

                        <div className="feature-box  bg-gray-100 shadow-2xl border border-1 border-gray-300 ">
                            <div className=" h-[60%] flex justify-center " >

                                <img
                                    className=" rounded-b-3xl w-full h-full "
                                    src={featureCard2} // Replace with your image path
                                    alt="Manage portfolio icon"
                                />
                            </div>
                            <h3 className=" font-bold text-2xl" >Efficient Support</h3>
                            <p>
                                Lorem ipsum dolor sit ametcon sec tetur adipiscing elit sed do eiusmod tempor in cididod temunt..
                            </p>
                            <button className='feature-box-button rounded-lg active:scale-[0.9] transition-scale duration-100 ease-in-out '>Get Started</button>
                        </div>
                        <div className="feature-box  bg-gray-100 shadow-2xl border border-1 border-gray-300">
                            <div className=" h-[60%] flex justify-center " >

                                <img
                                    className=" rounded-b-3xl w-full h-full "
                                    src={featureCard3} // Replace with your image path
                                    alt="Manage portfolio icon"
                                />
                            </div>
                            <h3 className=" font-bold text-2xl" >Crypto Settlements</h3>
                            <p>
                                Lorem ipsum dolor sit ametcon sec tetur adipiscing elit sed do eiusmod tempor in cididod temunt..
                            </p>
                            <button className='feature-box-button rounded-lg active:scale-[0.9] transition-scale duration-100 ease-in-out '>Get Started</button>
                        </div>


                    </div>

                </div>
                <div className="  flex justify-center  ">
                    <div className='feature-button active:scale-[0.9] transition-scale duration-100 ease-in-out'>
                        <button>Discover All Feature </button>
                        <img src={up45arro} alt='arrow'></img>
                    </div>
                </div>


            </section>
        </>
    )
}

export default Features