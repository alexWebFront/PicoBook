import React from 'react';
import './post-action.css';


const PostAction = (props) => {
    let postMessage = React.createRef();

    let addPost = () => {
        debugger;
        let text = postMessage.current.value;
        props.addPost(text);
    }

    return <>
        <div className="posts__action">
            {/* <textarea className="posts__field" onChange={(e) => console.log(e.currentTarget.value)}></textarea> */}
            <textarea ref={postMessage} className="posts__field" placeholder='Durov, return the wall...'></textarea>
            <button onClick={addPost} className="posts__send button-primary button">Тык!</button>
        </div>
    </>
}

export default PostAction;
