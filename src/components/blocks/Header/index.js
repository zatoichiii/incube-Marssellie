import React from 'react';
import styles from "./Header.module.scss"
import {Dropdown} from "antd";
import Container from "../../UI/Container";
import {UnorderedListOutlined} from "@ant-design/icons";

const items = [
    {
        key: '1',
        label: (
            <a href={"#awards"} className={styles.burgerItem}>Awards</a>
        ),
    },
    {
        key: '2',
        label: (
            <a href={"#categories"} className={styles.burgerItem}>Categories</a>
        ),
    },
    {
        key: '3',
        label: (
            <a href={"#rules"} className={styles.burgerItem}>Rules and Terms</a>
        ),
    },
    {
        key: '4',
        label: (
            <a href={"https://filmfreeway.com/bestdirectorawards"} className={styles.burgerItem}>Submit Now</a>
        ),
    },
];

const Index = () => {
    return (

        <div className={styles.headerWrapper}>
            <Container>
            <div className={styles.inner}>
                <a href={"/"} className={styles.logo}>
                    <img src={"/images/logo.png"}/>
                    <div className={styles.logoName}>
                        Best Director & Filmmaker Awards
                    </div>
                </a>
                <div className={styles.headerItems}>
                    <a href={"#awards"} className={styles.headerItem}>Awards</a>
                    <a href={"#categories"} className={styles.headerItem}>Categories</a>
                    <a href={"#rules"} className={styles.headerItem}>Rules and Terms</a>
                    <a href={"https://filmfreeway.com/bestdirectorawards"} className={styles.headerItem}>Submit Now</a>
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