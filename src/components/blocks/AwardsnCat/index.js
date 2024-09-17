import React from 'react';
import styles from "./AwardsnCat.module.scss"
import Container from "../../UI/Container";
import Show from '../../UI/Show';

const Aiming = () => {
    return (

        <div className={styles.wrapper} id={"categories"}>

            <Container>
            <div className={styles.inner}>
            <Show initialX={-100}>

                <div className={styles.title}>
                   <span className={styles.red}>Awrds</span>  And <span className={styles.red}>Categories</span>  
                </div>
                
                <div className={styles.nom}>The Certificate Awards are given in the following categories:</div>
                <div className={styles.text}>
                • Best Feature Film <br></br>
                • Best Short Film <br></br>
                • Best Documentary <br></br>
                • Best Cinematography <br></br>
                • Best Screenplay <br></br>
                • Best Animation <br></br>
                </div>
            </Show>
                
            </div>
            </Container>

        </div>
    );
};

export default Aiming;
