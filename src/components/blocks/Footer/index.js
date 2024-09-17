import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import styles from "./Footer.module.scss";
import Container from "../../UI/Container";

const Footer = () => {
    const footerItems = [
        { value: "ABOUT US", href: "about" },
        { value: "MISSION", href: "mission" },
        { value: "ABILITY", href: "ability" },
        { value: "CITY", href: "city" },
        { value: "CATEGORIES", href: "categories" },
        { value: "RULES", href: "rules" },
    ];

    return (
        <div className={styles.body}>
            <Container>
                <div className={styles.wrapper}>
                    <div className={styles.text}>
                        <div className={styles.rows}>
                            <div className={styles.logo}>
                                <img src="/images/logo.jpg" alt="Logo" />
                            </div>
                            <div className={styles.row}>
                                {footerItems.slice(0, 3).map(item => (
                                    <ScrollLink 
                                        to={item.href}
                                        className={styles.link}
                                        key={item.value}
                                        smooth={true}
                                        duration={500}
                                        offset={-50}
                                    >
                                        {item.value}
                                    </ScrollLink>
                                ))}
                            </div>
                            <div className={styles.row}>
                                {footerItems.slice(3).map(item => (
                                    <ScrollLink 
                                        to={item.href}
                                        className={styles.link}
                                        key={item.value}
                                        smooth={true}
                                        duration={500}
                                        offset={-50}
                                    >
                                        {item.value}
                                    </ScrollLink>
                                ))}
                            </div>
                            <div className={styles.row}>
                                <div className={styles.button}>
                                    <a href="https://filmfreeway.com/hongkonglightsfestival">
                                        <img src="/images/FFButtons/red1.png" alt="Submit Now" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.copyright}>
                            Copyright © 2025 Hong Kong Lights - International Film Festival
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;
