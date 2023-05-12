// import "./assets/libs/tiny-slider/tiny-slider.css"
import "../assets/libs/@iconscout/unicons/css/line.css"
import "../assets/css/icons.min.css"
// import "./assets/libs/tiny-slider/min/tiny-slider"
// import "../assets/libs/feather-icons/feather.min"
// import "../assets/js/plugins.init"
import "../assets/js/app"

import Nav from "../components/Nav"
import Hero from "../components/Hero"
import BusinessPartners from "../components/BusinessPartners"
import HowItWork from "../components/HowItWork"
import PartnersSlides from "../components/PartnersSlides"
import HowItWorksTwo from "../components/HowItWorksTwo"
import Footer from "../components/Footer"
import CookiePopup from "../components/CookiePopup"
import BackToTop from "../components/BackToTop"
import Switcher from "../components/Switcher"



const Home = () => {

  return (
    <>
      <div>
        <Nav />
        <Hero />
        {/* <BusinessPartners /> */}
        <HowItWork />
        <PartnersSlides />
        <HowItWorksTwo />
        <Footer />
        <Switcher />
        <BackToTop />
        {/*
          <CookiePopup />
        */}
      </div>
    </>
  )
}

export default Home