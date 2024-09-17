import React from 'react';
import styles from "./CoreValues.module.scss"
import Container from "../../UI/Container";
import Show from '../../UI/Show';

const CoreValues = () => {
    return (

        <div className={styles.wrapper} id={"ability"}>
            <Container>
            <Show initialX={-100}>
            <div className={styles.inner}>
                <div className={styles.title}>
                   <b>Ability</b>
                </div>
                <div className={styles.text}>
                Our judges are keen to recognise and reward outstanding cinematic achievements that touch on pressing social issues. Each work is chosen for its ability to touch, engage and provoke thought.
                </div>
            </div>
            </Show>
            </Container>
        </div>
    );
};

export default CoreValues;
