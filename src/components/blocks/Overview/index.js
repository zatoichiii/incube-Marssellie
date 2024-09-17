import React from 'react';
import styles from "./Overview.module.scss"
import Container from "../../UI/Container";
import Show from '../../UI/Show';





const Overview = () => {
    return (

        <div className={styles.wrapper} id={"mission"}>
            <Container>
            <Show initialX={100}>
                <div className={styles.container}>
                    <div className={styles.slider}>
                        <img src={"/images/ourHistory/camera.png"}/>
                    </div>
                    <div className={styles.text}>
                        <div className={styles.title}>
                            Our <b>Mission</b>
                        </div>
                        <div className={styles.description}>
                        Our mission is <b>clear:</b>  to provide a platform where filmmakers from minority groups and diverse cultures can present their unique stories. We believe in the transformative power of film to challenge perceptions and inspire a more inclusive future. By bringing together an eclectic mix of voices, we aim to spark conversations that matter and to reflect the rich tapestry of human experience.
                        </div>
                    </div>

                </div>
                </Show>
            </Container>
        </div>
    );
};

export default Overview;