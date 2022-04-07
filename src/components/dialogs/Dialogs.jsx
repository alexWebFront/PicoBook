import { NavLink } from 'react-router-dom';
import './dialogs.css';


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return <>
        <div className="dialogs__item">
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    </>

}

const DialogMessage = (props) => {
    return <>
        <div className="dialogs__message">{props.message}</div>
    </>
}

const Dialogs = () => {
    return <>
        <div className="dialogs dialogs-container content-container">
            <div className="dialogs__items">
                <DialogItem name="Петя" id="1" />
                <DialogItem name="Вася" id="2" />
                <DialogItem name="Коля" id="3" />
            </div>
            <div className="dialogs__messages">
                <DialogMessage message="Привет" />
                <DialogMessage message="Социальная сеть" />
                <DialogMessage message="PicoBook" />
            </div>
        </div>
    </>
}

export default Dialogs;