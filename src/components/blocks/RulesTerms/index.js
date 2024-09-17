import React, {useState} from 'react';
import styles from "./RulesTerms.module.scss"
import { Button, Modal } from 'antd';
import Container from "../../UI/Container";
import Show from '../../UI/Show';

const RulesTerms = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className={styles.wrapper} id={"rules"}>
            <Container>
            <Show initialX={100}>
            
            <div className={styles.inner}>
                <div className={styles.title}>
                <span className={styles.red}>Rules</span> And <span className={styles.red}>Terms</span>
                </div>
                <div className={styles.description}>
                    All entries submitted to “Level Up” - Sydney Student International Film Festival must adhere to the following guidelines. By submitting a film for consideration, the entrant / submitter / moviemaker / controlling company agrees to abide by these rules and terms.
                </div>
            
            <div className={styles.buttonBlock}>
                    <Button className={styles.button} type="primary" onClick={()=>setIsModalOpen(!isModalOpen)}>
                        Show Rules
                    </Button>
                </div>
                <Modal
                    onCancel={()=>setIsModalOpen(!isModalOpen)}
                    footer={[
                        <Button className={styles.okButton} key="ok" onClick={()=>setIsModalOpen(!isModalOpen)}>
                            Ok
                        </Button>,
                    ]}
                    title="More"
                    open={isModalOpen}
                >
                    <p>1.1. All films must be submitted through the FilmFreeway platform.
                    </p>
                    <p>1.2. All submitted films must include English subtitles if the original language is not English.
                    </p>
                    <p>2.1. Short films must be no longer than 40 minutes, including credits.
                    </p>
                    <p>2.2. Feature films must be at least 60 minutes long, including credits.
                    </p>
                    <p>2.3. Student films must be submitted with proof of student status (student ID or a letter from the educational institution).
                    </p>
                    <p>3.1. Applicants must hold all rights to the film, including music and other copyrighted materials.
                    </p>
                    <p>3.2. By submitting a film, you grant the festival the right to screen it once during the festival program.
                    </p>
                    <p>3.3. The festival reserves the right to use excerpts from the films (not exceeding 2 minutes) for promotional purposes.
                    </p>
                    <p>4.1. All films will be reviewed by the festival selection committee.
                    </p>
                    <p>4.2. Films selected for participation will be announced no later than the notification date indicated on the FilmFreeway page.
                    </p>
                    <p>4.3. Applicants will be notified of the selection results via email.
                    </p>
                    <p>5.1. Categories and awards include:

Best Feature Film
Best Short Film
Best Documentary
Best Director
Best Cinematography
Best Screenplay
Best Animation

                    </p>
                    <p>5.2. Winners will be announced at the notification date via email.

                    </p>
                    <p>6.1. Festival participants must comply with all laws and regulations in Hong Kong.

                    </p>
                    <p> 6.2. Any inappropriate behavior may result in disqualification and removal from the event.

                    </p>
                    <p>7.1. Submission fees are final and non-refundable.


                    </p>
                    <p>8.1. For any questions or inquiries, please contact us at:

Email: hongkonglightsfestival@gmail.com
Or visit website: hongkonglightsfestival.com

                    </p>
                    <p>9.1. The festival reserves the right to make changes to the rules and program without prior notice.

                    </p>
                    <p>9.2. All decisions made by the selection committee and jury are final and not subject to appeal.
                    </p>
                </Modal>
                </div>
                </Show>
            </Container>
        </div>
    );
};

export default RulesTerms;
