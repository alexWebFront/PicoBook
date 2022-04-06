import './wall.css';


const Wall = () => {
    return (
        <div className="wall wall-container">
            <div className="posts">
                <div className="posts__action">
                    <textarea className="posts__field" placeholder='Durov, bring back the wall...'></textarea>
                    <button className="posts__send button-primary button">Тык!</button>
                </div>
                <div className="posts__items">
                </div>
            </div>
        </div>
    )
}

export default Wall;
