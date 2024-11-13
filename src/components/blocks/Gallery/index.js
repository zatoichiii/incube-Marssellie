import Container from "../../UI/Container";
import Show from "../../UI/Show";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; // Импорт стилей навигации
import styles from "./Gallery.module.scss"; // Ваши стили должны быть после стилей Swiper

// Импорт необходимых модулей
import { Grid, Navigation } from 'swiper/modules';

const About = () => {
    const swiperRef = React.useRef(null); // Создаем реф для Swiper

    return (
        <div className={styles.body} id={"gallery"}>
            <Container>
                <div className={styles.stoproc}>
                    <div className={styles.title}>Our <b>Gallery</b></div>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        navigation={{
                            nextEl: '.custom-next', // Указываем класс для кнопки "Следующий"
                            prevEl: '.custom-prev', // Указываем класс для кнопки "Предыдущий"
                        }} // Включить навигацию
                        modules={[ Navigation]} // Включить модуль навигации
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
                        onInit={(swiper) => {
                            swiperRef.current = swiper; // Сохраняем ссылку на Swiper
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
                    {/* Пользовательские кнопки навигации */}
                    <div className={styles.buttonsContainer}>                    
                    <div className={styles.customPrev} onClick={() => swiperRef.current.slidePrev()}>←</div>
                    <div className={styles.customNext} onClick={() => swiperRef.current.slideNext()}>→</div>
                    </div>

                </div>
            </Container>
        </div>
    );
};

export default About;