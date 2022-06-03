import { useState } from 'react'
import ProtectedRoute from './views/ProtectedRoute.js'
import { Routes, Route} from 'react-router-dom';
import Home from './views/Home'
import Login from './views/Login'
import Form from './components/Form.js'
export default function App(){
  const [user, setUser] = useState(localStorage.getItem('access_token') ? true : false)
  return (
    <>
      <Routes>
        <Route path='/' element={
          <ProtectedRoute user={user} to={"home"}>
            <Home />
          </ProtectedRoute>
        }/>
        <Route path='/login' element={
          <ProtectedRoute user={user} to={"login"}>
            <Login />
          </ProtectedRoute>
        }/>
        <Route path='crud-jobs/:JobId' element={
        <ProtectedRoute user={user} to={'edit'}>
          <Form />
        </ProtectedRoute>
        }/>
        <Route path='crud-jobs' element={
        <ProtectedRoute user={user} to={'add'}>
          <Form />
        </ProtectedRoute>
        }/>
      </Routes>
    </>
  )
}