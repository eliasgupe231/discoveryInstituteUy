import React from 'react';
import styles from './Cards.module.css';

const Card = ({ style, content }) => {
  return (
    <div className={styles.card} style={style}>
      <div className={styles.TitleContainer}>
        <p className={styles.cardTitle}>{content.title}</p>
      </div>
      <div className={styles.cardContent} style={style}>
        <ul className={styles.cardDetails}>
          {content.details.map((detail, index) => (
            <li key={index} className={styles.cardDetailItem}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Card;
