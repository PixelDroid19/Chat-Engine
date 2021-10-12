import { types } from '../types/type';

const initialStore = {
  messageChatLocal: []
}; 

export default function MessageReducer(state = initialStore, action) {
  switch(action.type) {
    case types.NEWMESSAGE:
      return {
        ...state,
        messageChatLocal: [...state.messageChatLocal, action.payload]
      }
    default:
      return state
  }
}

