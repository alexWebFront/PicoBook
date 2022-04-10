import React from 'react';
import './messages-item.css';


const DialogMessage = (props) => {
    // let messageElement = React.createRef();

    // let addNewMessage = () => {
    //     let text = messageElement.current.value;
    //     alert(text);
    // }

    return <>
        <div className="dialogs__message">{props.message}</div>
        {/* <textarea ref={messageElement} className="posts__field" placeholder='Write your message'></textarea>
        <button onClick={addNewMessage} className="posts__send button-primary button">Тык!</button> */}
    </>
}



export default DialogMessage;