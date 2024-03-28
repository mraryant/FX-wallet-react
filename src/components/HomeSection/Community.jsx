import "../../styles/Community.css"
import profile2 from "../../assets/microimg/profile2.png"


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'; // Import Swiper navigation styles
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const Community = () => {
  return (
    <>
      <div className=" py-10"  >


        <div className="community   tablet:text-center ">
          <h1> Testimonial</h1>
          <p> Empowering Crypto Enthusiasts - FXST Testimonials.</p>
        </div>


        <div className="box px-[2vw] w-[100%]   pb-10   " >

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
            modules={[Navigation, Autoplay, Pagination]} // Add Navigation module
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            grabCursor={true}
            // className="mySwiper"

            breakpoints={{
              // when window width is >= 640px
              1154: {
                slidesPerView: 2,
              },

            }}
          >

            <SwiperSlide>
              <div className=" min-w-[550px] tablet:min-w-[100%] bg-gray-100 shadow-xl rounded-3xl   flex flex-col gap-5 p-10 ">
                <p>
                  FXST wallet has simplified my crypto transactions. Its easy-to-use interface and swift transactions make it my go-to choice. Highly recommend!

                </p>

                <div className="c1a">
                  <div className="name">
                    <h1> James </h1>
                    <p>CryptoProTrader</p>
                    {/* <p> Pulls</p> */}
                  </div>

                  <div className="c1a-image">
                    <img src={profile2} alt="images come fast" />
                  </div>
                </div>
              </div>


            </SwiperSlide>

            <SwiperSlide>
              <div className=" min-w-[550px] tablet:min-w-[100%] bg-gray-100 shadow-xl rounded-3xl  flex flex-col gap-5 p-10 ">
                <p>
                  Security is my top priority when it comes to crypto, and FXST wallet delivers. I feel confident knowing my assets are safe while enjoying seamless trading.

                </p>

                <div className="c1a">
                  <div className="name">
                    <h1> Benson</h1>
                    <p>CryptoSavvy</p>

                  </div>

                  <div className="c1a-image">
                    <img src={profile2} alt="images come fast" />
                  </div>
                </div>
              </div>


            </SwiperSlide>

            <SwiperSlide>
              <div className=" min-w-[550px] tablet:min-w-[100%] bg-gray-100 shadow-xl rounded-3xl  flex flex-col gap-5 p-10 ">
                <p>
                  With FXST, managing multiple cryptocurrencies is a breeze. The wide range of supported coins and intuitive interface make it a must-have for any crypto enthusiast.

                </p>

                <div className="c1a">
                  <div className="name">
                    <h1> Charleston</h1>
                    <p>CryptoExpert</p>

                  </div>

                  <div className="c1a-image">
                    <img src={profile2} alt="images come fast" />
                  </div>
                </div>
              </div>


            </SwiperSlide>

            <SwiperSlide>
              <div className=" min-w-[550px] tablet:min-w-[100%] bg-gray-100 shadow-xl rounded-3xl  flex flex-col gap-5 p-10 ">
                <p>
                  Customer support at FXST is outstanding. Quick responses and helpful assistance ensure that I never feel stranded while using the wallet.


                </p>

                <div className="c1a">
                  <div className="name">
                    <h1> Clifford </h1>
                    <p>CryptoExplorer</p>

                  </div>

                  <div className="c1a-image">
                    <img src={profile2} alt="images come fast" />
                  </div>
                </div>
              </div>


            </SwiperSlide>

            <SwiperSlide>
              <div className=" min-w-[550px] tablet:min-w-[100%] bg-gray-100 shadow-xl rounded-3xl  flex flex-col gap-5 p-10 ">
                <p>
                  FXST wallet has truly elevated my crypto experience. From its sleek design to its reliable performance, I {"can't"} imagine trading without it. 5 stars!


                </p>

                <div className="c1a">
                  <div className="name">
                    <h1> Houston</h1>
                    <p> CryptoInsight</p>

                  </div>

                  <div className="c1a-image">
                    <img src={profile2} alt="images come fast" />
                  </div>
                </div>
              </div>


            </SwiperSlide>






            {/* <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div> */}
          </Swiper>






        </div>

      </div>




    </>
  )
}

export default Community