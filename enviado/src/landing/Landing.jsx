import style from "../landing/landing.module.css";
import Navbar from "./navbar/Navbar";
import arrowImg from "../assets/Arrow.png";
import ButtonImg from "../assets/ButtonImage.png";
import About from "../pages/about/About";
import Service from "../pages/service/Service";
import OurWorks from "../pages/ourworks/OurWorks";
import ContactUs from "../pages/contactus/ContactUs";

const Landing = () => {
  return (
    <>
      <section className={style.heroSection}>
        <div id="home" className={style.heroContent}>
          <Navbar />
          <div className={style.bigTextContainer}>
            <h1>Your 360º </h1>
            <h1> marketing</h1>
            <h1>
              solution
              <span className={style.startHereWrapper}>
                <span className={style.startHere}>starts here</span>
                <img className={style.arrowImage} src={arrowImg} alt="arrow" />
              </span>
            </h1>

            <div className={style.arrowButtonWrapper}>
              <img src={ButtonImg} alt="" />
              <button className={style.ctaButton}>Let's talk</button>
            </div>
          </div>

          <div className={style.smallTextContainer}>
            <p>
              We don't just come up with ideas, products or experiences <br />{" "}
              that push boundaries and challenge the status quo <br /> – we also
              bring in the results!
            </p>
          </div>
        </div>
      </section>

      <section id="about">
        <About />
      </section>

      <section id="service">
        <Service />
      </section>

      <section id="ourwork">
        <OurWorks />
      </section>

      <section id="contactus">
        <ContactUs />
      </section>
    </>
  );
};

export default Landing;
