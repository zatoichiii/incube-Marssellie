import React from 'react';
import styles from "./AwardsnCat.module.scss"
import Container from "../../UI/Container";

const Aiming = () => {
    return (

        <div className={styles.wrapper} id={"awards"}>
            <Container>
            <div className={styles.inner}>
                <div className={styles.title}>
                   <span className={styles.red}>Awrds</span>  And <span className={styles.red}>Categories</span>  
                </div>
                
                <div className={styles.nom}>Nominations:</div>
                <div className={styles.text}>
                • Best Short Film <br></br>
                • Best Documentary <br></br>
                • Best Animation and Best Music Video <br></br>
                • Best Screenplay (as a screenplay, not produced) <br></br>
                </div>
                <div className={styles.winners}>The winners of the screenplay competition will be offered for production to professional and student filmmakers, unless they decide to make the movie themselves.</div>
                
            </div>
            </Container>
        </div>
    );
};

export default Aiming;
