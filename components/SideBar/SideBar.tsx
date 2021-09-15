import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "../../styles/SideBar.module.css";
import { faCog } from "@fortawesome/free-solid-svg-icons";

const SideBar = ({user} : {user:any}) => {

    console.log(user);

    return (
        <div className={styles.side}>
            <div className={styles.section1}>
                <div className={`${styles.border_profile} ${styles.block}`}>
                    <img
                        src={user?.photoURL}
                        className={"rounded-circle shadow-4 " + styles.avatar}
                        alt="profile image"
                        />
                    <h5 className={""}>{user?.displayName}</h5>
                </div>
                <div className={styles.item}>
                    <div className={styles.block}>My Day</div>
                    <div className={styles.block}>Important</div>
                </div>
                <div className={"separator"}>
                    <p>Your lists</p>
                    <span></span>
                </div>
                <div className={styles.item}>
                    <div className={styles.block}>A very good list</div>
                    <div className="w-100 ps-4 pe-4">
                        <button className="btn btn-primary">Add list</button>
                    </div>
                </div>
                <div className={styles.settings}>
                    <div className={"separator"}><span></span></div>
                    <div className={styles.block}>
                        <p>SETTINGS</p>
                        <FontAwesomeIcon icon={faCog}/>
                    </div>
                </div>
            </div>
            <div className={styles.section2}>
                <div className={`${styles.border_profile} ${styles.block}`}>
                    <img
                        src="https://mdbootstrap.com/img/new/avatars/1.jpg"
                        className={"rounded-circle shadow-4 " + styles.avatar}
                        alt="profile image"
                        />
                    </div>
                <div className={styles.item}>
                    <div className={styles.block}>M</div>
                    <div className={styles.block}>I</div>
                </div>
                <div className={"separator"}>
                    <p>YL</p>
                    <span></span>
                </div>
                <div className={styles.item}>
                    <div className={styles.block}>A</div>
                    <div className="w-100 ps-xl-4 pe-xl-4">
                        <button className="btn btn-primary">+</button>
                    </div>
                </div>
                <div className={styles.settings}>
                    <div className={"separator"}><span></span></div>
                    <div className={styles.block}>
                        <FontAwesomeIcon icon={faCog}/>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default SideBar;