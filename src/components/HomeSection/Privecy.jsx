import "../../styles/Privecy.css"
import card1 from "../../assets/majorimg/privecy-card1.png"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'; // Import Swiper navigation styles
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const Privecy = () => {



  return (
    <>


      <div className=" flex justify-center py-10">

        <div className=" bggrad-privecy shadow-inner-top-bottom-lg shadow-2xl   py-10 rounded-3xl min-h-[100vh] w-[90vw] phone:w-[95vw]  flex items-center justify-evenly tablet:flex-col tablet:gap-20 ">


          <div className="section  ">
            <h1 className=" tablet:text-center  text-4xl font-bold phone:texl-3xl " > Stay Private And Secure </h1>
            <p className="text-center text-lg max-w-4xl  px-5 ">

              Rest easy knowing that our privacy and security measures keep you in
              control of your data and digital assets, while also keeping them safe.
            </p>



            <div className=" flex   items-center justify-center w-[100%] "  >




              <Swiper


                loop={true}
                slidesPerView={1}
                spaceBetween={0}
                navigation={{ // Add navigation prop
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev'
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Navigation, Pagination]} // Add Navigation module
                className="mySwiper"
              >
                <SwiperSlide   >

                  <div className="safety   shadow-xl tablet:flex-col-reverse tablet:w-[100%]  ">

                    <div className="safety1 flex flex-col gap-5 p-3 tablet:items-center ">
                      <div className="flex flex-col gap-5 tablet:items-center " >
                        <h1 className="tablet:text-center leading-tight text-3xl phone:text-2xl font-bold " > User-Friendly Interface</h1>
                        <h5 className="tablet:text-center text-lg">
                          Our mobile app features an intuitive interface designed for ease of use, ensuring that you can manage your crypto assets with simplicity and convenience.

                        </h5>
                      </div>
                      <button className="btn1 w-fit "> Get Started </button>
                    </div>


                    <div className="safety2">
                      <img src={card1}></img>
                    </div>
                  </div>

                </SwiperSlide>


                <SwiperSlide>

                  <div className="safety   shadow-xl tablet:flex-col-reverse tablet:w-[100%]  ">
                    <div className="safety1 flex flex-col gap-5  tablet:items-center ">
                      <div className="flex flex-col gap-5 tablet:items-center " >
                        <h1 className="tablet:text-center leading-tight text-3xl phone:text-2xl font-bold " > Secure Access</h1>
                        <h5 className="tablet:text-center text-lg">
                          With robust security features such as biometric authentication and PIN protection, you can rest assured that your digital assets are safe and secure at all times.

                        </h5>
                      </div>
                      <button className="btn1 w-fit "> Get Started </button>
                    </div>
                    <div className="safety2">
                      <img src={card1}></img>
                    </div>
                  </div>

                </SwiperSlide>
                <SwiperSlide>

                  <div className="safety   shadow-xl tablet:flex-col-reverse tablet:w-[100%]  ">
                    <div className="safety1 flex flex-col gap-5  tablet:items-center ">
                      <div className="flex flex-col gap-5 tablet:items-center " >
                        <h1 className="tablet:text-center leading-tight text-3xl phone:text-2xl font-bold " > Instant Transactions</h1>
                        <h5 className="tablet:text-center text-lg">
                          Execute trades and transfers with just a few taps, thanks to our streamlined transaction process. Whether {"you're"} buying, selling, or sending crypto, {"it's"} all done seamlessly within the app.

                        </h5>
                      </div>
                      <button className="btn1 w-fit "> Get Started </button>
                    </div>
                    <div className="safety2">
                      <img src={card1}></img>
                    </div>
                  </div>

                </SwiperSlide>
                <SwiperSlide>

                  <div className="safety   shadow-xl tablet:flex-col-reverse tablet:w-[100%]  ">
                    <div className="safety1 flex flex-col gap-5  tablet:items-center ">
                      <div className="flex flex-col gap-5 tablet:items-center " >
                        <h1 className="tablet:text-center leading-tight text-3xl phone:text-2xl font-bold " > Personalized Alerts</h1>
                        <h5 className="tablet:text-center  ">
                          Set up custom alerts to stay informed about price movements, market changes, and other important developments in the crypto world, ensuring that you never miss out on potential opportunities.



                        </h5>
                      </div>
                      <button className="btn1 w-fit "> Get Started </button>
                    </div>
                    <div className="safety2">
                      <img src={card1}></img>
                    </div>
                  </div>

                </SwiperSlide>
                <SwiperSlide>

                  <div className="safety   shadow-xl tablet:flex-col-reverse tablet:w-[100%]  ">
                    <div className="safety1 flex flex-col gap-5  tablet:items-center ">
                      <div className="flex flex-col gap-5 tablet:items-center " >
                        <h1 className="tablet:text-center leading-tight text-3xl phone:text-2xl font-bold " >Responsive Customer Support</h1>
                        <h5 className="tablet:text-center text-lg">
                          Need assistance? Our dedicated support team is just a message away, ready to provide prompt and helpful assistance whenever you need it.

                        </h5>
                      </div>
                      <button className="btn1 w-fit "> Get Started </button>
                    </div>
                    <div className="safety2">
                      <img src={card1}></img>
                    </div>
                  </div>

                </SwiperSlide>





                <div className="swiper-button-prev     "></div>
                <div className="swiper-button-next"></div>
              </Swiper>










            </div>



          </div>
        </div>
      </div>

    </>
  )
}

export default Privecy