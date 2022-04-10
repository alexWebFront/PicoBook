import { NavLink } from 'react-router-dom';
import './dialogs-item.css';


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return <>
        <div className="dialogs__item">
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    </>
}

export default DialogItem;