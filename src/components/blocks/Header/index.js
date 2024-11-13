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
        { value: "About Us", href: "about" },
        { value: "Stages", href: "mission" },
        { value: "Main Awards", href: "categories" },
        { value: "Rules", href: "rules" },
        { value: "City", href: "city" },
        { value: "Submit", href: "https://filmfreeway.com/marseillefestivalIncube", external: true }
    ];

    return (
        <div className={`${styles.headerWrapper} ${scrolled ? styles.scrolled : ""}`}>
            <Container>
                <div className={styles.inner}>
                    <a href={"/"} className={styles.logo}>
                        <img src={"/images/ico.png"} alt="Incube"/>
                    </a>
                    <div className={styles.headerItems}>
                        {menuItems.map((item, index) => (
                            <React.Fragment key={item.value}>
                                {item.external ? (
                                    <a href={item.href} className={styles.headerItem} target="_blank" rel="noopener noreferrer">
                                        {item.value}
                                    </a>
                                ) : (
                                    <ScrollLink 
                                        to={item.href} 
                                        className={styles.headerItem} 
                                        smooth={true} 
                                        duration={500} 
                                        offset={-50}
                                    >
                                        {item.value}
                                    </ScrollLink>
                                )}
                                {index < menuItems.length - 1 && <span className={styles.separator}> | </span>}
                            </React.Fragment>
                        ))}
                    </div>
                    <button onClick={() => setMenuActive(!menuActive)} className={`${styles.menuButton} ${menuActive ? styles.active : ""}`}>
                        <div className={styles.menuIcon} />
                    </button>
                </div>
            </Container>
            <Menu header=" Incube de Marseille Film Festival" items={menuItems} active={menuActive} setActive={setMenuActive} />
        </div>
    );
};

export default Header;