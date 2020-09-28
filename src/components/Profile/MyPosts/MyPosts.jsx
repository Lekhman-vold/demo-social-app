import React from 'react';
import styles from './MyPosts.module.css';
import Post from '../Post/Post';
import {Field, reduxForm} from "redux-form";
import {required, maxLengthCreator, minLengthCreator} from "../../../utils/validators/validator";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength = maxLengthCreator(20);
const minLength = minLengthCreator(8);

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name="newPostText"
                       placeholder={"Add text"}
                       validate={[required, maxLength, minLength]}/>
            </div>
            <div>
                <button className="btn btn-dark">Add post</button>
            </div>
        </form>
    )
};

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)

const MyPosts = React.memo(props => {

        let postsElements = props.posts
            .map(post => <Post key={post.id} message={post.message} like={post.like}/>)

        let onAddPost = (values) => {
            props.addPost(values.newPostText);
        }

        return (
            <div className={styles.postsBlock}>
                <h3>my post</h3>
                <AddNewPostFormRedux onSubmit={onAddPost}/>
                <div className={styles.posts}>
                    {postsElements}
                </div>
            </div>
        )
    }
)
export default MyPosts;