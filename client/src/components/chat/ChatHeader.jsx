import React from 'react'
import { useHistory } from 'react-router-dom'

const ChatHeader = ({ users = [], onUserDisconnect }) => {
  const history = useHistory()

  const closeClick = () => {
    onUserDisconnect()
    history.push('/')
  }

  return (
    <div className='row'>
      <div className='col-6 text-truncate'>
        <span>
          <strong>Participants ({users.length}): </strong>
        </span>
        <span>{users.join(', ')}</span>
      </div>
      <div className='col'>
        <button
          type='button'
          className='close'
          aria-label='Close'
          onClick={closeClick}
        >
          <span aria-hidden='true'>&times;</span>
        </button>
      </div>
    </div>
  )
}

export default ChatHeader
