import React from 'react';
import './post-action.css';


const PostAction = (props) => {

    let postMessage = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let onPostTextChange = () => {
        let text = postMessage.current.value;
        props.updatePostText(text);
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
