import About from "../components/HomeSection/About"
import Community from "../components/HomeSection/Community"
import Features from "../components/HomeSection/Features"
import Fxstwalet from "../components/HomeSection/Fxstwalet"
import Hero from "../components/HomeSection/Hero"
import Playstore from "../components/HomeSection/Playstore"
import Privecy from "../components/HomeSection/Privecy"
import Works from "../components/HomeSection/Works"
// import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


const Homepage = () => {
    return (
        <>

            <Hero />
            <About />
            <Features />
            <Fxstwalet />
            <Works />
            <Privecy />
            {/* <Community /> */}
            {/* <Playstore /> */}
            <Footer />
        </>
    )
}

export default Homepage