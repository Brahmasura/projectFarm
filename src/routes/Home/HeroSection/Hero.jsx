import gsap from "gsap";
import style from "./hero.module.scss";
import { TextPlugin } from "gsap/all";
import { useRef } from "react";
import { useEffect } from "react";

// Register the TextPlugin with GSAP
gsap.registerPlugin(TextPlugin);

const Hero = () => {
  const textRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    // const words = ["Boldness", "Clarity", "Originality", "Precision"];
    const words = ["Nurturing Words", "harvesting Clarity", "Cultivating Quality"];
        {/* <h3>Nurturing words, harvesting clarity, cultivating quality.</h3> */}

    let mainTimeline = gsap.timeline({
      repeat: -1,
    });


    // creating text timeline
    words.forEach((word) => {
      let textTimeline = gsap.timeline({
        repeat: 1,
        yoyo: true,
        repeatDelay:6
      });

      textTimeline.to(textRef.current, {
        text: word,
        duration: 1,
      });

      mainTimeline.add(textTimeline);
    });


    // for blinking cursor effect 

    let cursorTimeline = gsap.timeline({
      repeat:-1,
      repeatDelay:.8
    });

    cursorTimeline.to(cursorRef.current, {
      opacity:1,
      duration:0
    } ).to(cursorRef.current, {
      opacity:0,
      duration:0,
      delay:.8
    });
  }, []);

  return (
    <div className={style.heroMain}>
      <div className={style.textDiv}>
        <h1>
          Edito Farm <br />
          <span ref={textRef} className={style.typewriter}></span>
          <span ref={cursorRef} className={style.cursor}>|</span>
        </h1>
        {/* <h3>Nurturing words, harvesting clarity, cultivating quality.</h3> */}
      </div>
    </div>
  );
};

export default Hero;
