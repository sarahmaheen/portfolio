// // Projects.js
// import React, { useEffect } from 'react';
// import './Project.css';

// import landing1 from "../assets/landing1.png";
// import landing2 from "../assets/landing2.png";
// import services from "../assets/services.png";
// import services2 from "../assets/services2.png";
// import happyballoon from "../assets/aboutpage/happyballoon.png" 
// import laptop from "../assets/aboutpage/laptop.png" 


// import { Github, ExternalLink } from 'lucide-react'; // Import icons from lucide-react


// const Projects = () => {
//   useEffect(() => {
//     const handleScroll = (event) => {
//       const scrollSpeed = 1.5; // Adjust this value for speed
//       window.scrollBy(0, event.deltaY * scrollSpeed);
//     };

//     window.addEventListener('wheel', handleScroll, { passive: false });

//     return () => {
//       window.removeEventListener('wheel', handleScroll);
//     };
//   }, []);

//   return (
//     <div className="projects-container">
//       <div className="spacer"></div>
//       <div className="projects-content">
//         <div className="projects-header">
//           <h2>Projects</h2>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, exercitationem. </p>
//         </div>
//         <div className="projects-grid">
//           {/* Project 1 */}
//           <div className="project-card">
//             <div className="project-info">
//               <h3>Project 1</h3>
//               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
//             </div>
//             <div className="project-images">
//               <img src={landing1} alt="Project 1" className="img1" />
//             </div>
//             <div className="project-links">
//               <a href="https://Github.com/your-repo" target="_blank" rel="noopener noreferrer">
//                 <Github size={24} />
//               </a>
//               <a href="https://your-live-link.com" target="_blank" rel="noopener noreferrer">
//                 <ExternalLink size={24} />
//               </a>
//             </div>
//           </div>

//           {/* Project 2 */}
//           <div className="project-card">
//             <div className="project-info">
//               <h3>Project 2</h3>
//               <p>Lor sit amet consectetur adipisicing elit...</p>
//             </div>
//             <div className="project-images">
//               <img src={landing2} alt="Project 2 - Image 1" className="img1" />
//               <img src={services} alt="Project 2 - Image 2" className="img2" />
//             </div>
//             <div className="project-links">
//               <a href="https://Github.com/your-repo" target="_blank" rel="noopener noreferrer">
//                 <Github size={24} />
//               </a>
//               <a href="https://your-live-link.com" target="_blank" rel="noopener noreferrer">
//                 <ExternalLink size={24} />
//               </a>
//             </div>
//           </div>

//           {/* Project 3 */}
//           <div className="project-card">
//             <div className="project-info">
//               <h3>Project 3</h3>
//               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
//             </div>
//             <div className="project-images">
//               <img src={services2} alt="Project 3" className="img1" />
//             </div>
//             <div className="project-links">
//               <a href="https://Github.com/your-repo" target="_blank" rel="noopener noreferrer">
//                 <Github size={24} />
//               </a>
//               <a href="https://your-live-link.com" target="_blank" rel="noopener noreferrer">
//                 <ExternalLink size={24} />
//               </a>
//             </div>
//           </div>

//           {/* Additional Project Cards */}
//           {/* ... */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;














// import React, { useEffect } from 'react';
// import './Project.css';

// import landing1 from "../assets/landing1.png";
// import landing2 from "../assets/landing2.png";
// import services from "../assets/services.png";
// import services2 from "../assets/services2.png";
// import { Github, ExternalLink } from 'lucide-react';

// const Projects = () => {
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       const projectCards = document.querySelectorAll('.project-card');
//         console.log(projectCards)
//       projectCards.forEach((card, index) => {
//         const speed = 1.5 - index * 0.15;

//         ; // Set different speeds for each card
//         console.log(speed)
//         const offset = scrollY * speed;
//         card.style.transform = `translateY(${offset}px)`;
//       });
//     };
  
//     window.addEventListener('scroll', handleScroll);
  
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);
  

