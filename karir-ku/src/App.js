import { useState } from "react";
import Navbar from './components/navbar.js'
import {Home,Jobs, DetailJob, Login, AdminPage, NotFound, ProtectedRoute} from './pages'
import Form from "./components/form.js";
import { Routes, Route } from "react-router-dom";

export default function App() {
  const [user, setUser] = useState(localStorage.getItem('access_token') ? true : false);

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='jobs' element={<Jobs />}/>
      <Route path='login' element={
        <ProtectedRoute user={user} to={'login'}>
          <Login />
      </ProtectedRoute>
      }/>
      <Route path='admin-page' element={
        <ProtectedRoute user={user} to={'admin'}>
          <AdminPage />
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
      <Route path='jobs/detail/:JobId' element={<DetailJob />}/>
      <Route path='*' element={<NotFound />}/>
    </Routes>
  </>
  );
}