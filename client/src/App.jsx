import { Routes, Route, Navigate} from 'react-router-dom';
import Cookies from 'js-cookie';
import { useState } from 'react';
import Canvas from './canvas';
import Customizer from './pages/Customizer';
import Home from './pages/Home';
import WorkOrder from './pages/WorkOrder';
import PrintForm from './pages/PrintForm';
import Dashboard from './pages/Dashboard';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const PrivateRoute = ({ children }) => {
  const token = Cookies.get('token');
  return token ? children : <Navigate to="/" replace />;
};

const PublicRoute = ({ children }) => {
  const token = Cookies.get('token');
  return !token ? children : <Navigate to="/dashboard" replace />;
};

function App() {
  const [logoutMessage, setLogoutMessage] = useState('');

  return (
    <Routes>
{/* -----------------------Index Route------------------------------ */}
      <Route path='/' element={
        <PublicRoute>
          <main className="app transition-all ease-in overflow-y-auto">
            <Home logoutMessage={logoutMessage}/>
            <Canvas />
            <Customizer />
          </main>
        </PublicRoute>
      } />
{/* -----------------------Workorder Route------------------------------ */}
      <Route path='/workorder' element={
        <PublicRoute>
          <WorkOrder />
        </PublicRoute>
      } />
{/* -----------------------Printform Route------------------------------ */}
      <Route path='/printform' element={
        <PublicRoute>
          <PrintForm />
        </PublicRoute>
      } />
{/* -----------------------Dashboard Route------------------------------ */}
      <Route path='/dashboard' element={
        <PrivateRoute>
          <Dashboard setLogoutMessage={setLogoutMessage}/>
        </PrivateRoute>
      } />
    </Routes>
  );
}

export default App;
