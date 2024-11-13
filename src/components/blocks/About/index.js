import React from 'react';
import styles from "./About.module.scss";
import Container from "../../UI/Container";
import Show from "../../UI/Show";

const About = () => {
    return (
        <div className={styles.body} id={"about"}>
            <Container>
                    <div className={styles.wrapper}>
                        <div className={styles.textContainer}>
                            <div className={styles.title}>About</div>
                            <div className={styles.text}>
                            The Incube de Marseille Film Festival is an annual event that has become a significant milestone in the world of cinema and culture. Held in the picturesque city of Marseille, known for its historical landmarks and vibrant cultural life, the festival attracts talented filmmakers from around the globe each year to showcase their works and share unique stories.
                            </div>
                            <div className={styles.subtitle}>What is Incube?</div>
                            <div className={styles.text}>
                            Incube is not just a festival. it is a platform that supports and nurtures new voices in the film industry. <br></br> We strive to create a space where emerging and established filmmakers can exchange ideas, draw inspiration from each other's work, and find like-minded individuals. Throughout the festival, various workshops, discussions, and panel sessions are held, allowing participants to learn about the latest trends in cinema and receive valuable insights from experienced professionals.
                            </div>

                        </div>
                        <img 
                            src="https://img.freepik.com/free-photo/front-view-popcorn-box-ready-be-served_23-2148529847.jpg?t=st=1731529821~exp=1731533421~hmac=25c0b77e6c424006ea35d36982b256c7295c72292370c4442dc51dfb2506da08&w=740" 
                            alt="Festival" 
                            className={styles.image} 
                        />
                        
                    </div>
            </Container>
        </div>
    );
};

export default About;