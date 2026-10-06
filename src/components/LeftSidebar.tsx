import React from 'react';
import styles from './LeftSidebar.module.css';
import myImage from '../assets/Farhan.png';

interface LeftSidebarProps {
  onSectionClick: (sectionId: string) => void;
}

const LeftSidebar: React.FC<LeftSidebarProps> = ({ onSectionClick }) => {
  const navigationItems = [
    { name: 'About me', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Internships', id: 'internships' },
    { name: 'Education', id: 'education' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', url: '#', icon: <svg viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg> },
    { name: 'Facebook', url: '#', icon: <svg viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg> },
    { name: 'GitHub', url: '#', icon: <svg viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> },
    { name: 'Behance', url: '#', icon: <svg viewBox="0 0 24 24"><path d="M22 7h-7v1h7v-1zm-10.22 1.723c-.412-.516-1.012-.767-1.802-.767h-4.004v6.402h3.791c.884 0 1.502-.239 1.879-.705.378-.466.567-1.119.567-1.959 0-.847-.21-1.503-.631-1.971zm-2.349 4.398h-1.681v-2.023h1.681c.795 0 1.2.336 1.2 1.008 0 .674-.405 1.015-1.2 1.015zm10.741-2.052c-.08-.941-.429-1.683-1.054-2.22-.625-.539-1.464-.808-2.518-.808-1.127 0-2.029.362-2.705 1.085-.677.724-1.015 1.761-1.015 3.111 0 1.341.328 2.378.983 3.111.656.734 1.581 1.1 2.775 1.1 1.077 0 1.94-.287 2.593-.86.652-.574.995-1.373 1.026-2.399h-1.892c-.053.486-.233.864-.542 1.135-.308.27-.723.405-1.246.405-.623 0-1.096-.201-1.421-.604-.324-.403-.503-.997-.534-1.782h7.094c.01-.264.015-.521.015-.774zm-3.551-1.469c.531 0 .942.176 1.233.528.29.351.458.857.502 1.517h-3.487c.052-.663.228-1.171.53-1.523.301-.353.708-.522 1.222-.522zm-12.647-1.51h-4.004v2.791h3.765c.683 0 1.16-.144 1.431-.433.27-.29.406-.69.406-1.199 0-1.04-.533-1.559-1.598-1.559zm-.239 4.887h-3.765v3.136h3.987c.759 0 1.294-.158 1.603-.475.31-.316.465-.758.465-1.326 0-1.111-.53-1.667-1.59-1.667z"/></svg> },
    { name: 'Fiverr', url: '#', icon: <svg viewBox="0 0 24 24"><path d="M16.52 7.32H19.5V4.34H16.52v2.98zm-9.35 12.33h2.95V10.1H7.17v9.55zm5.78 0h2.95v-5.61c0-1.29.23-2.35 1.72-2.35v-2.99c-1.42 0-2.28.78-2.67 1.52h-.05v-1.22h-2.95v9.65zm-9.34 0h2.95V10.1H3.61v9.55zm1.48-11.08c.98 0 1.77-.79 1.77-1.77s-.79-1.77-1.77-1.77-1.77.79-1.77 1.77.79 1.77 1.77 1.77zm15.74 1.83h-3.4v2.76h3.4V19.65h2.95V10.4h-2.95v.0z"/></svg> },
    { name: 'Freelancer', url: '#', icon: <svg viewBox="0 0 24 24"><path d="M12.98 10.426l8.802-3.754L12.98 2.062v8.364zm.013 3.132l8.286-2.585-8.286-3.535v6.12zm-2.006-3.132V2.062L2.185 6.672l8.802 3.754zm-2.61 1.701L2.83 10.158l5.557 1.968zM12.98 21.938l8.918-6.19-8.918-2.778v8.968zm-1.993-8.968l-8.918 2.778 8.918 6.19v-8.968z"/></svg> },
    { name: 'WhatsApp', url: 'https://wa.me', icon: <svg viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.454L0 24zm6.59-4.846c1.6.95 3.198 1.451 4.786 1.452 5.566 0 10.1-4.515 10.103-10.081.002-2.698-1.042-5.234-2.943-7.136S14.15 1.35 11.45 1.348C5.885 1.348 1.352 5.862 1.349 11.43c-.001 1.706.469 3.376 1.36 4.894l-.999 3.648 3.738-.981zM17.65 14.86c-.32-.16-1.89-.93-2.185-1.04-.294-.11-.51-.16-.723.16-.214.32-.828 1.04-1.014 1.255-.187.216-.374.24-.694.08-1.548-.778-2.585-1.396-3.626-3.18-.273-.471.273-.437.78-.145.166.096.32.19.46.29.32.22.42.36.56.62.14.26.07.49-.03.69-.1.2-.92 2.21-1.26 3.03-.331.795-1.013.75-1.57.19-2.12-2.132-2.31-4.73-.34-7.22.18-.23.39-.46.62-.69.23-.23.3-.39.46-.71.16-.32.08-.6-.04-.82-.12-.22-.92-2.21-1.26-3.03-.34-.813-.68-.7-1.02-.7-.22 0-.47-.02-.73-.02-.26 0-.68.1-1.04.49-.36.39-1.38 1.35-1.38 3.28 0 1.93 1.41 3.8 1.61 4.06.2.26 2.77 4.23 6.71 5.93.94.4 1.67.64 2.24.82.95.3 1.82.26 2.5.16.76-.11 2.33-.95 2.65-1.87.32-.92.32-1.7.23-1.87-.1-.17-.36-.27-.68-.43z"/></svg> }
  ];

  return (
    <div className={styles.container}>
      
      {/* 1. Profile Image */}
      <div className={styles.avatarContainer}>
        <img 
          src={myImage} 
          alt="Farhan Khan - Profile" 
          className={styles.avatarImg}
        />
      </div>

      {/* 2. Name & Title */}
      <div className={styles.titleBlock}>
        <h1 className={styles.name}>Farhan Khan</h1>
        <span className={styles.role}>Full-Stack Developer | React • Laravel • Python</span>
      </div>

      {/* 3. Punchy, Client-Oriented & Short Introduction */}
      <p className={styles.introText}>
        Hi, I’m Farhan. I handle your entire web project from scratch—building stunning 
        frontends, coding powerful backends/databases, and configuring your domain & hosting. 
        I don't just deliver clean code; I deliver complete digital solutions with 100% 
        client satisfaction.
      </p>

      {/* 4. Contact Block */}
      <div className={styles.contactBlock}>
        <div className={styles.contactItem}>
          <span className={styles.contactLabel}>Email:</span>
          <span className={styles.contactValue}>fk75120233@gmail.com</span>
        </div>
        <div className={styles.contactItem}>
          <span className={styles.contactLabel}>Phone:</span>
          <span className={styles.contactValue}>+92 323 2171866</span>
        </div>
        <div className={styles.contactItem}>
          <span className={styles.contactLabel}>Address:</span>
          <span className={styles.contactValue}>Rawalpindi, Pakistan</span>
        </div>
      </div>

      {/* 5. Navigation Items */}
      <nav className={styles.navBar}>
        {navigationItems.map((item) => (
          <button
            key={item.id}
            className={`${styles.navButton} group`}
            onClick={() => onSectionClick(item.id)}
          >
            <span className={styles.buttonText}>{item.name}</span>
            <span className={styles.arrowIcon}>→</span>
          </button>
        ))}
      </nav>

      {/* 6. Social Containers Added At the Very End */}
      <div className={styles.socialContainer}>
        {socialLinks.map((link, idx) => (
          <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className={styles.socialIconWrapper}>
            {link.icon}
            <span className={styles.tooltip}>{link.name}</span>
          </a>
        ))}
      </div>

    </div>
  );
};

export default LeftSidebar;
