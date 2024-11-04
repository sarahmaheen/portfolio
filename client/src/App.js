// import React from 'react';
// import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './components/Home'; // Import Home component
// import About from './components/About'; 
// import LandingPage from './components/Landing';
// import NewAboutPage from './components/NewAboutPage';
// import Service from './components/Service';
// import Projects from './components/Project';
// import Testimonials from './components/Testimonials'
// import Footer from './components/Footer';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<Home />} /> {/* Home route */}
//           <Route path="/about" element={<About />} /> 
//           <Route path="/landing" element={<LandingPage />} /> 
//           <Route path="/newabout" element={<NewAboutPage />} /> 
//           <Route path="/services" element={<Service />} /> 
//           <Route path="/project" element={<Projects />} /> 
//           <Route path="/testmonials" element={<Testimonials />} /> 
//           <Route path="/footer" element={<Footer />} /> 
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


























// import React from 'react';
// import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './components/Home';
// import About from './components/About';
// import LandingPage from './components/Landing';
// import NewAboutPage from './components/NewAboutPage';
// import Service from './components/Service';
// import Projects from './components/Project';
// import Testimonials from './components/Testimonials';
// import Footer from './components/Footer';
// import VerticalNavbar from './components/VerticalNavbar'; // Import the VerticalNavbar
// import Hero from './components/Hero';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <VerticalNavbar /> {/* Navbar will stay on the left */}
//         <div className="content">
//           <Routes>
//             <Route path="/bekaar" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path='/' element={<Hero/>}/>
//             <Route path="/landing" element={<LandingPage />} />
//             <Route path="/newabout" element={<NewAboutPage />} />
//             <Route path="/services" element={<Service />} />
//             <Route path="/project" element={<Projects />} />
//             <Route path="/testimonials" element={<Testimonials />} />
//             <Route path="/footer" element={<Footer />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;






import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/Hero';

function App() {
  const [selectedSection, setSelectedSection] = useState('Home'); // Default selected section

  console.log(selectedSection);
  return (
    <Router>
      <div className="App">
        <Hero setSelectedSection={setSelectedSection} selectedSection={selectedSection} /> {/* Pass function and selected section */}
      </div>
    </Router>
  );
}

export default App;
