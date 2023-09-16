import { Routes, Route } from 'react-router-dom';
import AdminLogin from './components/AdminLogin';
import UserLogin from './components/UserLogin';
import UserRegForm from './components/UserRegForm/UserRegForm';
import AdminRegForm from './components/AdminRegForm/AdminRegForm';
import LandingPage from './components/LandingPage/LandingPage';
import AdminManageUser from './pages/AdminManageUser';
import AdminHeader from './components/AdminHeader/AdminHeader';
import AdminSideNav from './components/AdminSideNav/AdminSideNav'
import AdminDashboard from './pages/AdminDashboard';
import ManageBookings from './pages/ManageBookings';
import AdminProfile from './pages/AdminProfile'



function App() {
  return (
   <Routes>
   <Route path='/' element={<UserLogin/>} />
   <Route path='/landing-page' element={<LandingPage/>} />
   <Route path='/admin-login' element={<AdminLogin/>} />
   <Route path='/user-reg' element={<UserRegForm/>} />
   <Route path='/admin-reg' element={<AdminRegForm/>} />
   <Route path='/manage-user' element={<AdminManageUser/>}/>
   <Route path='/admin-header' element={<AdminHeader/>} />
   <Route path='/adminside-nav' element={<AdminSideNav/>} />
   <Route path='/admin-dashboard' element={<AdminDashboard/>} />
   <Route path='/manage' element={<ManageBookings/>} />
   <Route path='/profile' element={<AdminProfile/>} /> 
    </Routes>
  );
}

export default App;
