import React, {useEffect, useState} from 'react';
import styles from "./Overview.module.scss"
import {Button} from "antd";
import {Autoplay, Scrollbar, EffectCoverflow} from "swiper/modules";
import {Swiper , SwiperSlide} from "swiper/react";

import "swiper/css"
import "swiper/css/scrollbar"
import "swiper/css/effect-coverflow"
import Container from "../../UI/Container";
import {useWindowSize} from "../../../utils/useWindowSize";





const Overview = () => {
    const windowWidth = useWindowSize().width;
    return (

        <div className={styles.wrapper}>
            <Container>
                <div className={styles.container}>
                    <div className={styles.text}>
                        <div className={styles.title}>
                            Our Mission
                        </div>
                        <div className={styles.description}>
                            Is to acknowledge outstanding talent and unwavering dedication in the realms of film directing, performance, and filmmaking within the independent cinema landscape. From a year's worth of exceptional entries, only the most exceptional films will earn a coveted spot in the annual screening event in Vancouver.
                        </div>
                        <a href={'https://filmfreeway.com/bestdirectorawards'} className={styles.button}>
                            <img src={"/images/FFButtons/gold.png"}/>
                        </a>
                    </div>
                    <div className={styles.slider}>
                        <Swiper
                            navigation
                            modules={[Autoplay, Scrollbar, EffectCoverflow]}
                            pagination={{ clickable: true }}
                            effect={"coverflow"}
                            coverflowEffect={{
                                rotate: 50,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: false
                            }}
                            spaceBetween={windowWidth > 920 ? 0 : 30}
                            slidesPerView={windowWidth > 920 ? 3 : 1}
                            centeredSlides={windowWidth > 920}
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
                </div>
            </Container>
        </div>
    );
};

export default Overview;