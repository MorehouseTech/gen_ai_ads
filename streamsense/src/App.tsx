import { Routes, Route } from 'react-router-dom';
import Netflix from './pages/Netflix';
import Hulu from './pages/Hulu';
import AIinfo from './pages/AIinfo';
import Youtube from './pages/Youtube';
import './App.css';
import Home from './pages/Home';
import AdPage from './pages/AdPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Netflix" element={<Netflix />} />
      <Route path="/Hulu/:passed" element={<Hulu />} />
      <Route path="/AIinfo/:title/:category/:company/:product" element={<AIinfo />} />
      <Route path="/Youtube" element={<Youtube />} />
      <Route path="/AmazonPrime" element={<div>Amazon Prime Coming Soon</div>} />
      <Route path="/adPage/:title/:category" element={<AdPage />} />
    </Routes>
  );
}

export default App;
