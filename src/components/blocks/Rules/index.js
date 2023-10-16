import React, {useState} from 'react';
import styles from "./Rules.module.scss"
import { Button, Modal } from 'antd';
import Container from "../../UI/Container";

const Rules = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <Container>
            <div className={styles.wrapper} id={"rules"}>

                    <div className={styles.title}>Rules and Terms</div>
                <div className={styles.text}>
                    All entries submitted to The Best Director & Filmmaker Awards – Vancouver must adhere to the following guidelines. By submitting a film for consideration, the entrant/submitter/ moviemaker/controlling company agrees to abide by these rules and terms.

                </div>
                <div className={styles.buttonBlock}>
                    <Button className={styles.button} type="primary" onClick={()=>setIsModalOpen(!isModalOpen)}>
                        Show Rules and Terms
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
                    <p>1. Eligibility
                        Filmmakers from any country may participate in this competition. Entrants under the age of 18 must obtain parental consent. Films of any length are accepted, but all dialogue must be in English or have English subtitles.
                    </p>
                    <p>2. Submission Limit
                        Entrants may submit multiple entries for consideration. Selected entries will be screened during our Annual Screening Event in Vancouver. Note that we have limited screening time, and only a select number of films will be chosen.
                    </p>
                    <p>3. Production Date
                        There are no specific requirements regarding the production date or premiere status of films. Both old and new films are welcome.
                    </p>
                    <p>4. Resubmission
                        Previously entered films may be resubmitted if they have not previously won awards in past editions of The Best Director & Filmmaker Awards – Vancouver and have undergone significant changes since their last submission.
                    </p>
                    <p>5. Film Length
                        Ensure the accurate measurement of your film's length, including opening and closing credits. Improperly categorized films may be disqualified, and submission fees will not be refunded.
                    </p>
                    <p>6. Script Submissions
                        Scripts must be submitted in PDF format, following proper screenwriting formatting.
                    </p>
                    <p>7. Ownership and Rights
                        The entrant/submitter certifies that they have obtained all necessary rights, including image rights, talent releases, soundtrack permissions, and assume all responsibility for their material. The festival accepts no responsibility for submitted films.
                    </p>
                    <p>8. Script Ownership
                        All scripts should preferably have copyright protection before submission. The festival accepts no responsibility for submitted scripts.
                    </p>
                    <p>9. Feedback
                        Participants will not receive feedback. Entries will be judged based on script, directing, acting, technical, and artistic merits.
                    </p>
                    <p>10. Submission Format
                        The festival only accepts online screeners submitted through FilmFreeway.com.
                    </p>
                    <p>11. Refund Policy
                        Submission fees are non-refundable, especially after the adjudication process has begun or after the submission deadline.
                    </p>
                    <p>12. Materials Request
                        Nominees may be asked to provide trailers, cast and crew lists, posters, and headshots for promotional purposes. Participation in this request is voluntary.
                    </p>
                    <p>13. Promotional Rights
                        The festival reserves the right to use trailers and other materials for promotional purposes indefinitely. Submitters accept sole responsibility for this usage. (Upon written agreement with the participant.)
                    </p>
                    <p>14. Late Submissions
                        Late submissions will be considered for the next edition of the festival.
                    </p>
                    <p>15. Judging Discretion
                        All decisions made by the festival's judges are final. Additional awards may be presented if deemed appropriate.
                    </p>
                    <p>16. Announcement
                        Results of the festival will be made public on the official website.
                    </p>
                    <p>17. Professional Communication
                        All communication must be professional and respectful. Failure to do so may result in disqualification.
                    </p>
                    <p>18. Content Restrictions
                        Films containing explicit pornography, hate speech, racism, or obscenity may be disqualified. Mature content is accepted but must include a substantial story and production value.
                    </p>
                    <p>19. Rule Modifications
                        The festival reserves the right to add, modify, or remove rules and terms at any time. Such changes will be communicated if necessary.
                    </p>
                    <p>20. Dispute Resolution
                        Any disputes will be limited to the lesser of the submission fee paid or the cost of resolving the issue.
                    </p>
                    <p>21. Acceptance of Rules
                        Entrants/submitter/moviemaker/controlling company accept all rules and terms in their entirety. If they disagree, they should not submit their entry.
                    </p>
                    <p>By submitting an entry to The Best Director & Filmmaker Awards – Vancouver, entrants acknowledge that they have read, understood, agreed to, and will comply with all of the stated rules and terms.
                    </p>
                </Modal>
            </div>
        </Container>
    );
};

export default Rules;