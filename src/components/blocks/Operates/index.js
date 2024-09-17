import React from 'react';
import styles from "./Overview.module.scss"
import Container from "../../UI/Container";
import Show from '../../UI/Show';




const Operates = () => {
    return (

        <div className={styles.wrapper} id={"city"}>
            <Container>
            <Show initialX={100}>
                
                <div className={styles.container}>
                   <div className={styles.title}>
                   Multiculturalism <b>And</b> Hospitality
                   </div>
                    <div className={styles.items}>
                        <div className={styles.item}>
                            <div className={styles.itemText}>
                            Hong Kong, a city renowned for its multiculturalism and hospitality, attracts a vast number of expatriates who come to live and work here every year. This cosmopolitan nature makes Hong Kong the perfect setting for an international film festival. While we proudly take our name from this dynamic city and feature a significant portion of Asian films, our festival warmly welcomes entries from all over the world. We conduct the festival in English and screen films with English subtitles, ensuring accessibility for an international audience. Hong Kong serves as a hub for global representatives, and our festival mirrors this inclusivity and diversity.
                            </div>
                        </div>


                    </div>
                    <div className={styles.item}>
                            <a href={'https://filmfreeway.com/hongkonglightsfestival'} className={styles.button}>
                                <img src={"/images/FFButtons/red1.png"}/>
                            </a>
                        </div>
                </div>
                </Show>
            </Container>
        </div>
    );
};

export default Operates;