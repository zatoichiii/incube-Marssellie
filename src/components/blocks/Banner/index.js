import React, { useRef, useEffect } from 'react';
import styles from "./Banner.module.scss";
import Container from "../../UI/Container";
import Show from '../../UI/Show';

const Banner = () => {
    const videoRef = useRef(null); 

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.7; 
        }
    }, []);

    return (
        <div className={styles.wrapper}>
            <video ref={videoRef} autoPlay muted loop className={styles.backgroundVideo}>
            <source src="/images/banner/bgvideo.mp4" type="video/mp4" />

                Ваш браузер не поддерживает видео.
            </video>
            <Container>
                <div className={styles.inner}>
                <Show>
                    <div className={styles.info}>
                        <div className={styles.title}>
                            <b> Incube de Marseille Film Festival</b>
                        </div>
                        <div className={styles.subTitle}>
                            A festival that champions both emerging and experienced independent filmmakers. Incube serves as a true "incubator" for fresh ideas and unique stories, providing a space for voices free from Hollywood conventions to thrive.
                        </div>
                        <a href={'https://filmfreeway.com/marseillefestivalIncube'} className={styles.button}>
                            <p className={styles.textSubmit}>Submit Your Work</p>
                        </a>
                    </div>
                </Show>
                </div>
            </Container>
        </div>
    );
};

export default Banner;

