
import React from "react";
import styles from "../assets/Modal.module.css";

const Modal = ({ setIsOpen, isOpen }) => {
    console.log(isOpen)
    return (
        <>
            <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
            <div className={styles.centered}>
                <div className={styles.modal}>
                    <header className={styles.modalHeader}>
                        <h5 className={styles.heading}>{isOpen}</h5>
                    </header>
                    <body>
                        <body>
                            <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
                                <p style={{ marginBottom: "-3px" }} >X</p>
                            </button>
                            <div className={styles.modalContent}>
                                Are you sure you want to delete the item?
                            </div>
                        </body>
                    </body>
                    <footer className={styles.modalActions}>
                        <div>
                            <input type="checkbox" name="only-even" id="only-even" />
                            <label style={{ color: 'black' }} htmlFor="only-even">Only Even</label>
                        </div>
                        <div className={styles.actionsContainer}>
                            <button className={styles.deleteBtn} onClick={() => setIsOpen(false)}>
                                All Contacts
                            </button>
                            <button
                                className={styles.usBtn}
                                onClick={() => setIsOpen(false)}
                            >
                                US Contacts
                            </button>
                            <button
                                className={styles.cancelBtn}
                                onClick={() => setIsOpen(false)}
                            >
                                Close
                            </button>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
};

export default Modal;