const constants = {
  SERVER_BASE_URL: 'http://localhost:3001',
  EVENT_TYPE: {
    USERS: 'users',
    JOIN_REQUEST: 'join',
    USER_JOINED: 'user joined',
    USER_LEFT: 'user left',
    MESSAGE: 'message',
    CLIENT_DISCONNECTED: 'disconnected',
  },
  MESSAGE_TYPE: {
    JOIN: 0,
    LEAVE: 1,
    STANDARD: 2,
  },
  ACTION_TYPE: {
    ADD_MESSAGE: 'ADD_MESSAGE',
    UPDATE_USERS: 'UPDATE_USERS',
  },
}

export default constants
