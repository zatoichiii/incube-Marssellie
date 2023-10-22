import React, {useState} from 'react';
import styles from "./RulesTerms.module.scss"
import { Button, Modal } from 'antd';
import Container from "../../UI/Container";

const RulesTerms = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className={styles.wrapper} id={"rules"}>
            <Container>
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
                    <p>1.
                    We accept all genre in any language, from around the world.
                    </p>
                    <p>2.
                    All films must be in English or have subtitles in English.
                    </p>
                    <p>3.
                    Preference will be given to films that are not yet published online.
                    </p>
                    <p>4.
                    Online Submissions accepted exclusively via FilmFreeway.
                    </p>
                    <p>5.
                    All entry fees are in U.S. Dollars, per film and non-refundable.
                    </p>
                    <p>6.
                    The festival does not grant submission waiver. We believe in equal opportunity and we just don’t think it is fair for a project to equally compete entering with a submission waiver, with the filmmakers who made an effort to pay the submission fee.
                    </p>
                    <p>7.
                    Entries must be submitted no later than the deadline listed.
                    </p>
                    <p>8.
                    You are the copyright owner or producer.
                    </p>
                    <p>9.
                    You have the right to enter the movie in the festival.
                    </p>
                    <p>10.
                    The movie does not infringe upon the copyrights, trademarks, contract rights, or any other intellectual property rights of any third person or entity, or violate any person’s rights of privacy or publicity.                    </p>
                    <p>11.
                    The festival does not pay for mailing/shipping costs.
                    </p>
                    <p>12.
                    The festival does not pay screening fees.
                    </p>
                    <p>13.
                    The festival does not return DVD copies and/or any other materials (such as stills, media kits or posters).                    </p>
                    <p>14.
                    If your film is selected, we request the “Festival Screener File” to be sent via Google Drive/DropBox or other File Transfer Method. It is safer and faster than mailing packages.
                    </p>
                    <p>15.
                    The cost of shipping all entries and films to the festival must be paid by the entrant. The festival will not pay the cost of shipping the film back to the filmmaker. The festival will not be responsible for expedited or overnight shipping charges to other organizations. All international entries must be sent to the Level Up  Sydney Student Film Festival with all transportation charges, duties, and taxes prepaid by the shipper.
                    </p>
                    <p>16.
                    The festival will not pay any customs' duties that could be incurred if you are mailing your disks via courier service. If you are using a courier service, make sure to mark that all customs' duties are paid by 'Sender' in order to avoid having your package returned to you.
                    </p>
                    <p>17.
                    After a film has been an official selection, the filmmaker will be notified, and the film will be listed on the festival's website under official selections.
                    </p>
                    <p>18.
                    If selected, the festival will require an Electronic Press Kit to include high-resolution production stills, key art, bio and filmography of the director, production notes and full cast and crew credits.
                    </p>
                    <p>19. 
                    Once a film has been selected it cannot be withdrawn from the festival program.
                    </p>
                    <p>20. 
                    Do not send originals or master prints, tapes, files or drives.
                    </p>
                    <p>21.
                    Please keep the festival notified of any address/phone number changes.
                    </p>
                    <p>22.
                    The festival is hereby granted the rights to utilize excerpts from any film submitted for promotional purposes of the festival. The individual or corporation submitting the film hereby warrants that it is authorized to commit the film for screening, and understands and accepts these requirements, rules and regulations.
                    </p>
                    <p>23.
                    The festival reserves the right to use any promotional materials you send us (such as stills, posters, trailers, reviews, interviews, etc.) for marketing, publishing and broadcast purposes of the festival.
                    </p>
                    <p>24.
                    You agree to participate in related publicity and to the use of your name and participation images for the purposes of advertising, promotion and publicity for the festival.
                    </p>
                    <p>25.
                    The festival promotes the schedule of screenings via online and offline media. The festival encourages filmmakers to help promote their films by promoting their screenings to industry professionals, distributors, the press and the general public.
                    </p>
                    <p>26.
                    The festival assumes no responsibility for any incorrect, inaccurate or incomplete information, whether caused by website users or by any of the equipment or programming associated with or utilized in the competition, and the festival assumes no responsibility for technical, hardware or software failure of any kind, for lost network connections, garbled computer transmissions, other problems or technical malfunctions with regard to the competition. The festival assumes no responsibility for any error, omission, corruption, interruption, deletion, defect, delay in operation or transmission, communications line failure, theft or destruction or unauthorized access to or alteration of entries. The festival is not responsible for any problems or technical malfunction of any telephone network or lines, computer on-line systems, servers, computer equipment, software, failure of any e-mail addressed to the festival on account of technical problems, human error or traffic congestion on the internet or any website, or any combination thereof, including any injury or damage to your or any other person's computer related to or resulting from participation or downloading any materials in the competition. If for any reason a contestant’s work cannot be viewed or is not capable of running as planned, including infection by computer viruses, bugs, tampering, unauthorized intervention, fraud or technical failures, the festival assumes no responsibility.
                    </p>
                    <p>27.
                    In no event will the festival, its members, event partners or its officers, directors, employees, be responsible or liable for any damages or losses of any kind, including direct, indirect, incidental, consequential, special or punitive damages arising out of any contestant’s access to and use of the website and participation in the competition.
                    </p>
                    <p>
                    By entering the competition you hereby accept these competition rules.
                    </p>
                </Modal>
                </div>
            </Container>
            
        </div>
    );
};

export default RulesTerms;
