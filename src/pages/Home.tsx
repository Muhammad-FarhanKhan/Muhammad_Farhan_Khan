import React from 'react';
import LeftSidebar from '../components/LeftSidebar';
import RightContent from '../components/RightContent';
import styles from './Home.module.css';

const Home: React.FC = () => {
  // Smooth scroll handle karne wala function
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className={styles.homeLayout}>
      {/* Left Fixed Side: Scroll function ko as a prop pass kar rahe hain */}
      <section className={styles.leftSection}>
        <LeftSidebar onSectionClick={handleScrollToSection} />
      </section>

      {/* Right Scrollable Side */}
      <section className={styles.rightSection}>
        <RightContent />
      </section>
    </div>
  );
};

export default Home;
