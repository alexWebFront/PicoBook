const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";
const ADD_DIALOG_MESSAGE = "ADD-DIALOG-MESSAGE";
const UPDATE_DIALOG_MESSAGE = "UPDATE-DIALOG-MESSAGE";

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
                { id: 1, name: "Петя" },
                { id: 2, name: "Вася" },
                { id: 3, name: "Коля" },
                { id: 4, name: "Жорик" },
                { id: 5, name: "Витя" },
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
        if (action.type === 'ADD-POST') {
            if (this._state.profilePage.newPostText !== '') {
                this._state.profilePage.postsCount++;
                let newPost = {
                    message: this._state.profilePage.newPostText,
                    id: this._state.profilePage.postsCount,
                }
                this._state.profilePage.postsData.unshift(newPost);
                this._state.profilePage.newPostText = '';
                this._callSubscriber(this._state);
            } else { return }
        } else if (action.type === 'UPDATE-POST-TEXT') {

            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
        /// message
        else if (action.type === 'ADD-DIALOG-MESSAGE') {
            if (this._state.messagesPage.newMessageText !== "") {
                this._state.messagesPage.messagesCount++;
                let newMessage = {
                    message: this._state.messagesPage.newMessageText,
                    id: this._state.messagesPage.messagesCount,
                }
                this._state.messagesPage.messagesData.push(newMessage);
                this._state.messagesPage.newMessageText = '';
                this._callSubscriber(this._state);
            } else { return }

        } else if (action.type === 'UPDATE-DIALOG-MESSAGE') {
            debugger;
            this._state.messagesPage.newMessageText = action.newTextMessage;
            this._callSubscriber(this._state);
        }
    },

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

export const addDialogMessageActionCreator = () => {
    return {
        type: ADD_DIALOG_MESSAGE,
    }
}

export const onDialogMessageUpdateTextActionCreator = (text) => {

    return {
        type: UPDATE_DIALOG_MESSAGE,
        newTextMessage: text,
    }
}

window.store = store;
export default store; 