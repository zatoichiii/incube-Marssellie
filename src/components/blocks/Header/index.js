import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import styles from "./Header.module.scss";
import Container from "../../UI/Container";
import Menu from "../../UI/Menu";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuActive, setMenuActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const menuItems = [
        { value: "ABOUT US", href: "about" },
        { value: "MISSION", href: "mission" },
        { value: "ABILITY", href: "ability" },
        { value: "CITY", href: "city" },
        { value: "CATEGORIES", href: "categories" },
        { value: "RULES", href: "rules" },
        { value: "SUBMIT NOW", href: "https://filmfreeway.com/hongkonglightsfestival", external: true }
    ];

    return (
        <div className={`${styles.headerWrapper} ${scrolled ? styles.scrolled : ""}`}>
            <Container>
                <div className={styles.inner}>
                    <a href={"/"} className={styles.logo}>
                        <img src={"/images/logo.jpg"} alt="Logo"/>
                    </a>
                    <div className={styles.headerItems}>
                        {menuItems.map(item => (
                            item.external ? (
                                <a href={item.href} className={styles.headerItem} key={item.value} target="_blank" rel="noopener noreferrer">
                                    {item.value}
                                </a>
                            ) : (
                                <ScrollLink 
                                    to={item.href} 
                                    className={styles.headerItem} 
                                    key={item.value} 
                                    smooth={true} 
                                    duration={500} 
                                    offset={-50}
                                >
                                    {item.value}
                                </ScrollLink>
                            )
                        ))}
                    </div>
                    <button onClick={() => setMenuActive(!menuActive)} className={`${styles.menuButton} ${menuActive ? styles.active : ""}`}>
                        <div className={styles.menuIcon} />
                    </button>
                </div>
            </Container>
            <Menu header="Menu" items={menuItems} active={menuActive} setActive={setMenuActive} />
        </div>
    );
};

export default Header;
