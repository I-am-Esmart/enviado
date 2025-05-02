import style from "./navbar.module.css";
import EnviadoLogo from "../../assets/EnviadoLogo.png";
import { useEffect, useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { LiaTimesSolid } from "react-icons/lia";
import { FaArrowRightLong } from "react-icons/fa6";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false); // State to track if the navbar is scrolled
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track if the mobile menu is open

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`${style.nav} ${scrolled ? style.scrolled : ""}`}>
        <div className={style.navWrapper}>
          <div className={style.Navlogo}>
            <img src={EnviadoLogo} alt="company logo" />
          </div>
          <div className={style.NavContent}>
            <div className={style.NavItems}>
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#about">About</a>
              </p>
              <p>
                <a href="#service">Service</a>
              </p>
              <p>
                <a href="#ourwork">Our works</a>
              </p>
              <p>
                <a href="#contactus">Contact Us</a>
              </p>
            </div>
          </div>
        </div>
      </nav>

      <nav className={style.navMobile}>
        <div className={style.navWrapperMobile}>
          <div className={style.NavlogoMobile}>
            <img src={EnviadoLogo} alt="company logo" />
          </div>

          <div className={style.menuBar} onClick={() => setIsMenuOpen(true)}>
            <p> Menu</p>
            <FaBarsStaggered />
          </div>
        </div>

        <div
          className={`${style.mobileMenu} ${
            isMenuOpen ? style.mobileMenuOpen : ""
          }`}
        >
          <div className={style.mobileMenuContainer}>
            <div className={style.mobileMenuContainerTop}>
              <p>Menu</p>
              <div className={style.mobileMenuContainerTopRight}>
                <button className={style.mobileMenuContainerTopBtnWrapper}>
                  <p>Cancel</p>
                  <LiaTimesSolid onClick={() => setIsMenuOpen(false)} />
                </button>
              </div>
            </div>

            <div className={style.mobileMenuMiddle}>
              <div className={style.mobileMenuMiddleContainer}>
                <ul>home</ul>
                <ul>about us</ul>
                <ul>Service</ul>
                <ul>Our work</ul>
                <ul>contact us</ul>
              </div>
            </div>

            <div className={style.mobileMenuBottomContainer}>
              <button className={style.mobileMenuBottomContainerBtnWrapper}>
                <p> Send a Message </p> <FaArrowRightLong />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
