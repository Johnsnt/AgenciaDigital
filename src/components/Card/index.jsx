import style from './Card.module.css';
import React, { useEffect, useRef, useState } from 'react';

export default function Card({ date, title, empresa, info, theme }) {

    const elementRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); 
          }
        });
      });
  
      observer.observe(elementRef.current);
  
      return () => observer.disconnect(); 
    }, []);

    return (
        <div ref={elementRef} className={`${theme ? style.cardDark : style.card} ${style.show} ${isVisible ? style.showAnimated : ''}`}>
            <p>{date}</p>
            <h3>{title}</h3>
            <p>{empresa}</p>
            <p>{info}</p>
        </div>
    );
}