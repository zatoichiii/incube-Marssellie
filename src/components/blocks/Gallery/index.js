import React from 'react';
import styles from "./Gallery.module.scss"
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Scrollbar} from "swiper/modules";
import {useWindowSize} from "../../../utils/useWindowSize";
import "swiper/css"
import "swiper/css/scrollbar"
import Container from "../../UI/Container";

const Gallery = () => {
    const windowWidth = useWindowSize().width;
    return (
        <Container >
        <div className={styles.wrapper}>

                <div className={styles.title}>
                    Award Gallery
                </div>
                <div className={styles.description}>
                    Enjoy one of the best film and short film festivals taking place in Cannes. Indie short film brings you a unique and exciting event where you will enjoy the best selection of short films worldwide in its different categories
                </div>
            {windowWidth > 1200 ?
                <div className={styles.photoWrapper}>
                    <img src={"/images/slider/0.jpg"}  className={`${styles.photo} ${styles.photo0}`}/>
                    <img src={"/images/slider/1.jpg"}  className={`${styles.photo} ${styles.photo1}`}/>
                    <img src={"/images/slider/5.jpg"}  className={`${styles.photo} ${styles.photo2}`}/>
                    <img src={"/images/slider/3.jpg"}  className={`${styles.photo} ${styles.photo3}`}/>
                    <img src={"/images/slider/4.jpg"}  className={`${styles.photo} ${styles.photo4}`}/>
                    <img src={"/images/slider/6.jpg"}  className={`${styles.photo} ${styles.photo5}`}/>
                </div>
                :
                <div className={styles.slider}>
                    <Swiper
                        navigation
                        modules={[Autoplay, Scrollbar]}
                        pagination={{ clickable: true }}

                        spaceBetween={30}
                        slidesPerView={windowWidth > 992 ? 3 : windowWidth > 768 ? 2 : 1}
                    >
                        <SwiperSlide >
                            <img className={styles.sliderImage} src={"/images/slider/0.jpg"}/>
                        </SwiperSlide>
                        <SwiperSlide >
                            <img className={styles.sliderImage} src={"/images/slider/1.jpg"}/>
                        </SwiperSlide>
                        <SwiperSlide >
                            <img className={styles.sliderImage} src={"/images/slider/2.jpg"}/>
                        </SwiperSlide>
                        <SwiperSlide >
                            <img className={styles.sliderImage} src={"/images/slider/3.jpg"}/>
                        </SwiperSlide>
                        <SwiperSlide >
                            <img className={styles.sliderImage} src={"/images/slider/4.jpg"}/>
                        </SwiperSlide>
                        <SwiperSlide >
                            <img className={styles.sliderImage} src={"/images/slider/5.jpg"}/>
                        </SwiperSlide>
                        <SwiperSlide >
                            <img className={styles.sliderImage} src={"/images/slider/6.jpg"}/>
                        </SwiperSlide>
                        <SwiperSlide >
                            <img className={styles.sliderImage} src={"/images/slider/7.jpg"}/>
                        </SwiperSlide>
                        <SwiperSlide >
                            <img className={styles.sliderImage} src={"/images/slider/8.jpg"}/>
                        </SwiperSlide>
                        <SwiperSlide >
                            <img className={styles.sliderImage} src={"/images/slider/9.jpg"}/>
                        </SwiperSlide>
                    </Swiper>
                </div>
            }


        </div>
        </Container>
    );
};

export default Gallery;