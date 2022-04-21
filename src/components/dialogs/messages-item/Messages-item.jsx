import './messages-item.css';


const DialogMessage = (props) => {
    return <>
        <div className="dialogs__message">{props.message}</div>
    </>
}

export default DialogMessage;