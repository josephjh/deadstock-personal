const initialState = {
    user: {},
    friend:{},
    room:'',
    chat:[],
    list:[]
}

const HANDLE_USER = 'HANDLE_USER';
const HANDLE_FRIEND = 'HANDLE_FRIEND';
const CLEAR_USER = 'CLEAR_USER';
const HANDLE_ROOM = 'HANDLE_ROOM';
const HANDLE_CHAT = 'HANDLE_CHAT';
const HANDLE_LIST = 'HANDLE_LIST';

export function handleUser(user) {
    return {
        type: HANDLE_USER,
        payload: user
    }
}
export function handleFriend(friend) {
    return {
        type: HANDLE_FRIEND,
        payload: friend
    }
}

export function handleRoom(room){
    return {
        type: HANDLE_ROOM,
        payload: room
    }
}

export function handleChat(chat){
    return {
        type: HANDLE_CHAT,
        payload: chat
    }
}

export function handleList(list){
    return {
        type: HANDLE_LIST,
        payload: list
    }
}

export function clearUser(){
    return {
        type:CLEAR_USER
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case HANDLE_USER:
            return { ...state, user: action.payload }
        case HANDLE_FRIEND:
            return { ...state, friend: action.payload }
        case HANDLE_ROOM:
            return { ...state, room: action.payload }
        case HANDLE_CHAT:
            return { ...state, chat: action.payload }
        case HANDLE_LIST:
            return { ...state, list: action.payload }
        case CLEAR_USER:
            return { ...state, user: {}, friend:{}, room:'', chat:[] }
        default:
            return state
    }
}