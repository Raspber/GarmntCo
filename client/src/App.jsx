import { Routes, Route } from 'react-router-dom'

import Canvas from './canvas';
import Customizer from './pages/Customizer';
import Home from './pages/Home';
import WorkOrder from './pages/WorkOrder';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function App() {
  return (
    <Routes>
{/* -----------------------Index Route------------------------------ */}
      <Route path='/' element={
        <main className="app transition-all ease-in overflow-y-auto">
          <Home />
          <Canvas />
          <Customizer />
        </main>
      }/>
{/* -----------------------Workorder Route------------------------------ */}
      <Route path='/workorder' element={<WorkOrder/>}/>
    </Routes>
  )
}

export default App