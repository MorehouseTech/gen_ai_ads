import { Routes, Route } from 'react-router-dom';
import Netflix from './pages/Netflix';
import AdPage from './pages/adPage';
import AIinfo from './pages/AIinfo';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Netflix />} />
      <Route path="/adPage/:title/:category" element={<AdPage />} />
      <Route path="/AIinfo/:title/:category/:company" element={<AIinfo />} />
    </Routes>
  );
}

export default App;