//   return (
//     <div className="projects-container">
//       <div className="spacer"></div>
//       <div className="projects-content">
//         <div className="projects-header">
//           <h2>Explore Work</h2>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, exercitationem.</p>
//         </div>
//         <div className="projects-grid">
//           {/* Project 1 */}
//           <div className="project-card">
//             <div className="project-info">
//               <h3>Project 1</h3>
//               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus voluptatibus magnam vitae amet quaerat quam, a, molestias sit debitis perspiciatis quibusdam magni beatae! Quod voluptas nihil quis cupiditate! Repellendus earum expedita quaerat exercitationem corrupti ipsum at saepe fugit est nisi!</p>
//             </div>
//             <div className="project-images">
//               <img src={landing1} alt="Project 1" className="img1" />
//             </div>
//             <div className="project-links">
//               <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">
//                 <Github size={24} />
//               </a>
//               <a href="https://your-live-link.com" target="_blank" rel="noopener noreferrer">
//                 <ExternalLink size={24} />
//               </a>
//             </div>
//           </div>

//           {/* Project 2 */}
//           <div className="project-card">
//             <div className="project-info">
//               <h3>Project 2</h3>
//               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet mollitia sint suscipit, veniam quae ipsam cupiditate facere tenetur quas dolorem maiores voluptatibus sequi quasi est id, a laboriosam incidunt nam!</p>
//             </div>
//             <div className="project-images">
//               <img src={landing2} alt="Project 2 - Image 1" className="img1" />
//               <img src={services} alt="Project 2 - Image 2" className="img2" />
//             </div>
//             <div className="project-links">
//               <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">
//                 <Github size={24} />
//               </a>
//               <a href="https://your-live-link.com" target="_blank" rel="noopener noreferrer">
//                 <ExternalLink size={24} />
//               </a>
//             </div>
//           </div>

//           {/* Project 3 */}
//           <div className="project-card">
//             <div className="project-info">
//               <h3>Project 3</h3>
//               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi repudiandae ratione, perspiciatis totam ipsam facere quae velit voluptas! Accusamus aliquid, necessitatibus repellendus recusandae voluptas, ipsum molestiae quaerat optio dolorum obcaecati beatae molestias animi excepturi. Dolorem tempore commodi odio quasi quia et delectus fuga sint, doloremque a, facere non tempora. Deserunt quisquam obcaecati optio rem eligendi maxime, quod corporis dolore tempora.</p>
//             </div>
//             <div className="project-images">
//               <img src={services2} alt="Project 3" className="img1" />
//             </div>
//             <div className="project-links">
//               <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">
//                 <Github size={24} />
//               </a>
//               <a href="https://your-live-link.com" target="_blank" rel="noopener noreferrer">
//                 <ExternalLink size={24} />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;























// import React, { useEffect } from 'react';
// import './Project.css';

// import landing1 from "../assets/landing1.png";
// import landing2 from "../assets/landing2.png";
// import services from "../assets/services.png";
// import services2 from "../assets/services2.png";
// import { Github, ExternalLink } from 'lucide-react';

// const Projects = () => {
//   // useEffect(() => {
//   //   const handleScroll = () => {
//   //     const scrollY = window.scrollY;
//   //     const projectCards = document.querySelectorAll('.project-card');
      
//   //     projectCards.forEach((card, index) => {
//   //       const speed = 1.2 - index * 0.1; // Adjust speed for each card
//   //       const offset = scrollY * speed;
//   //       card.style.transform = `translateY(${offset}px)`;
//   //     });
//   //   };
  
//   //   window.addEventListener('scroll', handleScroll);
//   //   return () => window.removeEventListener('scroll', handleScroll);
//   // }, []);


//   // useEffect(() => {
//   //   const handleScroll = () => {
//   //     const scrollY = window.scrollY;
//   //     const projectCards = document.querySelectorAll('.project-card');
  
