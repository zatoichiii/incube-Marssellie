import React from 'react';
import styles from "./Aiming.module.scss"
import Container from "../../UI/Container";

const Aiming = () => {
    return (

        <div className={styles.wrapper}>
            <Container>
            <div className={styles.inner}>
                <div className={styles.title}>
                    We are aiming to watch your project!
                </div>
                <div className={styles.button}>
                    <a href={'https://filmfreeway.com/Levelupsydney'}>
                        <img src={"/images/FFButtons/red1.png"}/>
                    </a>
                </div>
            </div>
            </Container>
        </div>
    );
};

export default Aiming;
