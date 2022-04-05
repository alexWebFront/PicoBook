import ProfileInfo from '../profile-info/Profile-info';
import ProfilePosts from '../profile-posts/Profile-posts';
import './profile.css'
const Profile = () => {
    return (
        <div className="profile">
            <ProfileInfo />
            <ProfilePosts />
        </div>
    )
}

export default Profile;