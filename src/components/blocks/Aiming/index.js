import React from 'react';
import styles from "./Aiming.module.scss"
import Container from "../../UI/Container";

const Aiming = () => {
    return (

        <div className={styles.wrapper}>
            <Container>
            <div className={styles.inner}>
                <div className={styles.title}>
                    Contact <b>Us</b>!
                </div>
                <div className={styles.contact}>
                hongkonglightsfestival@gmail.com
                </div>
            </div>
            </Container>
        </div>
    );
};

export default Aiming;
