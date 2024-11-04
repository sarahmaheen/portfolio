// import React from 'react';
// import './NewAboutPage.css';
// import aboutPhoto from '../assets/NewAboutPage/naqaab-look.jpeg'; // Replace with actual image path

// const NewAboutPage = () => {
//   return (
//     <div className="about-page">
//       {/* Spacer section */}
//       <div className="spacer-section"> jjnjj</div>
// {/* adding heading section  */}
// <div class="main-about-content">
//     <div class="heading-section">
//       <h1>About Us</h1>
//       <p>Lorem ipsum dolor sit amet.</p>
//     </div>

//     <div class="content-section">
//       <div class="about-photo">
//         <img src={aboutPhoto} alt="About" />
//       </div>
//       <div class="about-text">
//         <h2>Our Story</h2>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non diam nunc.</p>
//         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, a modi? Dolorem, quod odio! Sint ipsum corrupti hic quod, nemo fuga et tempore debitis alias ipsam fugit amet cupiditate illo eius harum nihil assumenda accusamus voluptatem at nesciunt laborum commodi id. Iure quae obcaecati illo, nulla necessitatibus nemo maxime enim quibusdam, qui, debitis veritatis dolorum voluptatem ipsum ab animi sit dolorem quos. Ut non dolore vero maiores explicabo mollitia voluptates repellendus consequatur est ducimus sit obcaecati eum aliquid similique, veritatis nobis eaque quis saepe dolores quas ipsa perferendis vel. Quia fuga accusamus temporibus rerum natus! Voluptas, temporibus aperiam! Non, culpa.</p>
//       </div>
//     </div>
//   </div>
//     </div>
//   );
// };

// export default NewAboutPage;
































// import React, { useEffect } from 'react';
// import './NewAboutPage.css';
// import aboutPhoto from '../assets/NewAboutPage/naqaab-look.jpeg'; // Replace with actual image path

// const NewAboutPage = () => {
  
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrolled = window.scrollY;
//       const heading = document.querySelector('.heading-section');
//       const photo = document.querySelector('.about-photo');

//       // Adjust the scroll speed
//       heading.style.transform = `translateY(${scrolled * 0.5}px)`;
//       photo.style.transform = `translateY(${scrolled * 0.5}px)`;
//     };

//     window.addEventListener('scroll', handleScroll);
    
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div className="about-page">
//       {/* Spacer section */}
//       <div className="spacer-section"> jjnjj</div>
//       {/* adding heading section */}
//       <div className="main-about-content">
//         <div className="heading-section">
//           <h1>About Us</h1>
//           <p>Lorem ipsum dolor sit amet.</p>
//         </div>

//         <div className="content-section">
//           <div className="about-photo">
//             <img src={aboutPhoto} alt="About" />
//           </div>
//           <div className="about-text">
//             <h2>Our Story</h2>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non diam nunc.</p>
//             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, a modi? Dolorem, quod odio! Sint ipsum corrupti hic quod, nemo fuga et tempore debitis alias ipsam fugit amet cupiditate illo eius harum nihil assumenda accusamus voluptatem at nesciunt laborum commodi id. Iure quae obcaecati illo, nulla necessitatibus nemo maxime enim quibusdam, qui, debitis veritatis dolorum voluptatem ipsum ab animi sit dolorem quos. Ut non dolore vero maiores explicabo mollitia voluptates repellendus consequatur est ducimus sit obcaecati eum aliquid similique, veritatis nobis eaque quis saepe dolores quas ipsa perferendis vel. Quia fuga accusamus temporibus rerum natus! Voluptas, temporibus aperiam! Non, culpa.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewAboutPage;

























import React, { useEffect } from 'react';
import './NewAboutPage.css';
import aboutPhoto from '../assets/NewAboutPage/naqaab-look.jpeg'; // Replace with actual image path

const NewAboutPage = () => {
  
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const heading = document.querySelector('.heading-section');
      const photo = document.querySelector('.about-photo');
      const content = document.querySelector('.about-text');


      // Adjust the scroll speed to 1.2 times the normal speed
      heading.style.transform = `translateY(${scrolled * -0.09}px)`;
      photo.style.transform = `translateY(${scrolled * -0.2}px)`;
      content.style.transform = `translateY(${scrolled * -0.1}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="about-page">
      {/* Spacer section */}
      <div className="spacer-section"> jjnjj</div>
      {/* adding heading section */}
      <div className="main-about-content">
        <div className="heading-section">
          <h1>About Us</h1>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>

        <div className="content-section">
          <div className="about-photo">
            <img src={aboutPhoto} alt="About" />
          </div>
          <div className="about-text">
            <h2>Our Story</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non diam nunc.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, a modi? Dolorem, quod odio! Sint ipsum corrupti hic quod, nemo fuga et tempore debitis alias ipsam fugit amet cupiditate illo eius harum nihil assumenda accusamus voluptatem at nesciunt laborum commodi id. Iure quae obcaecati illo, nulla necessitatibus nemo maxime enim quibusdam, qui, debitis veritatis dolorum voluptatem ipsum ab animi sit dolorem quos. Ut non dolore vero maiores explicabo mollitia voluptates repellendus consequatur est ducimus sit obcaecati eum aliquid similique, veritatis nobis eaque quis saepe dolores quas ipsa perferendis vel. Quia fuga accusamus temporibus rerum natus! Voluptas, temporibus aperiam! Non, culpa.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewAboutPage;
