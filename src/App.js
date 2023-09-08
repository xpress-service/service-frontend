import { Routes, Route } from 'react-router-dom';
import AdminLogin from './components/AdminLogin';
import UserLogin from './components/UserLogin';
import UserRegForm from './components/UserRegForm/UserRegForm';
import AdminRegForm from './components/AdminRegForm/AdminRegForm';
import LandingPage from './components/LandingPage/LandingPage';


function App() {
  return (
   <Routes>
   <Route path='/' element={<UserLogin/>} />
   <Route path='/landing-page' element={<LandingPage/>} />
   <Route path='/admin-login' element={<AdminLogin/>} />
   <Route path='/user-reg' element={<UserRegForm/>} />
   <Route path='/admin-reg' element={<AdminRegForm/>} />
    </Routes>
  );
}

export default App;
