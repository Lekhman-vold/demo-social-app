import React from "react";
import styles from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={styles.dialog + ' ' + styles.activeLink}>
            <img src="https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg" />
            <NavLink to={path} activeClassName={styles.activeLink}>{props.name}</NavLink>
        </div>
    )
};

export default DialogItem;