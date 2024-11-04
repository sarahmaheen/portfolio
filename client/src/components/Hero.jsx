// import React, { useEffect, useRef } from 'react';
// import LandingPage from './Landing';
// import NewAboutPage from './NewAboutPage';
// import Service from './Service';
// import Projects from './Project';
// import Testimonials from './Testimonials';
// import Footer from './Footer';
// import VerticalNavbar from './VerticalNavbar';

// const Hero = ({ setSelectedSection, selectedSection }) => {
//   // Define refs for each section
//   const sectionRefs = {
//     Home: useRef(null),
//     About: useRef(null),
//     Services: useRef(null),
//     Work: useRef(null),
//     Reviews: useRef(null),
//     Contact: useRef(null),
//   };

//   const scrollToSection = (section) => {
//     const sectionElement = sectionRefs[section].current;
//     if (sectionElement) {
//       sectionElement.scrollIntoView({ behavior: 'smooth' });
//       setSelectedSection(section);
//     }
//   };

//   useEffect(() => {
//     // Intersection observer options
//     const observerOptions = {
//       root: null,
//       rootMargin: '0px',
//       threshold: 0.6, // Adjust visibility threshold if needed
//     };

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           // Set the currently visible section
//           const currentSection = entry.target.getAttribute('data-section');
//           setSelectedSection(currentSection);
//         }
//       });
//     }, observerOptions);

//     // Observe each section
//     Object.values(sectionRefs).forEach((ref) => {
//       if (ref.current) {
//         observer.observe(ref.current);
//       }
//     });

//     // Cleanup observer on component unmount
//     return () => {
//       observer.disconnect();
//     };
//   }, [setSelectedSection]);

//   return (
//     <div>
//       <div ref={sectionRefs.Home} data-section="Home">
//         <LandingPage />
//       </div>
//       <div ref={sectionRefs.About} data-section="About">
//         <NewAboutPage />
//       </div>
//       <div ref={sectionRefs.Services} data-section="Services">
//         <Service />
//       </div>
//       <div ref={sectionRefs.Work} data-section="Work">
//         <Projects />
//       </div>
//       <div ref={sectionRefs.Reviews} data-section="Reviews">
//         <Testimonials />
//       </div>
//       <div ref={sectionRefs.Contact} data-section="Contact">
//         <Footer />
//       </div>
//       <VerticalNavbar scrollToSection={scrollToSection} selectedSection={selectedSection} />
//     </div>
//   );
// };

// export default Hero;



















































import React, { useEffect, useRef } from 'react';
import LandingPage from './Landing';
import NewAboutPage from './NewAboutPage';
import Service from './Service';
import Projects from './Project';
import Testimonials from './Testimonials';
import Footer from './Footer';
import VerticalNavbar from './VerticalNavbar';

const Hero = ({ setSelectedSection, selectedSection }) => {
  const sectionRefs = {
    Home: useRef(null),
    About: useRef(null),
    Services: useRef(null),
    Work: useRef(null),
    Reviews: useRef(null),
    Contact: useRef(null),
  };

  const scrollToSection = (section) => {
    const sectionElement = sectionRefs[section].current;
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      setSelectedSection(section);
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentSection = entry.target.getAttribute('data-section');
          setSelectedSection(currentSection);
        }
      });
    }, observerOptions);

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, [setSelectedSection]);

  return (
    <div>
      <VerticalNavbar scrollToSection={scrollToSection} selectedSection={selectedSection} />
      <div ref={sectionRefs.Home} data-section="Home">
        <LandingPage />
      </div>
      <div ref={sectionRefs.About} data-section="About">
        <NewAboutPage />
      </div>
      <div ref={sectionRefs.Services} data-section="Services">
        <Service />
      </div>
      <div ref={sectionRefs.Work} data-section="Work">
        <Projects />
      </div>
      <div ref={sectionRefs.Reviews} data-section="Reviews">
        <Testimonials />
      </div>
      <div ref={sectionRefs.Contact} data-section="Contact">
        <Footer />
      </div>
    </div>
  );
};

export default Hero;