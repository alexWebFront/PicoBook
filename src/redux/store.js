import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


let store = {
    // приватные методы
    _state: {
        profilePage: {
            postsData: [],
            newPostText: '',
            postsCount: 0,
        },
        messagesPage: {
            messagesData: [],
            newMessageText: '',
            messagesCount: 0,
            dialogsData: [
                {id: 1, name: "Петя"},
                {id: 2, name: "Вася"},
                {id: 3, name: "Коля"},
                {id: 4, name: "Жорик"},
                {id: 5, name: "Витя"},
            ],
        } 
    },
    _callSubscriber() {
        console.log('state change');
    },

    // получение стейта из приватки
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    // методы, меняющие state
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._callSubscriber(this._state);
    }
}




window.store = store;
export default store; 