import React from 'react'
import JoinMessage from './messages/JoinMessage'
import LeaveMessage from './messages/LeaveMessage'
import StandardMessage from './messages/StandardMessage'
import constants from '../../constants'

const { MESSAGE_TYPE } = constants

const Conversation = ({ messages = [], currentUser = '' }) => {
  const renderMessage = (message, index) => {
    const key = `message-${message.type}-${index}`

    switch (message.type) {
      case MESSAGE_TYPE.JOIN:
        return <JoinMessage key={key} message={message} />
      case MESSAGE_TYPE.LEAVE:
        return <LeaveMessage key={key} message={message} />
      case MESSAGE_TYPE.STANDARD:
        return <StandardMessage key={key} message={message} currentUser={currentUser} />
      default:
        return null
    }
  }

  return <div className='mt-2'>{messages.map(renderMessage)}</div>
}

export default Conversation
