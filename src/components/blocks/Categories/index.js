import React from 'react';
import styles from "./Categories.module.scss"
import Container from "../../UI/Container";

const Categories = () => {
    return (
        <div className={styles.body} id={"categories"}>
            <Container>
                <div className={styles.wrapper}>

                        <div className={styles.tittle}>
                            Categories
                        </div>
                        <div className={styles.blocks}>
                            <ul className={styles.block}>
                                <li>
                                Best Composer Award</li><li>
                                Best Actor Award</li><li>
                                Best Supporting Actor Award</li><li>
                                Best Actress Award</li><li>
                                Best Supporting Actress Award</li><li>
                                Best Cinematographer (Director of Photography) Award</li><li>
                                Best Film Editor Award</li><li>
                                Best Production Designer Award</li><li>
                                Best Costume Designer Award</li><li>
                                Best Makeup and Hairstyling Award</li><li>
                                Best Visual Effects Artist Award</li><li>
                                Best Sound Designer Award</li><li>
                                Best Screenwriter Award</li><li>
                                Best Documentary Filmmaker Award</li><li>
                                Best Animation Artist Award</li><li>
                                Best Original Song Award</li><li>
                                Best Stunt Coordinator Award</li>
                            </ul>
                            <ul className={styles.block}>
                                <li>
                                Best Director of a Comedy </li><li>
                                Best Director of a Drama </li><li>
                                Best Director of a Documentary </li><li>
                                Best Director of an Animation </li><li>
                                Best Director of a Music Video </li><li>
                                Best Director of a Thriller </li><li>
                                Best Director of a Horror</li><li>
                                Best Director of a Romance Best Director of a Fantasy</li><li>
                                Best Director of a Sci-Fi Best Director of an Experimental Film</li><li>
                                Best Director of a Biographical Film</li><li>
                                Best Director of a Social Justice Film</li><li>
                                Best Student Director</li><li>
                                Best 1st-time Director of a Feature</li><li>
                                Best 1st-time Director of a Short</li>
                            </ul>
                        </div>

                </div>
            </Container>
        </div>
    );
};

export default Categories;