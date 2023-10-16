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
                        <img src="/images/Footer/logo.png" alt='' />
                    </div>
                    {/*<div className={styles.row}>*/}
                    {/*    <a href="mailto:example@gmail.ru">Contact Us example@gmail.ru</a>*/}
                    {/*</div>*/}
                    <div className={styles.row}>
                        <a href={'#awards'}>Awards</a>
                        <a href={'#categories'}>Categories</a>
                    </div>
                    <div className={styles.row}>
                        <a href={'#rules'}>Rules</a>
                        <a href={'https://filmfreeway.com/bestdirectorawards'}>Submit Now</a>
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>
                Copyright © 2023 Vancouver Awards
            </div>
        </div>
            </Container>
        </div>
    );
};

export default Footer;