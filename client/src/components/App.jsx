import React from 'react'
import { Switch, Route } from 'react-router-dom'
import UserLoginPage from './userLogin/UserLoginPage'
import ChatPage from './chat/ChatPage'
import PageNotFound from './common/PageNotFound'

const App = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <UserLoginPage />
      </Route>
      <Route path='/chat/:username'>
        <ChatPage />
      </Route>
      <Route path='*'>
        <PageNotFound />
      </Route>
    </Switch>
  )
}

export default App
