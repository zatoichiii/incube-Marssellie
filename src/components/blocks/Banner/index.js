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
                            <b> HONG KONG LIGHTS - International Film Festival</b>
                        </div>
                        <div className={styles.subTitle}>
                        February 25, 2025

                        </div>
                        <a href={'https://filmfreeway.com/hongkonglightsfestival'} className={styles.button}>
                            <img src={"/images/FFButtons/red1.png"} alt="FilmFreeway Button"/>
                        </a>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Banner;
