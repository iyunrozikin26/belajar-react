import Navbar from './components/navbar.js'
import {Home,Jobs, DetailJob, Login, AdminPage, NotFound} from './pages'

import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='jobs' element={<Jobs />}/>
      <Route path='login' element={<Login />}/>
      <Route path='admin-page' element={<AdminPage />}/>
      <Route path='*' element={<NotFound />}/>
      <Route path='jobs/detail/:JobId' element={<DetailJob />}/>
    </Routes>
  </>
  );
}