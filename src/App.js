import WelcomePage from "./pages/WelcomePage";
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Cover from "./pages/Cover"
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
// function dynamicElement() {
//   return (
//     <p>Tujuan Undangan</p>
//   )
// }



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<WelcomePage />} /> */}
        <Route path="/:personName" element={<WelcomePage />} />
        <Route path="/:personName/cover" element={<Cover />} />
        <Route path="/:personName/home" element={<Home />} />
      </Routes>
    </Router>
  );
}



export default App;
