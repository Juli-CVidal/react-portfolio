import "../assets/styles/text_slider.css";
import { useState, useEffect } from "react";

const TextSlider = () => {
  const texts: string[] = ["FullStack Developer", "Quality Assurance"];
  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex(
        (currentTextIndex) => (currentTextIndex + 1) % texts.length
      );
    }, 2500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="text__slider">
      {texts.map((text, index) => {
        return (
          <div
            key={text}
            className={
              "text__slide " + (currentTextIndex === index ? "active" : "")
            }
          >
            {text}
          </div>
        );
      })}
    </div>
  );
};

export default TextSlider;
