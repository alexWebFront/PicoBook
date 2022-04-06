import ProfileInfo from '../profile-info/Profile-info';
import Wall from '../wall/wall';
import './profile.css'
const Profile = () => {
    return (
        <div className="profile-wrapper">
            <div className="profile content-container">
                <ProfileInfo />
            </div>
            <Wall />
        </div>
    )
}

export default Profile;