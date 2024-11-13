import React, { useState, useRef } from 'react';
import styles from "./RulesTerms.module.scss";
import { Button } from 'antd';
import Container from "../../UI/Container";

const RulesTerms = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [showAll, setShowAll] = useState(false); // State to control showing all questions
    const contentRefs = useRef([]);

    const questionsAndAnswers = [
        {
            question: "What is the evaluation process?",
            answer: "Submissions will be assessed based on screenplay quality (story, dialogue, character development, etc.), acting, production value, originality, technical proficiency, cinematography, sound design, editing, locations, and set design. Extra points will be awarded to low-budget independent productions with small crews."
        },
        {
            question: "How will selected shorts be screened?",
            answer: "Selection and award results will be posted on our website. Incube de Marseille offers awards to over 40 films per season, but can only screen a selection during the festival."
        },
        {
            question: "What is the exhibition format?",
            answer: "If your short is selected for screening, we will contact you for an exhibition file."
        },
        {
            question: "Are there any fee waivers?",
            answer: "We strive to keep entry fees low and cannot provide fee waivers."
        },
        {
            question: "How will communications be handled?",
            answer: "All notifications will be sent through FilmFreeway. Ensure your email address is up-to-date."
        },
        {
            question: "What are the original work requirements?",
            answer: "All submissions must be original works with rights fully secured by the filmmakers. The festival is not liable for any copyright issues."
        },
        {
            question: "What are the submission language requirements?",
            answer: "All films must be in English or French or have English subtitles. Submissions in other languages without English subtitles will not be screened."
        },
        {
            question: "What are the eligibility requirements?",
            answer: "Films must have been produced no earlier than 2022. Premiere status is not required. Accepted films must provide a digital screening file (.mov, .mp4) if requested. Entry fees are non-refundable, per festival policy."
        },
        {
            question: "What submission categories are accepted?",
            answer: "We accept submissions for Short films (up to 40 minutes), Feature films (up to 125 minutes), and Screenplays. Each submission requires a separate entry fee, which is non-refundable."
        },
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const handleShowAll = () => {
        setShowAll(!showAll);
    };

    return (
        <div className={styles.wrapper} id={"rules"}>
            <Container>
                <div>
                    <h2 className={styles.title}>Rules and Submission Guidelines</h2>
                    {questionsAndAnswers.slice(0, showAll ? questionsAndAnswers.length : 4).map((item, index) => (
                        <div key={index} className={styles.accordion}>
                            <div className={styles.header} onClick={() => toggleAccordion(index)}>
                                <div className={styles.question}>{item.question}</div>
                                <span className={`${styles.icon} ${openIndex === index ? styles.open : ''}`}>
                                    {openIndex === index ? '-' : '+'}
                                </span>
                            </div>
                            <div 
                                ref={el => contentRefs.current[index] = el}
                                className={`${styles.answer} ${openIndex === index ? styles.open : ''}`}
                                style={{ height: openIndex === index ? `${contentRefs.current[index].scrollHeight}px` : '0' }} 
                            >
                                {item.answer}
                            </div>
                            <div className={styles.divider}></div> 
                        </div>
                    ))}
                    <Button onClick={handleShowAll} className={styles.showAllButton}>
                        {showAll ? 'Hide' : 'Show All'}
                    </Button>
                </div>
            </Container>
        </div>
    );
};

export default RulesTerms;