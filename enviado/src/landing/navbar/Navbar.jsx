import style from "./navbar.module.css";
import EnviadoLogo from "../../assets/EnviadoLogo.png";

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <div className={style.navWrapper}>
        <div className={style.Navlogo}>
          <img src={EnviadoLogo} alt="company logo" />
        </div>
        <div className={style.NavContent}>
          <div className={style.NavItems}>
            <p>Home</p>
            <p>About</p>
            <p>Service</p>
            <p>Our works</p>
            <p>Contact Us</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
