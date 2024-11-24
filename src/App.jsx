// import Button from 'react-bootstrap/Button';
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import {Routes, Route} from "react-router-dom";
import Login from './pages/Login';
import SignUp from './pages/SignUp';


function App() {
 
toast.success("hello coder");
  return (
    <div className='wrapper'>
    <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
    </Routes>
    <ToastContainer />
    </div>
  )
}

export default App
