import Canvas from './canvas';
import Customizer from './pages/Customizer';
import Home from './pages/Home';
import WorkOrder from './pages/WorkOrder';


function App() {
  return (
    <main className="app transition-all ease-in overflow-y-auto">
      <Home />
      <Canvas/>
      <Customizer />
      <WorkOrder/>
    </main>
  )
}

export default App
