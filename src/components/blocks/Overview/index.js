import React from 'react';
import styles from "./Overview.module.scss"

import Container from "../../UI/Container";





const Overview = () => {
    return (

        <div className={styles.wrapper} id={"history"}>
            <Container>
                <div className={styles.container}>
                    <div className={styles.slider}>
                        <img src={"/images/ourHistory/camera.png"}/>
                    </div>
                    <div className={styles.text}>
                        <div className={styles.title}>
                            Our <b>History</b>
                        </div>
                        <div className={styles.description}>
                            While <b>"Level Up"</b> is embarking on its inaugural year in 2024, we are already brimming with excitement about the creative ingenuity and fresh perspectives our participants will bring to the forefront. Our festival aspires to emerge as a pivotal event in the global cinematic landscape, introducing you to the future luminaries of this dynamic industry.
                        </div>
                    </div>

                </div>
            </Container>
        </div>
    );
};

export default Overview;