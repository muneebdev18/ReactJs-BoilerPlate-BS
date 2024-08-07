import React from 'react';
import styles from './style.module.css';
import { MdHome } from "react-icons/md";

const BottomNav = () => {
  return (
    <div className={styles.bottomNav}>
      <div className={styles.navItem}>
        {/* <i className="fas fa-wallet"></i> */}
        <MdHome/>
        <span>Balance</span>
      </div>
      <div className={styles.navItem}>
        {/* <i className="fas fa-chart-line"></i> */}
        <MdHome/>
        <span>Market</span>
      </div>
      <div className={styles.navItem}>
        {/* <i className="fas fa-exchange-alt"></i> */}
        <MdHome/>
        <span>Exchange</span>
      </div>
      <div className={styles.navItem}>
        {/* <i className="fas fa-cog"></i> */}
        <MdHome/>
        <span>Setting</span>
      </div>
    </div>
  );
};

export default BottomNav;
