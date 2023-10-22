import React from 'react';
import styles from "./CoreValues.module.scss"
import Container from "../../UI/Container";

const CoreValues = () => {
    return (

        <div className={styles.wrapper} id={"values"}>
            <Container>
            <div className={styles.inner}>
                <div className={styles.title}>
                   <b>Core</b> Values
                </div>
                <div className={styles.text}>
                    At the heart of our festival is a profound belief in the transformative power of creative expression and the invaluable lessons learned through art. <b>"Level Up"</b> acts as a vital bridge connecting aspiring young filmmakers with the professional film world. We hold firm that every student filmmaker involved in a project deserves not only acknowledgment but also unwavering support.
                </div>
            </div>
            </Container>
        </div>
    );
};

export default CoreValues;
