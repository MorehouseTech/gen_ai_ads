import { Routes, Route } from 'react-router-dom';
import Netflix from './pages/Netflix';
import Hulu from './pages/Hulu';
import AIinfo from './pages/AIinfo';
import Youtube from './pages/Youtube';
import './App.css';
import Home from './pages/Home';
import AdPage from './pages/AdPage';
import PrimeVideo from './pages/PrimeVideo';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Netflix" element={<Netflix />} />
      <Route path="/Hulu" element={<Hulu />} />
      <Route path="/AIinfo/:title/:category" element={<AIinfo />} />
      <Route path="/Youtube" element={<Youtube />} />
      <Route path="/AmazonPrime" element={<PrimeVideo />} />
      <Route path="/adPage/:title/:category" element={<AdPage />} />
    </Routes>
  );
}

export default App;
