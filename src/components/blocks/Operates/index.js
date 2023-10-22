import React from 'react';
import styles from "./Overview.module.scss"
import Container from "../../UI/Container";





const Operates = () => {
    return (

        <div className={styles.wrapper} id={"operates"}>
            <Container>
                <div className={styles.container}>
                   <div className={styles.title}>
                       How It <b>Operates</b>
                   </div>
                    <div className={styles.items}>
                        <div className={styles.item}>
                            <div className={styles.itemTitle}>
                                1. Student Submissions Across Categories and Genres
                            </div>
                            <div className={styles.itemText}>
                                We extend a warm invitation to students to submit their film projects across a wide spectrum of categories and genres. Whether it's a documentary, a short film, or an innovative animation, we embrace diverse creative expressions. Our festival deeply appreciates that students bring unique perspectives and fresh ideas to the world of cinema
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.itemTitle}>
                                2. Judging by Industry Experts
                            </div>
                            <div className={styles.itemText}>
                                Each submission undergoes a rigorous judging process. Our panel of judges comprises seasoned industry professionals with a wealth of experience and knowledge. Their expertise ensures that only the most exceptional works make it to the next stage.
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.itemTitle}>
                                3. Selection and Nomination
                            </div>
                            <div className={styles.itemText}>
                                Based on the judges' evaluations, we select the top entries in each category. Up to three films are nominated within each category, representing the pinnacle of emerging talent. Nominated films are not only showcased at our festival but also stand a chance to receive prestigious awards.
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.itemTitle}>
                                4. Festival Screenings and Gala Celebration
                            </div>
                            <div className={styles.itemText}>
                                The selected films are featured in live, in-person screenings during our festival. This provides a unique opportunity for filmmakers to witness their creations on the big screen and engage with the audience. The festival culminates in a grand gala celebration where the awards are presented. It's a night of recognition, celebration, and a chance for our emerging talents to shine.
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.itemTitle}>
                                5. International Exposure
                            </div>
                            <div className={styles.itemText}>
                                "Level Up" aims to be more than just a local event. We want our student filmmakers to gain international exposure and recognition. Winning films and outstanding entries may have the opportunity to be showcased at other prestigious festivals around the world, broadening the reach and impact of their work.
                            </div>
                        </div>
                        <div className={styles.item}>
                            <a href={'https://filmfreeway.com/Levelupsydney'} className={styles.button}>
                                <img src={"/images/FFButtons/red1.png"}/>
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Operates;