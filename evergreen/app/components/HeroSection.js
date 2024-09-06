import Image from 'next/image';
import Link from 'next/link';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h2 className={styles.heroSubheading}>#1 EDUCATIONAL INSTITUTE IN HARDOI DISTRICT</h2>
          <h1 className={styles.heroHeading}>Welcome to Evergreen Academy</h1>
          <p className={styles.heroDescription}>
            Our Goal is to empower everyone with quality-type education,
            we're leveraging the power of technology.
          </p>
          <Link href="/admissions" className={styles.heroButton}>
            Apply for admission →
          </Link>
        </div>
        <div className={styles.heroImageContainer}>
          <Image 
            src="/shool building.png" 
            alt="School Building" 
            layout="fill" 
            objectFit="cover" 
          />
        </div>
      </div>
    </section>
  );
}
