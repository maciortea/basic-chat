import React from 'react'

const JoinMessage = ({ message }) => {
  return (
    <div className='alert alert-light text-center'>
      <span>{message.sender} joined conversation</span>
    </div>
  )
}

export default JoinMessage
