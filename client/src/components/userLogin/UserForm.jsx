import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useHistory } from 'react-router-dom'

const UserForm = () => {
  const history = useHistory()

  const formik = useFormik({
    initialValues: {
      username: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      history.push(`/chat/${values.username}`)
    },
  })

  return (
    <form onSubmit={formik.handleSubmit}>
        <div className='form-group'>
          <h4>Type your username</h4>
        </div>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            placeholder='Username'
            autoComplete='off'
            id='username'
            name='username'
            autoFocus
            value={formik.values.username}
            onChange={formik.handleChange}
          />
          {formik.touched.username && formik.errors.username ? (
            <div>{formik.errors.username}</div>
          ) : null}
        </div>
        <button type='submit' className='btn btn-primary btn-block'>
          Join chat
        </button>
      </form>
  )
}

export default UserForm
