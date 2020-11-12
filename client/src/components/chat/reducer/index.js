import constants from '../../../constants'

const { ACTION_TYPE } = constants

export const initialState = {
  messages: [],
  users: [],
}

export const chatReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.message],
      }
    case ACTION_TYPE.UPDATE_USERS:
      return {
        ...state,
        users: [...action.users],
      }
    default:
      return {
        ...state,
      }
  }
}
