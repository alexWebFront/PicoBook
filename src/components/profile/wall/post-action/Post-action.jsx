import './post-action.css';


const PostAction = () => {

    return <>
        <div className="posts__action">
            {/* <textarea className="posts__field" onChange={(e) => console.log(e.currentTarget.value)}></textarea> */}
            <textarea className="posts__field" placeholder='Durov, return the wall...'></textarea>
            <button className="posts__send button-primary button">Тык!</button>
        </div>
    </>
}

export default PostAction;
