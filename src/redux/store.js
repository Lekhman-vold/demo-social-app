import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you', like: 10},
                {id: 2, message: 'It\'s my post', like: 5},
                {id: 3, message: 'Shalom aa__ha', like: 55}
            ],
            newPostText: ''
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Shalom'},
                {id: 2, message: 'Hava Nagila'},
                {id: 3, message: 'Tel Aviv love'}
            ],
            dialogs: [
                {id: 1, name: 'Abram'},
                {id: 2, name: 'Izya'},
                {id: 3, name: 'Moysha'},
                {id: 4, name: 'Isaak'},
                {id: 5, name: 'Fima'}
            ],
            newMessageBody: ""
        },
        sidebar: {}
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('State')
    },
    subscribe(observer) {
        this._callSubscriber = observer; // observer pattern наглядач
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}


export default store;
window.store = store;
//store OOP