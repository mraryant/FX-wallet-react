import "../../styles/Community.css"
import profile2 from "../../assets/microimg/profile2.png"

const Community = () => {
  return (
    <>
      <div className="community  tablet:text-center ">
        <h1> A Community of Product thinkers</h1>
        <p > Join our Telegram community and see what the hype is all about .</p>
      </div>


      <div className="box px-[2vw] w-[100%] my-10 py-10 overflow-x-auto " style={{ scrollSnapType: "x mandatory", scrollbarWidth: "thin" }}>

        <div className=" min-w-[550px] tablet:min-w-[100%] bg-gray-100 shadow-xl rounded-3xl  flex flex-col gap-5 p-10 ">
          <p>
            Cardinal ensures we’re making decisions based on data we can trust
            and gives stakeholders visibility into results without constant
            back and forth among teams. Cardinal solves that for us and
            provides a central place for our whole company to see the true
            impact of our entire product strategy as a whole.
          </p>

          <div className="c1a">
            <div className="name">
              <h1> Christopher Byrum </h1>
              <p> Vp Product</p>
              <p> Pulls</p>
            </div>

            <div className="c1a-image">
              <img src={profile2} alt="images come fast" />
            </div>
          </div>
        </div>

        <div className=" min-w-[550px] tablet:min-w-[100%] bg-gray-100 shadow-xl rounded-3xl  flex flex-col gap-5 p-10 ">
          <p>
            Cardinal ensures we’re making decisions based on data we can trust
            and gives stakeholders visibility into results without constant
            back and forth among teams. Cardinal solves that for us and
            provides a central place for our whole company to see the true
            impact of our entire product strategy as a whole.
          </p>

          <div className="c1a">
            <div className="name">
              <h1> Christopher Byrum </h1>
              <p> Vp Product</p>
              <p> Pulls</p>
            </div>

            <div className="c1a-image">
              <img src={profile2} alt="images come fast" />
            </div>
          </div>
        </div>

        <div className=" min-w-[550px] tablet:min-w-[100%] bg-gray-100 shadow-xl rounded-3xl  flex flex-col gap-5 p-10 ">
          <p>
            Cardinal ensures we’re making decisions based on data we can trust
            and gives stakeholders visibility into results without constant
            back and forth among teams. Cardinal solves that for us and
            provides a central place for our whole company to see the true
            impact of our entire product strategy as a whole.
          </p>

          <div className="c1a">
            <div className="name">
              <h1> Christopher Byrum </h1>
              <p> Vp Product</p>
              <p> Pulls</p>
            </div>

            <div className="c1a-image">
              <img src={profile2} alt="images come fast" />
            </div>
          </div>
        </div>

        <div className=" min-w-[550px] tablet:min-w-[100%] bg-gray-100 shadow-xl rounded-3xl  flex flex-col gap-5 p-10 ">
          <p>
            Cardinal ensures we’re making decisions based on data we can trust
            and gives stakeholders visibility into results without constant
            back and forth among teams. Cardinal solves that for us and
            provides a central place for our whole company to see the true
            impact of our entire product strategy as a whole.
          </p>

          <div className="c1a">
            <div className="name">
              <h1> Christopher Byrum </h1>
              <p> Vp Product</p>
              <p> Pulls</p>
            </div>

            <div className="c1a-image">
              <img src={profile2} alt="images come fast" />
            </div>
          </div>
        </div>







      </div>






    </>
  )
}

export default Community