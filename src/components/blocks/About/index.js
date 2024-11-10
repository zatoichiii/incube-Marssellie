import React from 'react';
import styles from "./About.module.scss";
import Container from "../../UI/Container";
import Show from "../../UI/Show";

const About = () => {
    return (
        <div className={styles.body} id={"about"}>
            <Container>
                <Show>
                    <div className={styles.wrapper}>
                        <div className={styles.textContainer}>
                            <div className={styles.title}>About</div>
                            <div className={styles.text}>
                                The Incube de Marseille Film Festival is an annual celebration showcasing the creative talent of filmmakers worldwide.
                            </div>
                            <div className={styles.subtitle}>What is Incube?</div>
                            <div className={styles.text}>
                                Winning films receive opportunities for screenings, guidance on approaching major film productions, festival certificates, and endorsements.
                            </div>
                        </div>
                        <img 
                            src="https://avatars.mds.yandex.net/i?id=c3a7a534f4aa7344adecfda1a63ba576b641a7ff-5858886-images-thumbs&n=13" 
                            alt="Festival" 
                            className={styles.image} 
                        />
                    </div>
                </Show>
            </Container>
        </div>
    );
};

export default About;