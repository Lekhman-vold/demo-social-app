const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: 'Hello World'},
        {id: 2, message: 'Hi, how are you?'},
        {id: 3, message: 'Where are you from?'}
    ],
    dialogs: [
        {id: 1, name: 'Abram'},
        {id: 2, name: 'Tom'},
        {id: 3, name: 'John'},

    ],
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
};

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})


export default dialogsReducer;