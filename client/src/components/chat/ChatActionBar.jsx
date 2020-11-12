import React, { useEffect, useRef } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const ChatActionBar = ({ onMessageSend }) => {
  const messageInputRef = useRef(null)

  const formik = useFormik({
    initialValues: {
      message: '',
    },
    validationSchema: Yup.object({
      message: Yup.string().required(),
    }),
    onSubmit: (values) => {
      onMessageSend(values.message)
      formik.resetForm()
      messageInputRef.current.focus()
    },
  })

  useEffect(() => {
    formik.validateForm()
  }, [])

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className='row'>
        <div className='col'>
          <input
            ref={messageInputRef}
            type='text'
            className='form-control'
            autoComplete='off'
            placeholder='Type a message'
            autoFocus
            id='message'
            name='message'
            value={formik.values.message}
            onChange={formik.handleChange}
          />
        </div>
        <div className='col-1'>
          <button
            type='submit'
            className='btn btn-outline-primary float-right'
            disabled={formik.errors.message}
          >
            Send
          </button>
        </div>
      </div>
    </form>
  )
}

export default ChatActionBar
