import React from 'react';
import DialogItem from './dialogs-item/Dialogs-item';
import DialogMessage from './messages-item/Messages-item';
import './dialogs.css';
import {onDialogMessageUpdateTextActionCreator, addDialogMessageActionCreator} from '../../redux/dialogs-reducer';


const Dialogs = (props) => {
    const DialogsElements = props.messagesPage.dialogsData.map((dialog) => {
        return <>
            <DialogItem name={dialog.name} id={dialog.id}/>
        </>
    })
    const MessagesElements = props.messagesPage.messagesData.map((message) => {
        return <>
            <DialogMessage message={message.message} id={message.id}/>
        </>
    })

    // кнопка и функция добавления сообщения
    // let dialogsMessage = React.createRef();


    let sendNewMessage = () => {
        props.dispatch(addDialogMessageActionCreator());
    }

    let onDialogsMessageChange = (e) => {
        let text = e.target.value;
        props.dispatch(onDialogMessageUpdateTextActionCreator(text));
    }


    return <>
        <div className="dialogs">
            <div className="dialogs__container content-container">
                <div className="dialogs__items">
                    {DialogsElements}
                </div>
                <div className="dialogs__messages">
                    <div className="dialogs__out">
                        {MessagesElements}
                    </div>
                    <textarea
                              onChange={onDialogsMessageChange}
                              value={props.messagesPage.newMessageText}
                              className="posts__field" placeholder='Write your message'></textarea>
                    <button onClick={sendNewMessage} className="posts__send button-primary button">Тык!</button>
                </div>
            </div>
        </div>
    </>
}
export default Dialogs;