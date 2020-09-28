import React from "react";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import s from "./ProfileInfo.module.css"
import style from "../../common/FormsControls/FormsControls.module.css";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div><button className="btn btn-dark" >save</button></div>
            {error && <div className={style.formErrorControl}>
                {error}
            </div>}
            <div className={s.textBold}>
                <div> FullName: {createField("Full name", "fullName", [], Input)}</div>
                <div>
                    Looking for a job:
                    {createField("", "lookingForAJob", [], Input, {type: "checkbox"})}
                </div>

                <div>
                    My professional skills:
                    {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
                </div>

                <div>
                    About me:
                    {createField("About me", "aboutMe", [], Textarea)}
                </div>
            </div>
        </form>
    )
};

const ProfileDataFormRedux = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormRedux;