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
                            <b>Level Up</b> - Sydney Student International Film Festival
                        </div>
                        <div className={styles.subTitle}>
                            April 19th and 20th, 2024 as the "Level Up" festival unveils the finest creations by emerging talents in the world of cinema.
                        </div>
                        <a href={'https://filmfreeway.com/bestdirectorawards'} className={styles.button}>
                            <img src={"/images/FFButtons/red1.png"}/>
                        </a>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Banner;