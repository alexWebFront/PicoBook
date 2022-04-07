import './profile-avatar.css';
import Ava from "../../image/avatar.jpg"

const ProfileAvatar = () => {
    return <>
        <div className="profile__avatar">
            <img src={Ava} alt="Аватарка" />
        </div>
    </>
}

export default ProfileAvatar;