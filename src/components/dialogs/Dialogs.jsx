import DialogItem from './dialogs-item/Dialogs-item';
import './dialogs.css';
import DialogMessage from './messages-item/Messages-item';

const Dialogs = (props) => {
    const DialogsElements = props.messagesPage.dialogsData.map((dialog) => {
        return <>
            <DialogItem name={dialog.name} id={dialog.id} />
        </>
    })
    const MessagesElements = props.messagesPage.messagesData.map((message) => {
        return <>
            <DialogMessage message={message.message} id={message.id} />
        </>
    })

    return <>
        <div className="dialogs">
            <div className="dialogs__container content-container">
                <div className="dialogs__items">
                    {DialogsElements}
                </div>
                <div className="dialogs__messages">
                    {MessagesElements}
                </div>
            </div>
        </div>
    </>
}
export default Dialogs;