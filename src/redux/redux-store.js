import {combineReducers, legacy_createStore as createStore } from 'redux';
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
});

let store = createStore(reducers);

export default store;