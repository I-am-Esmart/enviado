import style from "./navbar.module.css";
import EnviadoLogo from "../../assets/EnviadoLogo.png";
import { useEffect, useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false); // State to track if the navbar is scrolled

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

          <div className={style.menuBar}>
            <p> Menu</p>
            <FaBarsStaggered />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
