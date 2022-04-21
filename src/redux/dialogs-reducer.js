const ADD_DIALOG_MESSAGE = "ADD-DIALOG-MESSAGE";
const UPDATE_DIALOG_MESSAGE = "UPDATE-DIALOG-MESSAGE";

const dialogsReducer = (state, action) => {

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
                return;
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