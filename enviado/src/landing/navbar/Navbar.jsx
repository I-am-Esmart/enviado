import style from './navbar.module.css'


const Navbar = () => {
  return (
    <nav className={style.nav}>
        <div className={style.Navlogo}>Enviado (logo goes here) </div>
        <div className={style.NavContent}>
            <div className={style.NavItems}>
                <p>Home</p>
                <p>About</p>
                <p>Service</p>
                <p>Our works</p>
                <p>Contact Us</p>
            </div>
        </div>
    </nav>
  )
}

export default Navbar