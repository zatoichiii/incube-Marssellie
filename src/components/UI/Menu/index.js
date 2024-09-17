// Menu.jsx

import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import styles from "./Menu.module.scss";

const Menu = ({ header, items, active, setActive }) => {
    return (
        <div className={`${styles.menu} ${active ? styles.active : ""}`}>
            <div className={styles.header}>
                {header}
                <button  onClick={() => setActive(false)} className={styles.closeButton}>×</button>
            </div>
            <div className={styles.items}>
                {items.map(item => (
                    item.external ? (
                        <a href={item.href} className={styles.item} key={item.value} target="_blank" rel="noopener noreferrer">
                            {item.value}
                        </a>
                    ) : (
                        <ScrollLink 
                            to={item.href} 
                            className={styles.item} 
                            key={item.value} 
                            smooth={true} 
                            duration={500} 
                            offset={-50}
                            onClick={() => setActive(false)}
                        >
                            {item.value}
                        </ScrollLink>
                    )
                ))}
            </div>
        </div>
    );
};

export default Menu;
