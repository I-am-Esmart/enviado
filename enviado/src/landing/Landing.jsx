import style from "../landing/landing.module.css";
import Navbar from "./navbar/Navbar";
import arrowImg from "../assets/Arrow.png";
import ButtonImg from "../assets/ButtonImage.png";

const Landing = () => {
  return (
    <section className={style.heroSection}>
      <div className={style.heroContent}>
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
  );
};

export default Landing;
