
import "../../styles/Hero.css"
import Navbar from "../../components/Navbar"
import appimg from "../../assets/heroappimg.png"
import strip from "../../assets/herobottomimage.png"


const Hero = () => {
    return (
        <>
            <div className=" Hero-main" >

                <Navbar />
                <div className="header-content  ">
                    <div className="headerheading">
                        <h1> Secure Your Wallet With <span className="theam-grad" > FXST Wallet </span> </h1>
                    </div>
                    <div className="heading-para max-w-[750px]  flex justify-center   ">
                        <p className="   ">
                            With FXST Wallet, your digital assets are securely stored and easily accessible anytime, anywhere.
                            Whether {"you're"} a seasoned investor just starting out in the world of cryptocurrency, our intuitive
                            platform provides the tools you need to manage your funds with confidence.
                        </p>
                    </div>
                    <div className="header-buttons">
                        <button className="button1 active:scale-[0.9] transition-scale duration-100 ease-in-out ">Download App</button>
                        <button className="button2 active:scale-[0.9] transition-scale duration-100 ease-in-out ">Learn More</button>
                    </div>
                    <div className="headerdownimg">
                        {/* Add Hero Images Here */}
                        <img
                            src={appimg} // Adjust path if needed
                            alt=" "
                        />
                    </div>
                </div>
                <div className="header">
                    <img className="img" src={strip} alt="Manage portfolio icon" />
                </div>
            </div>
        </>
    )
}

export default Hero