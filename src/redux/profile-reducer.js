const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";

let initialState = {
    postsData: [],
    newPostText: '',
    postsCount: 0,
}

const profileReducer = (state= initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            if (state.newPostText !== '') {
                state.postsCount++;
                let newPost = {
                    message: state.newPostText,
                    id: state.postsCount,
                }
                state.postsData.unshift(newPost);
                state.newPostText = '';
            } else {
                return state;
            }
            return state;
        case UPDATE_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST,
    }
}

export const onPostTextChangeActionCreator = (text) => {
    return {
        type: UPDATE_POST_TEXT,
        newText: text,
    }
}


export default profileReducer;