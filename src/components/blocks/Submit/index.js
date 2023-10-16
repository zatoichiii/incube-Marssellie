import React from 'react';
import styles from "./Submit.module.scss"
import Container from "../../UI/Container";

const Submit = () => {
    return (

        <div className={styles.wrapper}>
            <Container>
            <div className={styles.inner}>
                <div className={styles.title}>
                    We are aiming to watch your project!
                </div>
                <div className={styles.button}>
                    <a href={'https://filmfreeway.com/bestdirectorawards'}>
                        <img src={"/images/FFButtons/gold.png"}/>
                    </a>
                </div>
            </div>
            </Container>
        </div>
    );
};

export default Submit;
