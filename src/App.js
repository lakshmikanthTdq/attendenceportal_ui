import { Routes, Route } from 'react-router-dom'
import Login from './pages/Landings/Login/Login';
import ForgotPassword from './pages/Landings/ForgotPassword/ForgotPassword';
import VerifyOTP from './pages/Landings/VerifyOTP/VerifyOTP';
import Layout from './pages/Layout';
import LandingPage from './pages/LandingPage';
import CustomermanagementView from './pages/CustomerManagement/CustomerManagementView';
import EmployeeView from './pages/Employees/EmployeesView';
import Attendance from './pages/Employees/EmployeesView';
import Reports from './pages/Reports/Reports';
import Salaries from './pages/Salaries/Salaries';
import PageNotFound from './pages/PageNotFound/PageNotFound';

import './App.css';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/verifyotp" element={<VerifyOTP />} />
      <Route path="layout" element={<Layout />}>
        <Route path="landing" element={<LandingPage />} />
        <Route path="customermanagement/view" element={<CustomermanagementView />} />
        <Route path="employees/view" element={<EmployeeView />} />
        <Route path="attendance/view" element={<Attendance />} />
        <Route path="reports/view" element={<Reports />} />
        <Route path="salaries/view" element={<Salaries />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />   
    </Routes>
  );
}

export default App;
