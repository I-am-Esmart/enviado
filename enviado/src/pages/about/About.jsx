import style from "./about.module.css";
import FourBoxesImage from "../../assets/FourBoxesImage.png";

const About = () => {
  return (
    <div className={style.aboutContainer}>
      <div className={style.aboutContainerWrapper}>
        <div className={style.aboutContainerTitle}>
          <p>Boldly turning your </p>
          <p>vision into reality</p>
        </div>

        <div className={style.aboutContainerBoxImage}>
          <img src={FourBoxesImage} alt="" />
        </div>

        <div className={style.aboutContainerWhatWeDoWrapper}>
          <p className={style.aboutContainerWhatWeDoText}>
            What We <span>Really</span> Do??
          </p>
        </div>

        <div className={style.aboutContainerWhatWeDoCarouselWrapper}>
          <div className={style.aboutContainerWhatWeDoCarousel}>
            <div className={`${style.aboutCard} ${style.aboutCardRotatedLeft}`}>
              <div className={style.aboutContainerWhatWeDoIdWrapper}>
                <p>I</p>
              </div>
              <p className={style.aboutContainerWhatWeDoCarouselTitle}>
                IMAGINATION
              </p>
              <p className={style.aboutContainerWhatWeDoCarouselDesc}>
                We work closely with you to understand your brand's unique voice
                and goals. Together, we dream big and build the foundation for
                something extraordinary.
              </p>
            </div>

            <div className={`${style.aboutCard} ${style.aboutCardStagger}`}>
              <div className={style.aboutContainerWhatWeDoIdWrapper}>
                <p>D</p>
              </div>
              <p className={style.aboutContainerWhatWeDoCarouselTitle}>
                DISCOVERY
              </p>
              <p className={style.aboutContainerWhatWeDoCarouselDesc}>
                We dive into market trends, audience behaviors, and competitive
                analysis to uncover unique opportunities that will give your
                brand the edge it needs to stand out.
              </p>
            </div>

            <div className={`${style.aboutCard} ${style.aboutCardRotatedLeft}`}>
              <div className={style.aboutContainerWhatWeDoIdWrapper}>
                <p>e</p>
              </div>
              <p className={style.aboutContainerWhatWeDoCarouselTitle}>
                execute
              </p>
              <p className={style.aboutContainerWhatWeDoCarouselDesc}>
                We dive into market trends, audience behaviors, and competitive
                analysis to uncover unique opportunities that will give your
                brand the edge it needs to stand out.
              </p>
            </div>

            <div className={`${style.aboutCard} ${style.aboutCardStagger}`}>
              <div className={style.aboutContainerWhatWeDoIdWrapper}>
                <p>a</p>
              </div>
              <p className={style.aboutContainerWhatWeDoCarouselTitle}>
                AMPLIFY
              </p>
              <p className={style.aboutContainerWhatWeDoCarouselDesc}>
                Through targeted amplification strategies, we ensure your
                message reaches the right audience at the right time, expanding
                your brand’s presence and driving sustained growth.
              </p>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default About;
