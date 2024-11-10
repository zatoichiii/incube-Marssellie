import React from 'react';
import styles from "./CoreValues.module.scss"
import Container from "../../UI/Container";
import Show from '../../UI/Show';

const CoreValues = () => {
    return (

        <div className={styles.wrapper} id={"ability"}>
            <Container>
                <div className={styles.title}>
                   <b>Ability</b>
                </div>

            </Container>
        </div>
    );
};

export default CoreValues;
