"use client";

import s from "./scroll.module.scss";

import { useState, useEffect } from "react";

const ScrollUpButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [height, setHeight] = useState<number>(0);

  const toggleVisible = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Determine if the button should be visible
    const isVis = scrollTop > 100;
    setIsVisible(isVis);

    // Calculate the scroll percentage
    const scrolled = (scrollTop / (documentHeight - windowHeight)) * 100;
    setHeight(scrolled);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (circumference * height) / 100;

  return (
    <div className={s.container}>
      {isVisible && (
        <div className={s.icon} onClick={scrollToTop}>
          <svg width="100" height="100" viewBox="0 0 100 100">
          <circle
              cx="50"
              cy="50"
              r={radius}
              stroke="rgba(0, 0, 0, 0.1)" 
              strokeWidth="5"
              fill="none"
            />
            <circle
              cx="50"
              cy="50"
              r={radius}
              stroke="rgba(0, 75, 141, 0.6)"
              strokeWidth="5"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              transform="rotate(-90 50 50)"
            />
            <path
              d="M3 19h18a1.002 1.002 0 00.823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 003 19zm9-12.243L19.092 17H4.908L12 6.757z"
              fill="rgba(0, 75, 141, 0.6)"
              stroke="rgba(0, 75, 141, 0.6)"
              transform="translate(26, 25) scale(2)" 
              strokeWidth="0.5" 
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default ScrollUpButton;
