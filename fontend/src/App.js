import './App.css';
import DataGrid from "./components/DataGrid";
import Navbar from './components/Navbar';
import { AllRoutes } from './components/AllRoutes';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <AllRoutes/>
    </div>
  );
}

export default App;
