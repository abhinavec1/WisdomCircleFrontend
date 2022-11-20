import React from "react";
import styles from "./Sidebar.module.scss"
import { MainIcon, MoreTextIcon, ChildIcon } from "../../utils/svg";

export const SideBar = () => {
    return (
        <React.Fragment>
            <div className={styles["main-icon"]}>
                <MainIcon className={styles["icon-content"]}/>
            </div>
            <div className={styles.bottom}>
            <ChildIcon className={styles["child-icon"]}/>
                <div className={styles.content}>
                    <div className={styles.subheading}> Welcome back!</div>
                    <div className={styles.description}>
                        Sign In to find opportunities that match your interests. We have both part-time and full-time roles that can be done online and in-person.
                    </div>
                    <MoreTextIcon />
                    <div className={styles.footer}>
                        Please contact us at +91-9380644532 if you need any assistance.
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}