import { useState, useEffect, useRef } from "react";

const AnimatedCounter = ({ endValue, label, duration = 0.001 }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && count === 0) {
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setCount(i);
        if (i >= endValue) {
          clearInterval(interval);
        }
      }, duration);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <div ref={counterRef} style={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center" }}>
        {label} {count} 
    </div>
  );
};

export default AnimatedCounter;
