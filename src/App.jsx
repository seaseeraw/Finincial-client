// import Button from 'react-bootstrap/Button';
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import {Routes, Route} from "react-router-dom";
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { DefaultLayout } from './components/layout/DefaultLayout';


function App() {
 
toast.success("hello coder");
  return (
    <div className='wrapper'>
    
    <Routes>
  <Route path="/" element={<DefaultLayout />}>
    <Route index element={<Login />} />
    <Route path="signup" element={<SignUp />} />
  </Route>
</Routes>

    <ToastContainer />
    </div>
  )
}

export default App
