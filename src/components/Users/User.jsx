import React from "react";
import styles from './users.module.css';
import Us from '../../assets/img/Us.jpg';
import {NavLink} from "react-router-dom";

const User = ({user, ...props}) => {
    return (
        <div>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                                <img src={user.photos.small != null ? user.photos.small : Us}
                                     className={styles.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {user.followed
                                ? <button  disabled={props.followingInProgress
                                    .some(id => id === user.id)}
                                          onClick={() => {props.unfollow(user.id)}}
                                           className="btn btn-dark">
                                    Unfollow</button>

                                : <button disabled={props.followingInProgress
                                    .some(id => id === user.id)}
                                          onClick={() => {props.follow(user.id)}}
                                          className="btn btn-outline-dark">
                                    Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{user.id}</div>
                        </span>
                    </span>
                </div>)
            }

export default User;