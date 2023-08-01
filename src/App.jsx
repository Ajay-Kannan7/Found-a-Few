import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./app.css";
import { useState } from 'react';
import img from "./images/logo.png"
import recruitmentImg from "./images/recruitment.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose, faArrowRight, faBusinessTime, faCalendarDays, faPersonChalkboard, faCopyright } from '@fortawesome/free-solid-svg-icons'

AOS.init({
  offset: 250, 
  delay: 0, 
  duration: 400, 
  easing: 'ease', 
  once: true, 
  mirror: false, 
  anchorPlacement: 'top-bottom',
});

function App() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false
  };

  let [initialIcon, setIcon] = useState({
    icon:faBars
  })

  function clickHandler(){
    let linksParentElement = document.querySelector(".links-parent");
    console.log(linksParentElement);
    linksParentElement.classList.toggle("visible");
    setIcon(()=>{
      if(initialIcon.icon === faBars){
       return {
        icon:faClose
       }
      }
      else{
        return {
          icon: faBars
        }
      }
    })
  }
  return (
    <div className="main-cover">
      <div className="NavBar-Logo clearfix">
        <div className="logo-cover">
          <img src={img} alt="company-logo" className="logo-image"></img>
        </div>
        <FontAwesomeIcon icon={initialIcon.icon} className="hamburger-icon" onClick={clickHandler}></FontAwesomeIcon>
        <nav className="links-parent">
          <a href="#" className="links-children">About-us</a>
          <a href="#" className="links-children">Services</a>
          <a href="#" className="links-children">Blogging</a>
          <button className="Nav-button">Login</button>
          <button className="Nav-button">Sign-up</button>
        </nav>
      </div>
      <div className="main-banner" data-aos="fade-up">
        <h1>Where talent<br></br> meets opportunity<span className="full-stop">.</span></h1>
        <p>Specialists in recruitment, <br></br> connecting businesses with exceptional people</p>
        <div className="hire-apply-banner">
          <div className="hire-apply">
            <h3>I want to apply</h3>
            <div className="hire-icons">
              <FontAwesomeIcon icon={faArrowRight} />
              <FontAwesomeIcon icon={faBusinessTime} />
            </div>
          </div>
          <div className="hire-apply">
            <h3>I want to hire</h3>
              <div className="hire-icons">
                <FontAwesomeIcon icon={faArrowRight} />
                <FontAwesomeIcon icon={faBusinessTime} />
              </div>
            </div>
        </div>
      </div>
      <div className="main-banner-two">
        <div className="recruitment-banner" data-aos="fade-left">
          <h1>Experts in pragmatic Recruitment.</h1>
          <p>Found a few are experts in the recruitment offering honest, transparent advice, helping candidates into their next role and clients find valued finance professionals. Operating for over a decade in this market, we know our industry inside and out.</p>
          <button>Find out more <FontAwesomeIcon icon={faArrowRight} className="arrow"/></button>
        </div>
        <div className="recruitment-image" data-aos="fade-right">
          <img src={recruitmentImg} alt="image"></img>
        </div>
      </div>
      <div className="main-banner-three">
        <div className="professional-content" data-aos="fade-left">
          <h1>Recruiting Across All Career Levels.</h1>
          <p>For permanent, Fixed Term Contract <br></br> and Interim Appointments</p>
        </div>
        <div className="professional-board" data-aos="fade-up">
          <h3>Cavernous range !</h3>
          <p>Entry level, graduate, <br></br>experienced professional</p>
          <FontAwesomeIcon icon={faCalendarDays} className="calendar"></FontAwesomeIcon>
        </div>
      </div>
      <div className="testimonials-banner">
        <h1>A Few Words <br></br> About Us. <FontAwesomeIcon icon={faPersonChalkboard}></FontAwesomeIcon></h1>
        <div className="testimonial-carousel" data-aos="fade-up">
          <Slider {...settings} className="slider-cover">
            <div className="slider-element">
              <p>My second time working with Found a Few and I would highly recommend them. Working with Found a Few was great, they were reliable and very professional. I could get in touch with my consultant after she left the office. She handled my transition from one contract to another and kept me in the loop every step of the way.</p>
              <h3>Candice, UI/UX designer</h3>
            </div>
            <div className="slider-element">
              <p>Found a Few provided me with a brilliant, first class service helping me to gain my first graduate role since leaving university. He and his team worked with great efficiency, reliability and showed a personal interest in my development, working around my requests and requirements. I would recommend Found a Few recruitment, not just to recent graduates but to anyone seeking to progress in a career within the financial industries.</p>
              <h3>Johnathan, SWE-2</h3>
            </div>
            <div className="slider-element">
              <p>I would highly recommend Found a Few recruitment. I’m a strong believer in good communication with people and building good relationships, and this is exactly what they do! They are very professional and very approachable. They gave me every detail I needed in the recruitment stages, and after being successful in getting the job, they guided me excellently again! I’m very pleased with the service they provided, and very happy with my new job. Thanks for everything!</p>
              <h3>Robbie, Freelancer</h3>
            </div>
          </Slider>
        </div>
      </div>
      <div className="footer-banner">
        <div className="footer-image">
          <img src={img} alt="logo"></img>
        </div>
        <div className="footer-links-cover">
          <div className="footer-links">
            <p>Discover</p>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Work</a>
          </div>
          <div className="footer-links">
            <p>Get in touch</p>
            <a href="#">apply@foundafew.com</a>
            <a href="#">hire@foundafew.com</a>
            <a href="#">01234098</a>
            <a href="#">Donate</a>
          </div>
        </div>
      </div>
      <div className="copyright">
          <p><FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon> 2023 Found A Few</p>
        </div>
    </div>
  )
}

export default App
