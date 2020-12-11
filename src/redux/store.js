import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi five", likesCount: 15},
                {id: 2, message: "Very nice", likesCount: 0}
            ],
            newPostText: 'text'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Borat"},
                {id: 2, name: "Sagdiev"},
                {id: 3, name: "Baiden"},
                {id: 4, name: "Obama"},
                {id: 5, name: "Tramp"}
            ],
            messages: [
                {id: 1, message: "Hi five"},
                {id: 2, message: "Very nice"},
                {id: 3, message: "Nice"}
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },

    _callSubscriber() {
        console.log("state changed")
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

window.store = store;
export default store;