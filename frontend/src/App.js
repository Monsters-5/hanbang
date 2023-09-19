import './App.css';
import Sidebar from './pages/Sidebar';
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/sidebar" element={<Sidebar/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
