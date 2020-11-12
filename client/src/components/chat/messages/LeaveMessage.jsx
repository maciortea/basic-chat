import React from 'react'

const LeaveMessage = ({ message }) => {
  return (
    <div className='alert alert-light text-center'>
      <span>{message.sender} left conversation</span>
    </div>
  )
}

export default LeaveMessage
