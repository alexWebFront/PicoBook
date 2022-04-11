let rerenderTree = () => {
    console.log('state change');
}
let state = {
    profilePage: {
        postsData: [],
        newPostText: '',
        postCount: [
            { id: 0 },
        ],
    },

    messagesPage: {
        messagesData: [
            { id: 1, message: "Привет" },
            { id: 2, message: "Социальная" },
            { id: 3, message: "Сеть" },
            { id: 4, message: "PicoBook" },
            { id: 5, message: "!!!!" },
        ],
        dialogsData: [
            { id: 1, name: "Петя" },
            { id: 2, name: "Вася" },
            { id: 3, name: "Коля" },
            { id: 4, name: "Жорик" },
            { id: 5, name: "Витя" },
        ],
    }
}

window.state = state;

export const addPost = () => {
    if (state.profilePage.newPostText !== '') {
        state.profilePage.postCount.id++;
        let newPost = {
            id: state.profilePage.postCount,
            message: state.profilePage.newPostText,
        }
        state.profilePage.postsData.unshift(newPost);
        state.profilePage.newPostText = '';
        rerenderTree(state);
    } else {
        return;
    }
}

export const updatePostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderTree(state);
}

export const subscribe = (observer) => {
    rerenderTree = observer;
}

export default state;