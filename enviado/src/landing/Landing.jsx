import style from '../landing/landing.module.css'
import Navbar from './navbar/Navbar'

const Landing = () => {
  return (
    <section className={style.heroSection}> {/* Changed to match CSS Modules syntax */}
      <div className={style.heroContent}>
        {/* <nav>...</nav> */}
      <Navbar/>
        <h1>Your 360° marketing solution</h1>
        <p>We don't just come up with ideas...</p>
        <button>Let's talk</button>
      </div>
    </section>
  )
}

export default Landing