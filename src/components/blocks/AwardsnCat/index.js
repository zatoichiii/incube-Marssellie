import React from 'react';
import styles from "./AwardsnCat.module.scss";
import Container from "../../UI/Container";
import Show from '../../UI/Show';

const Aiming = () => {
    const awards = [
        "Best Music Video",
        "Best Short Film",
        "Best Feature Film",
        "Best Animated Film",
        "Best Documentary",
        "Best Student Film",
        "Best Experimental Film",
        "Best Short Screenplay",
        "Best Feature Screenplay",
    ];

    const getRandomWidth = () => {
        const min = 130; 
        const max = 600; 
        return Math.floor(Math.random() * (max - min + 1)) + min; 
    };

    return (
        <div className={styles.wrapper} id={"categories"}>
                <div className={styles.inner}>
                    <h2 className={styles.title}>Main Awards</h2>
                    {awards.map((award, index) => (
                        <div 
                            key={index} 
                            className={styles.awardBlock} 
                            style={{ width: `${getRandomWidth()}px`, maxWidth: '300px' }} // Устанавливаем maxWidth
                        >
                            {award}
                        </div>
                    ))}
                </div>
        </div>
    );
};

export default Aiming;