import React, { useState, useEffect } from "react";
import useGoogleReviews from "./useGoogleReviews";
import styles from "./GoogleReviews.module.css";
import { div } from "framer-motion/client";

const GoogleReviews = () => {
  const reviews = useGoogleReviews();
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviewsPerPage = 3;

  useEffect(() => {
    if (reviews.length > 0 && currentIndex >= reviews.length - (reviewsPerPage - 1)) {
      setCurrentIndex(reviews.length - reviewsPerPage);
    }
  }, [reviews, currentIndex]);

  const nextReview = () => {
    if (currentIndex + 1 <= reviews.length - reviewsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevReview = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <>
      <div className={styles.reviewTextContainer}>
        <p>¡Lo que dicen algunas familias y estudiantes que ya han confiado en nosotros!</p>
      </div>
      <div className={styles.reviewContainer}>      
        {/* Botón de Anterior arriba */}
        <button 
        onClick={prevReview} 
        disabled={currentIndex === 0} 
        className={`${styles.navButton1} ${currentIndex === 0 ? styles.disabled : ''}`}
        >
        <svg class={styles.svgIcon1} viewBox="0 0 384 512">
          <path
            d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
          ></path>
        </svg>
        </button>
        <div className={styles.reviewsList}>
          {reviews.slice(currentIndex, currentIndex + reviewsPerPage).map((review, index) => (
            <div key={index} className={styles.review}>
              <div className={styles.author}>{review.author_name}</div>
              <div className={styles.rating}>⭐ {review.rating}</div>
              <p>{review.text}</p>
            </div>
          ))}
        </div>
        {/* Botón de Siguiente abajo */}
        <button 
        onClick={nextReview} 
        disabled={currentIndex >= reviews.length - reviewsPerPage} 
        className={`${styles.navButton2} ${currentIndex >= reviews.length - reviewsPerPage ? styles.disabled : ''}`}
        >
          <svg class={styles.svgIcon2} viewBox="0 0 384 512">
            <path
              d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
            ></path>
          </svg>
        </button>
        <a 
          href="https://www.google.com/search?q=discovery+institute&oq=discover&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIPCAEQLhgUGIcCGLEDGIAEMggIAhBFGCcYOzIGCAMQRRhAMhIIBBAuGEMYxwEY0QMYgAQYigUyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQg1MTk3ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x95a1d538f62cca99:0xb24c2624cc65d8e1,1,,,," 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.viewMore}
        >
          Ver más reseñas en Google
        </a>
      </div>
    </>
  );
};

export default GoogleReviews;
