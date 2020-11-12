import constants from '../../../constants'

const { ACTION_TYPE } = constants

export const addMessage = (message = {}) => ({
  type: ACTION_TYPE.ADD_MESSAGE,
  message,
})

export const updateUsers = (users = []) => ({
  type: ACTION_TYPE.UPDATE_USERS,
  users,
})
