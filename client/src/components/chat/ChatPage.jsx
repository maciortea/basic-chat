import React, { useEffect, useRef, useReducer } from 'react'
import { useParams } from 'react-router-dom'
import io from 'socket.io-client'
import moment from 'moment'
import ChatHeader from './ChatHeader'
import Conversation from './Conversation'
import ChatActionBar from './ChatActionBar'
import { chatReducer, initialState } from './reducer'
import { addMessage, updateUsers } from './actions'
import constants from '../../constants'

const { SERVER_BASE_URL, EVENT_TYPE, MESSAGE_TYPE } = constants

const ChatPage = () => {
  const socketRef = useRef(io(SERVER_BASE_URL))
  const convWrapperDivRef = useRef(null)
  const { username } = useParams()
  const [state, dispatch] = useReducer(chatReducer, initialState)

  useEffect(() => {
    socketRef.current.emit(EVENT_TYPE.JOIN_REQUEST, username)
    subscribeToSocketEvents()
    return () => unsubscribeFromSocketEvents()
  }, [username])

  useEffect(() => {
    scrollToBottom()
  }, [state.messages.length])

  const scrollToBottom = () => {
    convWrapperDivRef.current.scrollTop = convWrapperDivRef.current.scrollHeight
  }

  const subscribeToSocketEvents = () => {
    socketRef.current.on(EVENT_TYPE.USERS, (connectedUsers) => {
      dispatch(updateUsers(connectedUsers))
    })

    socketRef.current.on(EVENT_TYPE.USER_JOINED, (username) => {
      const message = createMessage(username, '', MESSAGE_TYPE.JOIN)
      dispatch(addMessage(message))
    })

    socketRef.current.on(EVENT_TYPE.USER_LEFT, (username) => {
      const message = createMessage(username, '', MESSAGE_TYPE.LEAVE)
      dispatch(addMessage(message))
    })

    socketRef.current.on(EVENT_TYPE.MESSAGE, (data) => {
      const { sender, message: text } = data
      const message = createMessage(sender, text)
      dispatch(addMessage(message))
    })

    socketRef.current.on(EVENT_TYPE.CLIENT_DISCONNECTED, (connectedUsers) => {
      dispatch(updateUsers(connectedUsers))
    })
  }

  const unsubscribeFromSocketEvents = () => {
    socketRef.current.off(EVENT_TYPE.USERS)
    socketRef.current.off(EVENT_TYPE.MESSAGE)
    socketRef.current.off(EVENT_TYPE.CLIENT_DISCONNECTED)
  }

  const createMessage = (sender, message, type = MESSAGE_TYPE.STANDARD) => ({
    sender,
    text: message,
    type,
    createdDate: moment(),
  })

  const sendMessage = (text) => {
    const message = createMessage(username, text)
    dispatch(addMessage(message))
    socketRef.current.emit(EVENT_TYPE.MESSAGE, text)
  }

  const disconnectUser = () => {
    socketRef.current.disconnect()
  }

  return (
    <div className='container-sm my-3'>
      <div className='row bg-light py-3 border border-bottom-0 rounded-top'>
        <div className='col'>
          <ChatHeader users={state.users} onUserDisconnect={disconnectUser} />
        </div>
      </div>
      <div
        className='row overflow-auto border border-bottom-0'
        style={{ height: '600px' }}
        ref={convWrapperDivRef}
      >
        <div className='col'>
          <Conversation messages={state.messages} currentUser={username} />
        </div>
      </div>
      <div className='row bg-light py-3 border rounded-bottom'>
        <div className='col'>
          <ChatActionBar onMessageSend={sendMessage} />
        </div>
      </div>
    </div>
  )
}

export default ChatPage
