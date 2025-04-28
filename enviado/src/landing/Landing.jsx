import style from '../landing/landing.module.css'

const Landing = () => {
  return (
    <section className={style.heroSection}> {/* Changed to match CSS Modules syntax */}
      <div className={style.heroContent}>
        <nav>...</nav>
        <h1>Your 360° marketing solution</h1>
        <p>We don't just come up with ideas...</p>
        <button>Let's talk</button>
      </div>
    </section>
  )
}

export default Landing