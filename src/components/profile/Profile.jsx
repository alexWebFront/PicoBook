import ProfileAvatar from './profile-avatar/Profile-avatar';
import ProfileInfo from './profile-info/Profile-info';
import Wall from './wall/wall';
import './profile.css'

const Profile = (props) => {

    return <>
        <div className="profile">
            <div className="profile__container content-container ">
                <ProfileAvatar />
                <ProfileInfo />
            </div>
            <Wall
                postsData={props.profilePage.postsData}
                dispatch={props.dispatch}
                newPostText={props.profilePage.newPostText} />
        </div>
    </>
}


export default Profile; 