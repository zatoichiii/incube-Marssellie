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
                        <img src="#" alt='' />
                    </div>
                    <div className={styles.row}>
                        <a href={'#'}>About Us</a>
                        <a href={'#'}>Dates</a>
                        <a href={'#'}>History</a>
                    </div>
                    <div className={styles.row}>
                        <a href={'#'}>Awards</a>
                        <a href={'#'}>Rules</a>
                        <a href={'#'}>Core Values</a>
                    </div>
                    <div className={styles.row}>
                    <div className={styles.button}>
                    <a href={'https://filmfreeway.com'}>
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