//   //     projectCards.forEach((card) => {
//   //       const baseSpeed = -0.1; // Base speed (negative for upward movement)
//   //       const offset = baseSpeed * Math.pow(scrollY, 1.5); // Increase speed exponentially
//   //       card.style.transform = `translateY(${(scrollY+900) * -0.05}px)`;
//   //     });
//   //   };
  
//   //   window.addEventListener('scroll', handleScroll);
  
//   //   return () => window.removeEventListener('scroll', handleScroll);
//   // }, []);


  
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       const projectCards = document.querySelectorAll('.project-card');
  
//       projectCards.forEach((card, index) => {
//         const baseSpeed = -0.5; // Base speed for upward movement
//         const speedMultiplier = 1 - index * 0.05; // Speed decreases for each subsequent card
        
//         // Initial offset to start the cards 100vh below the viewport
//         const initialOffset = 130 * window.innerHeight / 100; // 100vh
//         // Calculate the offset for each card based on scroll position and unique speed
//         const offset = initialOffset + scrollY * baseSpeed * speedMultiplier;
        
//         card.style.transform = `translateY(${offset}px)`;
//       });
//     };
  
//     window.addEventListener('scroll', handleScroll);
  
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);
  
  

//   return (
//     <div className="projects-container">
//       <div className="spacer"></div>
//       <div className="projects-content">
//         <div className="projects-header">
//           <h2>Explore Work</h2>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, exercitationem.</p>
//         </div>
//         <div className="projects-grid">
//           {/* Project 1 */}
//           <div className="project-card">
//             <div className="project-info">
//               <h3>Project 1</h3>
//               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam nobis nisi, fuga magni voluptatum itaque natus aut voluptates nihil molestias hic voluptas harum reprehenderit qui dolores! Tempore rerum eos distinctio quibusdam maxime eius earum sunt.</p>
//             </div>
//             <div className="project-images">
//               <img src={landing1} alt="Project 1" className="img1" />
//             </div>
//             <div className="project-links">
//               <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">
//                 <Github size={24} />
//               </a>
//               <a href="https://your-live-link.com" target="_blank" rel="noopener noreferrer">
//                 <ExternalLink size={24} />
//               </a>
//             </div>
//           </div>

//           {/* Project 2 */}
//           <div className="project-card">
//             <div className="project-info">
//               <h3>Project 2</h3>
//               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto hic ratione minima earum pariatur vitae aliquid possimus nam odit, consequuntur quasi ut magni quam ipsa repellat libero atque, non explicabo. Quasi quisquam asperiores similique minima in repellendus consequuntur accusantium quidem?</p>
//             </div>
//             <div className="project-images">
//               <img src={landing2} alt="Project 2 - Image 1" className="img1" />
//               <img src={services} alt="Project 2 - Image 2" className="img2" />
//             </div>
//             <div className="project-links">
//               <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">
//                 <Github size={24} />
//               </a>
//               <a href="https://your-live-link.com" target="_blank" rel="noopener noreferrer">
//                 <ExternalLink size={24} />
//               </a>
//             </div>
//           </div>

