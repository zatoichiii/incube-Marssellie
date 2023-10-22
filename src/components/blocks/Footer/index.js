import React from 'react';
import styles from "./Footer.module.scss"
import Container from "../../UI/Container";

const Footer = () => {
    return (
        <div className={styles.body}>
            <Container>
        <div className={styles.wrapper}>
            <div className={styles.text}>
                <div className={styles.rows}>
                    <div className={styles.logo}>
                        <img src="/images/logo.jpg" alt='' />
                    </div>
                    <div className={styles.row}>
                        <a href={'#aboutUS'}>ABOUT US</a>
                        <a href={'#history'}>OUR HISTORY</a>
                        <a href={'#values'}>OUR CORE VALUES</a>
                    </div>
                    <div className={styles.row}>
                        <a href={'#operates'}>HOW IT OPERATES</a>
                        <a href={'#awards'}>AWARDS</a>
                        <a href={'#rules'}>RULES</a>
                    </div>
                    <div className={styles.row}>
                    <div className={styles.button}>
                    <a href={'https://filmfreeway.com/Levelupsydney'}>
                        <img src={"/images/FFButtons/red1.png"}/>
                    </a>
                </div>
                    </div>
                </div>

            <div className={styles.line}></div>
            <div className={styles.copyright}>
            Copyright © 2024 Sydney Student International Film Festival
            </div>
            </div>
        </div>
            </Container>
        </div>
    );
};

export default Footer;