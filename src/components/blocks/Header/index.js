import React, {useEffect, useState} from 'react';
import styles from "./Header.module.scss"
import {Dropdown} from "antd";
import Container from "../../UI/Container";
import {UnorderedListOutlined} from "@ant-design/icons";

const items = [
    {
        key: '1',
        label: (
            <a href={"#awards"} className={styles.burgerItem}>ABOUT US</a>
        ),
    },
    {
        key: '2',
        label: (
            <a href={"#categories"} className={styles.burgerItem}>OUR HISTORY</a>
        ),
    },
    {
        key: '3',
        label: (
            <a href={"#rules"} className={styles.burgerItem}>OUR CORE VALUES</a>
        ),
    },
    {
        key: '4',
        label: (
            <a href={"#rules"} className={styles.burgerItem}>HOW IT OPERATES</a>
        ),
    },
    {
        key: '5',
        label: (
            <a href={"#rules"} className={styles.burgerItem}>AWARDS</a>
        ),
    },
    {
        key: '6',
        label: (
            <a href={"#rules"} className={styles.burgerItem}>RULES</a>
        ),
    },
    {
        key: '7',
        label: (
            <a href={"https://filmfreeway.com/bestdirectorawards"} className={styles.burgerItem}>SUBMIT NOW</a>
        ),
    },
];

const Index = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (

        <div className={`${styles.headerWrapper} ${scrolled ? styles.scrolled : ""}`} >
            <Container>
            <div className={styles.inner}>
                <a href={"/"} className={styles.logo}>
                    <img src={"/images/logo.png"}/>
                </a>
                <div className={styles.headerItems}>
                    <a href={"#awards"} className={styles.headerItem}>ABOUT US</a>
                    <a href={"#categories"} className={styles.headerItem}>OUR HISTORY</a>
                    <a href={"#rules"} className={styles.headerItem}>OUR CORE VALUES</a>
                    <a href={"#rules"} className={styles.headerItem}>HOW IT OPERATES</a>
                    <a href={"#rules"} className={styles.headerItem}>AWARDS</a>
                    <a href={"#rules"} className={styles.headerItem}>RULES</a>
                    <a href={"https://filmfreeway.com/bestdirectorawards"} className={styles.headerItem}>SUBMIT NOW</a>
                </div>
                <div className={styles.burger}>
                    <Dropdown
                        menu={{
                            items,
                        }}
                        placement="bottomRight"
                    >
                        <UnorderedListOutlined style={{color: "#FFF"}} />
                    </Dropdown>
                </div>
            </div>
            </Container>


        </div>
    );
};

export default Index;