//           {/* Project 3 */}
//           <div className="project-card">
//             <div className="project-info">
//               <h3>Project 3</h3>
//               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, delectus repellat sequi voluptate enim hic. Earum praesentium rem saepe eligendi vero rerum voluptas inventore repellat aliquid ducimus. Placeat, expedita laudantium tempore sint nulla numquam debitis, corporis architecto eveniet repudiandae nam.</p>
//             </div>
//             <div className="project-images">
//               <img src={services2} alt="Project 3" className="img1" />
//             </div>
//             <div className="project-links">
//               <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">
//                 <Github size={24} />
//               </a>
//               <a href="https://your-live-link.com" target="_blank" rel="noopener noreferrer">
//                 <ExternalLink size={24} />
//               </a>
//             </div>
//           </div>
//           <div className="project-card">
//             <div className="project-info">
//               <h3>Project 3</h3>
//               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore dolor eos a neque nulla incidunt architecto porro voluptas ab alias.</p>
//             </div>
//             <div className="project-images">
//               <img src={services2} alt="Project 3" className="img1" />
//             </div>
//             <div className="project-links">
//               <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">
//                 <Github size={24} />
//               </a>
//               <a href="https://your-live-link.com" target="_blank" rel="noopener noreferrer">
//                 <ExternalLink size={24} />
//               </a>
//             </div>
//           </div>
//           <div className="project-card">
//             <div className="project-info">
//               <h3>Project 3</h3>
//               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis omnis recusandae laborum veritatis odit et tempora dolorem illo, dicta alias corporis minima tenetur ipsam quas qui repellat nobis corrupti modi?</p>
//             </div>
//             <div className="project-images">
//               <img src={services2} alt="Project 3" className="img1" />
//             </div>
//             <div className="project-links">
//               <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">
//                 <Github size={24} />
//               </a>
//               <a href="https://your-live-link.com" target="_blank" rel="noopener noreferrer">
//                 <ExternalLink size={24} />
//               </a>
//             </div>
//           </div>
//           <div className="project-card">
//             <div className="project-info">
//               <h3>Project 3</h3>
//               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, non dolor dolorem exercitationem autem corrupti porro distinctio in vitae mollitia reiciendis fugiat adipisci maxime iusto odit sapiente nobis vel assumenda voluptas suscipit quis? Atque ipsum, suscipit corporis accusantium animi perspiciatis.</p>
//             </div>
//             <div className="project-images">
//               <img src={services2} alt="Project 3" className="img1" />
//             </div>
//             <div className="project-links">
//               <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">
//                 <Github size={24} />
//               </a>
//               <a href="https://your-live-link.com" target="_blank" rel="noopener noreferrer">
//                 <ExternalLink size={24} />
//               </a>
//             </div>
//           </div>
         
       
          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;










































// import React, { useEffect } from 'react';
// import './Project.css';

// import landing1 from "../assets/landing1.png";
// import landing2 from "../assets/landing2.png";
// import services from "../assets/services.png";
// import services2 from "../assets/services2.png";
// import { Github, ExternalLink } from 'lucide-react';

// const Projects = () => {
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       const projectCards = document.querySelectorAll('.project-card');

//       projectCards.forEach((card, index) => {
//         const baseSpeed = -0.01; // Base speed for upward movement
//         const speedMultiplier = 2 - index * 0.01; // Speed decreases for each subsequent card

//         // Calculate offset based on scroll position and unique speed
//         const offset = scrollY * baseSpeed * speedMultiplier;
        
//         // Apply transformation to create parallax effect
//         card.style.transform = `translateY(${offset}px)`;
//       });
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className="projects-container">
//       <div className="spacer"></div>
//       <div className="projects-content">
//         <div className="projects-header">
//           <h2>Explore Work</h2>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, exercitationem.</p>
//         </div>
//         <div className="projects-grid">
//           {/* Example Project Cards */}
//           {[
//             {
//               title: "Project 1",
//               description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam aliquid maxime id assumenda pariatur minus harum saepe sit dolorum esse, itaque quisquam, atque, obcaecati laboriosam nulla veniam. Autem, quidem eum! Repellat perspiciatis dignissimos doloribus, nesciunt maxime incidunt accusantium non assumenda!",
//               image: landing1,
//             },
//             {
//               title: "Project 2",
//               description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, totam cumque numquam molestiae rerum eum at animi nulla ratione, necessitatibus laudantium fugit eaque ut, sequi quia cupiditate dolorum cum. Eligendi?",
//               images: [landing2, services],
//             },
//             {
//               title: "Project 3",
//               description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque accusantium et itaque in ipsam magni deleniti adipisci quo dolore fugit officia asperiores corrupti libero veniam aliquid doloribus omnis repudiandae iure ullam dolores veritatis, corporis aliquam ad! Ullam, beatae. Necessitatibus, omnis.",
//               image: services2,
//             },
//             // Add more projects as needed
//           ].map((project, index) => (
//             <div className="project-card" key={index}>
//               <div className="project-info">
//                 <h3>{project.title}</h3>
//                 <p>{project.description}</p>
//               </div>
//               <div className="project-images">
//                 {project.images ? (
//                   project.images.map((img, i) => <img key={i} src={img} alt={`${project.title} - Image ${i + 1}`} className={`img${i + 1}`} />)
//                 ) : (
//                   <img src={project.image} alt={project.title} className="img1" />
//                 )}
//               </div>
//               <div className="project-links">
//                 <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">
//                   <Github size={24} />
//                 </a>
//                 <a href="https://your-live-link.com" target="_blank" rel="noopener noreferrer">
//                   <ExternalLink size={24} />
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
   
