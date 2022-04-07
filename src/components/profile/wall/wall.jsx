import PostAction from './post-action/Post-action';
import PostsItems from './posts-items/Posts-items';
import './wall.css';


const Wall = () => {

    return <>
        <div className="wall wall-container border-radius">
            <div className="posts">
                <PostAction />
                <PostsItems />
            </div>
        </div>
    </>
}

export default Wall;
