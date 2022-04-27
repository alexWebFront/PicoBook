const ADD_DIALOG_MESSAGE = "ADD-DIALOG-MESSAGE";
const UPDATE_DIALOG_MESSAGE = "UPDATE-DIALOG-MESSAGE";

let initialState = {
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
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DIALOG_MESSAGE:
            if (state.newMessageText !== "") {
                state.messagesCount++;
                let newMessage = {
                    message: state.newMessageText,
                    id: state.messagesCount,
                }
                state.messagesData.push(newMessage);
                state.newMessageText = '';
            } else {
                return state;
            }
            return state;
        case UPDATE_DIALOG_MESSAGE:
            state.newMessageText = action.newTextMessage;
            return state;
        default:
            return state;
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

export default dialogsReducer;