//     </div>
//   );
// };

// export default Projects;































































import React, { useEffect, useRef } from 'react';
import './Project.css';

import landing1 from "../assets/landing1.png";
import landing2 from "../assets/landing2.png";
import services from "../assets/services.png";
import services2 from "../assets/services2.png";
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const headerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1 // Trigger when 10% of the element is visible
    };

    // Observer for projects header
    const headerObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-from-right');
          headerObserver.unobserve(entry.target); // Stop observing after animation triggers
        }
      });
    }, options);

    // Observer for project cards
    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-from-left');
          cardObserver.unobserve(entry.target);
        }
      });
    }, options);

    // Observe header and cards
    if (headerRef.current) headerObserver.observe(headerRef.current);
    cardRefs.current.forEach(ref => {
      if (ref) cardObserver.observe(ref);
    });

    // Add parallax effect
    const handleScroll = () => {
      const scrollY = window.scrollY;
      cardRefs.current.forEach((card, index) => {
        const baseSpeed = -0.02; // Base speed for upward movement
        // const speedMultiplier = 2 - index * 0.001; 
        const offset = scrollY * baseSpeed 
        // * 
        // speedMultiplier;
        card.style.transform = `translateY(${offset}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      headerObserver.disconnect();
      cardObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="projects-container">
      <div className="spacer"></div>
      <div className="projects-content">
        <div className="projects-header" ref={headerRef}>
          <h2>Explore Work</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, exercitationem.</p>
        </div>
        <div className="projects-grid">
          {/* Example Project Cards */}
          {[
            {
              title: "Project 1",
              description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam aliquid maxime id assumenda pariatur minus harum saepe sit dolorum esse, itaque quisquam, atque, obcaecati laboriosam nulla veniam. Autem, quidem eum! Repellat perspiciatis dignissimos doloribus, nesciunt maxime incidunt accusantium non assumenda!",
              image: landing1,
            },
            {
              title: "Project 2",
              description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, totam cumque numquam molestiae rerum eum at animi nulla ratione, necessitatibus laudantium fugit eaque ut, sequi quia cupiditate dolorum cum. Eligendi?",
              images: [landing2, services],
            },
            {
              title: "Project 3",
              description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque accusantium et itaque in ipsam magni deleniti adipisci quo dolore fugit officia asperiores corrupti libero veniam aliquid doloribus omnis repudiandae iure ullam dolores veritatis, corporis aliquam ad! Ullam, beatae. Necessitatibus, omnis.",
              image: services2,
            },
            // Add more projects as needed
          ].map((project, index) => (
            <div
              className="project-card"
              key={index}
              ref={el => cardRefs.current[index] = el}
            >
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <div className="project-images">
                {project.images ? (
                  project.images.map((img, i) => <img key={i} src={img} alt={`${project.title} - Image ${i + 1}`} className={`img${i + 1}`} />)
                ) : (
                  <img src={project.image} alt={project.title} className="img1" />
                )}
              </div>
              <div className="project-links">
                <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">
                  <Github size={24} />
                </a>
                <a href="https://your-live-link.com" target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={24} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
