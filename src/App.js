
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './Pages/Main.js';
import Quizes from './Pages/Quizes.js';


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' index element={<Main />} />
        <Route path="/quizes" element={<Quizes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
