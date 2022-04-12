let store = {
    _state: {
        profilePage: {
            postsData: [],
            newPostText: '',
            postsCount: 0,
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
    },
    getState() {
        return this._state;
    },
    callSubscriber() {
        console.log('state change');
    },
    addPost() {
        if (this._state.profilePage.newPostText !== '') {
            this._state.profilePage.postsCount++;
            let newPost = {
                message: this._state.profilePage.newPostText,
                id: this._state.profilePage.postsCount,
            }
            this._state.profilePage.postsData.unshift(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else {
            return;
        }
    },
    updatePostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
}

window.store = store;
export default store;