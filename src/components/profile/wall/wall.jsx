import PostAction from './post-action/Post-action';
import PostsItems from './posts-items/Posts-items';
import './wall.css';


const Wall = (props) => {
    const PostsElements = props.postsData.map((item) => {
        return <>
            <PostsItems postCount={props.postCount} id={item.id} postMessage={item.message}/>
        </>
    })

    return <>
        <div className="wall">
            <div className="wall__container">
                <div className="posts">
                    <PostAction
                        dispatch={props.dispatch}
                        newPostText={props.newPostText}
                        updatePostText={props.updatePostText}/>
                </div>
            </div>
        </div>
        <div className="posts-out">
            {PostsElements}
        </div>
    </>
}

export default Wall;
