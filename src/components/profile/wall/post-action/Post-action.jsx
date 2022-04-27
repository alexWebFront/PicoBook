import React from 'react';
import './post-action.css';
import { addPostActionCreator, onPostTextChangeActionCreator } from '../../../../redux/profile-reducer';

const PostAction = (props) => {
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostTextChange = (e) => {
        let text = e.target.value;
        props.dispatch(onPostTextChangeActionCreator(text));
    }

    return <>
        <div className="posts__action">
            <textarea  className="posts__field" placeholder='Durov, return the wall...'
                onChange={onPostTextChange}
                value={props.newPostText} />
            <button onClick={addPost} className="posts__send button-primary button">Тык!</button>
        </div>
    </>
}

export default PostAction;
