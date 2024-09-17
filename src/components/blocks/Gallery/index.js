import styles from "./Gallery.module.scss"
import Container from "../../UI/Container";
import Show from "../../UI/Show";
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

// import required modules
import { Grid, Pagination } from 'swiper/modules';

const About = () => {
    return (
        <div className={styles.body} id={"gallery"}>
            <Container>
                <Show>
                    <div className={styles.title}>Our <b>Gallery</b></div>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 5,
                            },
                            480: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                        }}
                    >
                        <SwiperSlide><img className={styles.photo} src={"/images/1.jpg"}/></SwiperSlide>
                        <SwiperSlide><img className={styles.photo} src={"/images/2.jpg"}/></SwiperSlide>
                        <SwiperSlide><img className={styles.photo} src={"/images/3.jpg"}/></SwiperSlide>
                        <SwiperSlide><img className={styles.photo} src={"/images/4.jpg"}/></SwiperSlide>
                        <SwiperSlide><img className={styles.photo} src={"/images/5.jpg"}/></SwiperSlide>
                        <SwiperSlide><img className={styles.photo} src={"/images/6.jpg"}/></SwiperSlide>
                        <SwiperSlide><img className={styles.photo} src={"/images/7.jpg"}/></SwiperSlide>
                        <SwiperSlide><img className={styles.photo} src={"/images/8.jpg"}/></SwiperSlide>
                        <SwiperSlide><img className={styles.photo} src={"/images/9.jpg"}/></SwiperSlide>
                        <SwiperSlide><img className={styles.photo} src={"/images/10.jpg"}/></SwiperSlide>
                    </Swiper>
                </Show>
            </Container>
        </div>
    );
};

export default About;