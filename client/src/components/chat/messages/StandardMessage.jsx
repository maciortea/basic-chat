import React from 'react'
import moment from 'moment'

const StandardMessage = ({ message, currentUser }) => {
  const className = `alert alert-${
    message.sender === currentUser ? 'primary' : 'secondary'
  }`

  return (
    <div className={className}>
      <span>
        <i>
          <strong>{message.sender}: </strong>
        </i>
      </span>
      <span>{message.text}</span>
      <span className='text-muted float-right'>
        {moment(message.createdDate).format('HH:mm')}
      </span>
    </div>
  )
}

export default StandardMessage
