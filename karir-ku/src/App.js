import Navbar from './components/navbar.js'
import {Home,Jobs, DetailJob} from './pages'

import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='jobs' element={<Jobs />}/>
      <Route path='jobs/detail/:JobId' element={<DetailJob />}/>
    </Routes>
  </>
  );
}