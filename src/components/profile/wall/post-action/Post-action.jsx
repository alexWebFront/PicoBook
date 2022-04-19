import React from 'react';
import './post-action.css';
import { addPostActionCreator, onPostTextChangeActionCreator } from '../../../../redux/state';

const PostAction = (props) => {
    let postMessage = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostTextChange = () => {
        let text = postMessage.current.value;
        props.dispatch(onPostTextChangeActionCreator(text));
    }

    return <>
        <div className="posts__action">
            <textarea ref={postMessage} className="posts__field" placeholder='Durov, return the wall...'
                onChange={onPostTextChange}
                value={props.newPostText} />
            <button onClick={addPost} className="posts__send button-primary button">Тык!</button>
        </div>
    </>
}

export default PostAction;
