import WelcomePage from "./pages/WelcomePage";
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Cover from "./pages/Cover"
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Kerangka from "./pages/Kerangka";
import Coba from "./pages/Coba";
import Cover3 from "./pages/cover2/Cover3";
import './App.css'
// function dynamicElement() {
//   return (
//     <p>Tujuan Undangan</p>
//   )
// }



function App() {
  return (
    <Router>
      {/* <Kerangka /> */}
      <Routes>
        <Route path="/:personName" element={<WelcomePage />} />
        <Route path="/:personName/main" element={<Cover3 />} />
        <Route path="/:personName/main2" element={<Kerangka />} />
      </Routes>
    </Router>
  );
}



export default App;
