import "../assets/styles/text_slider.css";
import { useState, useEffect } from "react";

export type TextSliderProps = {
  speed: number;
  texts: string[];
};

const TextSlider = ({ speed, texts }: TextSliderProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const animationSpeed = `${speed}ms`;
  useEffect(() => {
    const length = texts.length;
    const interval = setInterval(() => {
      setCurrentTextIndex(
        (currentTextIndex) => (currentTextIndex + 1) % length
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
  }, [animationSpeed]);

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
