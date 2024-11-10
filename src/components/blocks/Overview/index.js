import React from 'react';
import styles from "./Overview.module.scss";
import Container from "../../UI/Container";
import Show from '../../UI/Show';

const Overview = () => {
    const sections = [
        {
            title: "L’Éveil (Awakening)",
            description: "A platform for bold, experimental narratives that break conventions."
        },
        {
            title: "La Tradition (Tradition)",
            description: "A celebration of classic genres and cinematic craftsmanship."
        },
        {
            title: "L’Art et l’Harmonie (Art and Harmony)",
            description: "A focus on aesthetics and the visual beauty of storytelling."
        },
    ];

    return (
        <div className={styles.wrapper} id={"mission"}>
            <Container>
                <Show>
                    <h2 className={styles.introText}>
                        Our festival unfolds in three distinct stages, each showcasing unique aspects of cinema:
                    </h2>
                    <div className={styles.tiles}>
                        {sections.map((section, index) => (
                            <div key={index} className={styles.tile}>
                                <h3 className={styles.title}>{section.title}</h3>
                                <p className={styles.description}>{section.description}</p>
                            </div>
                        ))}
                    </div>
                    <h2 className={styles.outroText}>
                    At Incube de Marseille, each stage of the festival highlights unique cinematic perspectives, but only the best from each season are invited to the grand annual screening. Our year-end event brings together the finest works, where the top winners from each stage are showcased in a prestigious, large-scale screening
                    </h2>
                </Show>
            </Container>
        </div>
    );
};

export default Overview;