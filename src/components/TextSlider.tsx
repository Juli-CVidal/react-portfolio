import "../assets/styles/text_slider.css";
import { useState, useEffect } from "react";

type TextSliderProps = {
  fontSize: string;
  speed: number;
  texts: string[];
};

const TextSlider = ({ fontSize, speed, texts }: TextSliderProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const animationSpeed = `${speed}ms`;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex(
        (currentTextIndex) => (currentTextIndex + 1) % texts.length
      );
    }, speed);

    return () => {
      clearInterval(interval);
    };
  }, [speed, texts]);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--animation-speed",
      animationSpeed
    );
    document.documentElement.style.setProperty(
      "--slider-font-size",
      fontSize
    );
  }, [animationSpeed, fontSize]);

  return (
    <div className="text__slider">
      {texts.map((text, index) => (
        <p
          key={index}
          className={`text__slide ${
            currentTextIndex === index ? "active" : ""
          }`}
        >
          {text}
        </p>
      ))}
    </div>
  );
};

export default TextSlider;