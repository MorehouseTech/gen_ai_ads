import { Routes, Route } from 'react-router-dom';
import Netflix from './pages/Netflix';
import Hulu from './pages/Hulu';
import AIinfo from './pages/AIinfo';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Netflix />} />
      <Route path="/Hulu/:passed" element={<Hulu />} />
      <Route path="/AIinfo/:passed" element={<AIinfo />} />
    </Routes>
  );
}

export default App;
