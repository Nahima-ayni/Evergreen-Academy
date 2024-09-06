import Image from 'next/image';
import styles from './Landing.module.css';

export default function Landing() {
  return (
    <div className={styles.container}>
      <div className={styles.noticeBoard}>
        <h2>Notice Board</h2>
        <div className={styles.navigation}>
          <button className={styles.navButton}>&lt;</button>
          <button className={styles.navButton}>&gt;</button>
        </div>
        <div className={styles.events}>
          <div className={styles.event}>
            <div className={styles.date}>
              <span className={styles.day}>14th</span>
              <span className={styles.month}>Apr</span>
            </div>
            <div className={styles.eventInfo}>
              <h3>Ambedkar day</h3>
              <a href="#">Read more →</a>
            </div>
          </div>
          <div className={styles.event}>
            <div className={styles.date}>
              <span className={styles.day}>21th</span>
              <span className={styles.month}>Apr</span>
            </div>
            <div className={styles.eventInfo}>
              <h3>Sports day</h3>
              <a href="#">Read more →</a>
            </div>
          </div>
          <div className={styles.event}>
            <div className={styles.date}>
              <span className={styles.day}>21th</span>
              <span className={styles.month}>Apr</span>
            </div>
            <div className={styles.eventInfo}>
              <h3>Drawing Competition</h3>
              <a href="#">Read more →</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.about}>
        <div className={styles.aboutContent}>
          <h2>About E.H.A</h2>
          <h1>Know what we are, what we do, why us...</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Quis morbi imperdiet tristique nibh tulla rhoncus et consequat. Ullamcorper pharetra id habitasse habitasse convallis. Vitae ac diam sem tellus aliquam. Massa vehicula morbi consectetur vitae sollicitudin auctor massa congue parturient, consequat. Ullamcorper pharetra id.</p>
          <a href="#">Read more →</a>
        </div>
        <div className={styles.aboutImage}>
          <Image
            src="/About us 1.png"
            alt="About us"
            width={500}
            height={300}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
}
