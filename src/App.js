
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './Pages/Main.js';
import Quizes from './Pages/Quizes.js';
import Results from './Pages/Results.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main />} />
        <Route path="/quizes" element={<Quizes />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
