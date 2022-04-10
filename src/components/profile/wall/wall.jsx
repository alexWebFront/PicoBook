import PostAction from './post-action/Post-action';
import PostsItems from './posts-items/Posts-items';
import './wall.css';




const Wall = (props) => {

    const PostsElements = props.postsData.map((item) => {
        return <>
            <PostsItems id={item.id} postMessage={item.message} />
        </>
    })

    return <>
        <div className="wall wall-container border-radius">
            <div className="posts">
                <PostAction addPost={props.addPost} />
            </div>
        </div>
        {PostsElements}
    </>
}

export default Wall;
