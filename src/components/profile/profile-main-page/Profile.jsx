import ProfileAvatar from '../profile-avatar/Profile-avatar';
import ProfileInfo from '../profile-info/Profile-info';
import Wall from '../wall/wall';
import './profile.css'

const Profile = (props) => {

    return <>
        <div className="profile-wrapper">
            <div className="profile profile-container content-container border-radius">
                <ProfileAvatar />
                <ProfileInfo />
            </div>
            <Wall
                addPost={props.addPost}
                postsData={props.profilePage.postsData}
                newPostText={props.profilePage.newPostText}
                updatePostText={props.updatePostText} />
        </div>
    </>
}


export default Profile;