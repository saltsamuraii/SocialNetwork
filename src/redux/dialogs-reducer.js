const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
}

export const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body});
            return state;
        default:
            return state;
    }
}


export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default dialogsReducer;