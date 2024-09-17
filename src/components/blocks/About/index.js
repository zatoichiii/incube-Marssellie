import React from 'react';
import styles from "./About.module.scss"
import Container from "../../UI/Container";
import Show from "../../UI/Show";

const About = () => {
    return (
        <div className={styles.body} id={"about"}>
            <Container>
                <Show>
                <div className={styles.bodyWrapper}>
                    <div className={styles.wrapper}>
                        <div className={styles.text}>
                            <div className={styles.title}>
                                About <span className={styles.blue}>Us</span>
                            </div>
                                <div className={styles.description}>
                                Located in the heart of <span className={styles.blue}> Hong Kong </span>, the festival is a beacon for independent filmmakers and cinephiles around the world.  Our festival is not just an event, but a movement to champion diverse voices and promote social change through the art of cinema.
                                </div>
                        </div>
                    </div>
                        <img  className={styles.first} src={"/images/About/about.png"}/>

                </div>
                </Show>
            </Container>
        </div>
    );
};

export default About;