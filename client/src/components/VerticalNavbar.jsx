// import React, { useState } from 'react';
// import './VerticalNavbar.css';

// const VerticalNavbar = () => {
//   const [selected, setSelected] = useState(null);

//   const navItems = [
//     { label: 'Home', link: '/home' },
//     { label: 'About', link: '/about' },
//     { label: 'Services', link: '/services' },
//     { label: 'Work', link: '/work' },
//     { label: 'Reviews', link: '/reviews' },
//     { label: 'Contact', link: '/contact' },
//   ];

//   return (
//     <div className="vertical-navbar">
//       <div className="nav-section">
//         {navItems.map((item, index) => (
//           <div
//             key={index}
//             className={`nav-item ${selected === index ? 'selected' : ''}`}
//             onClick={() => setSelected(index)}
//           >
//             {item.label.split('').map((char, charIndex) => (
//               <span
//                 key={charIndex}
//                 className={charIndex === 2 ? 'spaced-letter' : ''}
//               >
//                 {char}
//               </span>
//             ))}
//           </div>
//         ))}
//       </div>
//       <div className="nav-placeholder" style={{ flex: 0.5 }}>
//         {/* Placeholder content or additional controls */}
//       </div>
//     </div>
//   );
// };

// export default VerticalNavbar;










// import React from 'react';
// import { NavLink, useLocation } from 'react-router-dom';
// import './VerticalNavbar.css';

// const VerticalNavbar = () => {
//   const location = useLocation();

//   const navItems = [
//     { name: 'Home', path: '/' },
//     { name: 'About', path: '/newabout' },
//     { name: 'Services', path: '/services' },
//     { name: 'Work', path: '/project' },
//     { name: 'Reviews', path: '/testimonials' },
//     { name: 'Contact', path: '/footer' },
//   ];

//   return (
//     <div className="vertical-navbar">
//       <div className="nav-section main">
//         <ul>
//           {navItems.map((item) => (
//             <li
//               key={item.name}
//               className={`nav-item ${location.pathname === item.path ? 'selected' : ''}`}
//             >
//               <NavLink to={item.path}>
//                 {location.pathname === item.path
//                   ? item.name.split('').map((letter, index) => (
//                       <span key={index} className={index === 1 ? 'wide-letter' : ''}>
//                         {letter}
//                       </span>
//                     ))
//                   : item.name}
//               </NavLink>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="nav-section secondary">
//         {/* Optional secondary content */}
//       </div>
//     </div>
//   );
// };

// export default VerticalNavbar;















// import React from 'react';
// import './VerticalNavbar.css';

// const VerticalNavbar = ({ scrollToSection }) => {
//   const navItems = [
//     { name: 'Home', section: 'Home' },
//     { name: 'About', section: 'About' },
//     { name: 'Services', section: 'Services' },
//     { name: 'Work', section: 'Work' },
//     { name: 'Reviews', section: 'Reviews' },
//     { name: 'Contact', section: 'Contact' },
//   ];

//   return (
//     <div className="vertical-navbar">
//       <div className="nav-section main">
//         <ul>
//           {navItems.map((item) => (
//             <li
//               key={item.name}
//               className="nav-item"
//               data-section={item.section}
//               onClick={() => scrollToSection(item.section)} // Call scrollToSection on click
//             >
//               {item.name}
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="nav-section secondary">
//         {/* Optional secondary content */}
//       </div>
//     </div>
//   );
// };

// export default VerticalNavbar;






///////////////////////////////////////////////////////////////////////////////////
// import React from 'react';
// import './VerticalNavbar.css';

// const VerticalNavbar = ({ scrollToSection, selectedSection }) => {
//   console.log(selectedSection,scrollToSection)
//   const navItems = [
//     { name: 'Home', section: 'Home' },
//     { name: 'About', section: 'About' },
//     { name: 'Services', section: 'Services' },
//     { name: 'Work', section: 'Work' },
//     { name: 'Reviews', section: 'Reviews' },
//     { name: 'Contact', section: 'Contact' },
//   ];

//   return (
//     <div className="vertical-navbar">
//       <div className="nav-section main">
//         <ul>
//           {navItems.map((item) => (
//             <li
//               key={item.name}
//               className={`nav-item ${selectedSection === item.section ? 'selected' : ''}`} // Add selected class conditionally
//               onClick={() => scrollToSection(item.section)} // Call scrollToSection on click
//               data-section={item.section}
//             >
//               {item.name}
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="nav-section secondary">
//         {/* Optional secondary content */}
//       </div>
//     </div>
//   );
// };

// export default VerticalNavbar;






import React from 'react';
import './VerticalNavbar.css';

const VerticalNavbar = ({ scrollToSection, selectedSection }) => {
  const navItems = [
    { name: 'Home', section: 'Home' },
    { name: 'About', section: 'About' },
    { name: 'Services', section: 'Services' },
    { name: 'Work', section: 'Work' },
    { name: 'Reviews', section: 'Reviews' },
    { name: 'Contact', section: 'Contact' },
  ];

  return (
    <div className="vertical-navbar">
      <ul>
        {navItems.map((item) => (
          <li
            key={item.name}
            className={`nav-item ${selectedSection === item.section ? 'selected' : ''}`}
            onClick={() => scrollToSection(item.section)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VerticalNavbar;
