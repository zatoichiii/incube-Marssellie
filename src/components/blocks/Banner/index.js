import React from 'react';
import styles from "./Banner.module.scss"
import Container from "../../UI/Container";

const Banner = () => {
    return (

        <div className={styles.wrapper}>
            <Container>
                <div className={styles.inner}>
                    <div className={styles.info}>
                        <div className={styles.title}>
                            Best Director & Filmmaker Vancouver Awards
                        </div>
                        <div className={styles.subTitle}>
                            International competition held every four months, culminating in an annual screening event that celebrates the world's finest film directors, actors, and filmmakers.
                        </div>
                        <a href={'https://filmfreeway.com/bestdirectorawards'} className={styles.button}>
                            <img src={"/images/FFButtons/gold.png"}/>
                        </a>
                    </div>
                    <div className={styles.logo}>
                        <img src={"/images/logo.png"}/>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Banner;