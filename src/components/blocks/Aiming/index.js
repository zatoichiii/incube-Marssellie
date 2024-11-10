import React, { useRef, useEffect } from 'react';
import styles from "./Aiming.module.scss";
import Container from "../../UI/Container";

const Aiming = () => {
    const videoRef = useRef(null); 

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.7; 
        }
    }, []);

    return (
        <div className={styles.wrapper}>
            <video ref={videoRef} autoPlay muted loop className={styles.backgroundVideo}>
                <source src="/images/banner/bg2.mp4" type="video/mp4" />
                Ваш браузер не поддерживает видео.
            </video>
            <Container>
                <div className={styles.inner}>
                    <div className={styles.title}>
                        Contact <b>Us</b>!
                    </div>
                    <div className={styles.contact}>
                        <a href="mailto:marseillefestival@gmail.com" className={styles.email}>
                            marseillefestival@gmail.com
                        </a>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Aiming;