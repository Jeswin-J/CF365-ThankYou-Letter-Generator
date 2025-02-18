import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Index';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Home /> } />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
