import React from 'react';
import styles from './Cards.module.css';

const Card = ({ style, content }) => {
  return (
    <div className={styles.card} style={{ backgroundColor: style.backgroundColor }}>
      <div className={styles.cardInner}>
        <div className={styles.cardFront} style={{ color: style.color, fontSize: style.fontSize }}>
          <h2 className={styles.cardTitle}> {content.title} </h2>
          <ul className={styles.cardList}>
            {content.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
          <p className={styles.cardFooter}>{content.footer}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
