import React from 'react';
import styles from "./Overview.module.scss";
import Container from "../../UI/Container";
import Show from '../../UI/Show';

const Operates = () => {
    return (
        <div className={styles.wrapper} id={"city"}>
            <Container>
                <Show>
                    <div className={styles.title}>Venue Information</div>
                    <div className={styles.venueInfo}>
                        <div className={styles.location}>
                            <p>La Baleine Cinema, Marseille, France</p>
                        </div>

                        <div className={styles.imageContainer}>
                            <img 
                                src="https://s0.rbk.ru/v6_top_pics/media/img/9/33/755852177483339.jpg" // Замените на фактический URL изображения
                                alt="La Baleine Cinema"
                                className={styles.cinemaImage}
                            />
                        </div>
                        <div className={styles.description}>
                            <p>A unique venue that offers an intimate setting for cinematic appreciation.</p>
                        </div>
                    </div>
                </Show>
            </Container>
        </div>
    );
};

export default Operates;