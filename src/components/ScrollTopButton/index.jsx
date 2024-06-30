import React, { useState, useEffect } from "react";
import styles from './style.module.css'
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // window.innerHeight = 100vh
      if (window.scrollY > window.innerHeight / 2) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        // <button
        //   onClick={scrollToTop}
        //   style={{
        //     position: 'fixed',
        //     bottom: '20px',
        //     right: '20px',
        //     padding: '10px 20px',
        //     backgroundColor: '#007BFF',
        //     color: '#fff',
        //     border: 'none',
        //     borderRadius: '5px',
        //     cursor: 'pointer'
        //   }}
        // >
        //   Scroll to Top
        // </button>
        <button style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                cursor: 'pointer'
              }} onClick={scrollToTop} className={styles.Topbutton}>
          <svg className={styles.svgIcon} viewBox="0 0 384 512">
            <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
          </svg>
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
