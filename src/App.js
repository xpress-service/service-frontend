import { Routes, Route } from 'react-router-dom';
import AdminLogin from './pages/AdminLogin/AdminLogin';
import UserLogin from './pages/UserLogin/UserLogin';
import VerifyAdmin from "./pages/VerifyAdmin/VerifyAdmin"
import VerifyUser from "./pages/VerifyUser/VerifyUser"
import UserReg from './pages/UserReg/UserReg';
import AdminReg from './pages/AdminReg/AdminReg';
import PersistLogin from "./components/PersistLogin/PersistLogin"
import VerifyAdminRole from "./components/VerifyAdminRole/VerifyAdminRole"
import VerifyUserRole from "./components/VerifiyUserRole/VerifyUserRole"
import LandingPage from './components/LandingPage/LandingPage';
import AdminManageUser from './pages/AdminManageUser';
//import ErrorPage from "./pages/ErrorPage/ErrorPage"
import UserTransaction from './pages/UserTransaction';
import UserTracking from './pages/UserTracking'
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard';
import ManageBookings from './pages/ManageBookings';
import AdminProfile from './pages/AdminProfile';
import UserProfile from './pages/UserProfile';
import RequireUser from "./components/Layout/RequireUser";
import Layout from "./components/Layout/Layout";
import RequireAdmin from "./components/Layout/RequireAdmin";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { HelmetProvider } from "react-helmet-async";
//import RequirePermissions from "./components/Layout/RequirePermissions";




const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
    },
  },
})



function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        {/* pulic routes */}
   <Routes>
    <Route element={<Layout/>}>
   <Route path='/' element={<LandingPage/>} />
   <Route path='/user-login' element={<UserLogin/>} />
   <Route path='/admin-login' element={<AdminLogin/>} />
   <Route path='/user-reg' element={<UserReg/>} />
   <Route path='/admin-reg' element={<AdminReg/>} />
   <Route path='/manage-user' element={<AdminManageUser/>}/>
   <Route element={<VerifyAdminRole />}>
              <Route
                path="/verify-admin/:verificationCode"
                element={<VerifyAdmin />}
              />
            </Route>
   <Route element={<VerifyUserRole />}>
              <Route
                path="/verify-user/:verificationCode"
                element={<VerifyUser />}
              />
            </Route>

    
     {/* user routes */}
    <Route element={<PersistLogin allowedRole={["user"]} />}>
      <Route element={<RequireUser allowedRole={["user"]} />}>
        <Route path='/transaction' element={<UserTransaction/>} />
        <Route path='/user-dashboard' element={<UserDashboard/>} />
        <Route path='/user-profile' element={<UserProfile/>} />
        <Route path='/tracking' element={<UserTracking/>} />
      </Route>
    </Route>


    {/* admin routes */}
    <Route element={<PersistLogin allowedRole={["admin"]} />}>
      <Route element={<RequireAdmin allowedRole={["admin"]} />}>
        <Route path='/admin-dashboard' element={<AdminDashboard/>} />
        <Route path='/manage' element={<ManageBookings/>} />
        <Route path='/admin-profile' element={<AdminProfile/>} />
      </Route>
    </Route>

    {/**catch all*/}
    {/* <Route path="*" element={<ErrorPage />} />  */}
    </Route>
    </Routes>
    </HelmetProvider>

      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
