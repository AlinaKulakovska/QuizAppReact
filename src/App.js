
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './Pages/Main.js';
import Quizes from './Pages/Quizes.js';
import Results from './Pages/Results.js';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
//     <HashRouter >
// //       <Routes>
//       <Route exact path='/' render={<Main />} basename={process.env.PUBLIC_URL}/>
//         <Route index element={<Main />} />
//         <Route path="/quizes" element={<Quizes />} />
//         <Route path="/results" element={<Results />} />
// //       </Routes>
//     </HashRouter >
<Router basename="/QuizAppReact"> //add basename
      <Switch>
        <Route path='/' exact component={Main} />
        <Route path='/quizes' component={Quizes} />
        <Route path='/results' component={Results} />
      </Switch>
</Router>

  );
}

export default App;
