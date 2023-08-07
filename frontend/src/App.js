import { Routes, Route } from 'react-router-dom';
import AdminLogin from './components/AdminLogin';
import UserLogin from './components/UserLogin';

function App() {
  return (
   <Routes>
   <Route path='/' element={<UserLogin/>} />
   <Route path='/admin-login' element={<AdminLogin/>} />
    </Routes>
  );
}

export default App;
