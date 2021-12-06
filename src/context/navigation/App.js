import './App.scss';
import Home from './pages/home-page.component';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from './pages/about/about.component';
import ContactUs from './pages/contact-us/contact-us.component';
import Careers from './pages/careers/careers.component';


function App() {
  return (
    <Router>
      {/* <Home /> */}

      <>
        <Routes>
          <Route path="/" caseSensitive="false" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/careers" element={<Careers />}/>
          <Route path="/contact-us" element={<ContactUs />}/>
        </Routes>
      </>
    </Router>
  );
}

export default App;
