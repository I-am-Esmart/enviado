import style from "../landing/landing.module.css";
import Navbar from "./navbar/Navbar";

const Landing = () => {
  return (
    <section className={style.heroSection}>
      <div className={style.heroContent}>
        <Navbar />
        <div className={style.bigTextContainer}>
          <h1>Your 360º </h1>
          <h1> marketing</h1>
          <h1>solution </h1>
        </div>

        <button>Let's talk</button>
      </div>
    </section>
  );
};

export default Landing;
