import './profile-avatar.css';
import Avatar from "../../../image/avatar.jpg";

const ProfileAvatar = () => {
    return <>
        <div className="profile__avatar">
            <img src={Avatar} alt="Аватарка" />
        </div>
    </>
}

export default ProfileAvatar;