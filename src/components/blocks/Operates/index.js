import React from 'react';
import styles from "./Overview.module.scss";
import Container from "../../UI/Container";
import Show from '../../UI/Show';

const Operates = () => {
    return (
        <div className={styles.wrapper} id={"city"}>
            <Container>
                <div>
                    <div className={styles.venueInfo}>
                        <div className={styles.location}>
                            <p>La Baleine Cinema Marseille France</p>
                        </div>


                        <div className={styles.description}>
                            <p>A unique venue that offers an intimate setting for cinematic appreciation.</p>
                        </div>
                        <div className={styles.date}>
                            <p>September, 2025</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Operates;