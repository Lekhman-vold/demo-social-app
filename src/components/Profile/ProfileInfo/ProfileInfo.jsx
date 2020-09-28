import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import LogoPng from "../../../assets/img/User.svg"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";

    const ProfileInfo = (props) => {

        let [editMode, setEditMode] = useState(false);

        if (!props.profile) {
            return <Preloader/>
        }

    const mainPhotoSelected = (event) => {
        if (event.target.files.length) {
            props.savePhoto(event.target.files[0])
        }
    };

    const onSubmit = (formData) => {
            props.saveProfile(formData).then(
                () => {setEditMode(false)}
            )
    };

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large || LogoPng}/>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                {editMode
                    ? <ProfileDataForm initialValues={props.profile} profile={props.profile}
                                       onSubmit={onSubmit}/>
                    : <ProfileData profile={props.profile}
                                   isOwner={props.isOwner}
                                   gotoEditMode={() => {setEditMode(true)}}
                    />}
                {props.isOwner && <input className="form-control bg-dark"  type={"file"} onChange={mainPhotoSelected}/>}
            </div>
        </div>
    )
};

const ProfileData = ({profile, isOwner, gotoEditMode}) => {
        return (
            <div className={s.textBold}>
                {isOwner && <div>
                    <button onClick={gotoEditMode}  className="btn btn-dark">edit</button>
                </div>}
                <div> FullName: {profile.fullName}</div>
                <div>
                    Looking for a job: {profile.lookingForAJob ? "Yes" : "No"}
                </div>
                {profile.lookingForAJob &&
                <div>
                    My professional skills: {profile.lookingForAJobDescription}
                </div>
                }
                <div>
                    About me: {profile.aboutMe}
                </div>
            </div>
        )
};

export default ProfileInfo;