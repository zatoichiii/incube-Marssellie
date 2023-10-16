import React from 'react';
import styles from "./About.module.scss"
import Container from "../../UI/Container";

const About = () => {
    return (
        <div className={styles.body}>
            <Container>
                <div className={styles.wrapper}>
                    <div className={styles.text}>
                        <div className={styles.title}>
                            About <span className={styles.red}>Us</span>
                        </div>
                            <div className={styles.description}>
                            Welcome to the official website of the "<span className={styles.red}>Level Up - Sydney student International Film Festival </span>"! This highly-anticipated, groundbreaking festival is set to make its debut in 2024. Our mission is to recognize and champion the exceptional talents of student filmmakers not only from Australia but also from around the world.
                            </div>
                    </div>
                </div>
                <div className={styles.images}>
                    <img  className={styles.first} src={"/images/About/1.png"}/>
                    <img className={styles.second} src={"/images/About/2.png"}/>
                </div>
            </Container>
        </div>
    );
};

export default About;