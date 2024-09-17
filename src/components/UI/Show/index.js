import React, { useState, useEffect, useRef } from 'react';
import styles from "./Show.module.scss";

const Show = ({ children, initialX = -100, initialY = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const productRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        if (productRef.current) {
            observer.observe(productRef.current);
        }

        return () => {
            if (productRef.current) {
                observer.unobserve(productRef.current);
            }
        };
    }, []);

    const initialStyle = {
        opacity: 0,
        transform: `translate(${initialX}%, ${initialY}%)`,
    };

    const visibleStyle = {
        opacity: 1,
        transition: 'all 1s',
        transform: 'translate(0%, 0%)',
    };

    return (
        <div
            ref={productRef}
            className={styles.showWrapper}
        >
            <div style={isVisible ? visibleStyle : initialStyle}>
                {children}
            </div>
        </div>
    );
};

export default Show;
