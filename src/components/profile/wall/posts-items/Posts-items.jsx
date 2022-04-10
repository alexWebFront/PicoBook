import './posts-items.css';

const PostsItems = (props) => {
    return <>
        <div className="posts__item">{props.postMessage}</div>
    </>
}

export default PostsItems;
