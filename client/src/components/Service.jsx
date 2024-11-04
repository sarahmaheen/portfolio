import React from 'react';
import website from "../assets/services/websites-service-video.mp4";
import packing from "../assets/services/packing.mp4"; // Add the second video import
import webDesign from "../assets/services/web-design.mp4"; // Replace with your third video path
import './Service.css';

const Service = () => {
  return (
    <div className="service-container">
      
      {/* Left Side Spacer */}
      <div className="service-spacer">Spacer</div>
      
      {/* Main Content Section */}
      <div className="service-content">
        <div className='background-text'>
        <h4 className='background'>WEb  
         
        </h4>
        <h4 className='background'>DEsiGn </h4>
        <h4 className='background'>create</h4>
        
        </div>
      
        {/* Heading Section */}
        {/* <div className="service-heading">
          <h4>Creating a website that looks great, gets found on Google, grows your email list & books clients isn’t easy.</h4>
          <h5>If it was, everyone would have one.</h5>
          <p>But I’m sure you’ve come across plenty of websites that look outdated, are impossible to find what you’re looking for, and all-round make you question whether you trust the business.</p>

          <h5>Yep, I’ve seen it all, and I want yours to be different.</h5>
          <p>You started your business to share your magic with the world, not to spend your time trying to figure out #AllTheThings for a website that actually grows your email list and books you clients, so how about you leave me to handle the design and tech stuff so you can do the thing you actually love to do instead?</p>
          <p>I create beautiful and profitable websites for women in service-based businesses. If you want a website that looks great, gets found on Google and turns your visitors into subscribers and clients, I’ve got you covered!</p>
          <p>Whether you need a full website redesign or you want to freshen things up with a VIP design day, I can help!</p>
        </div> */}


<div className="service-heading-box service-grid-container">
  <h4 className="heading-title service-grid-item span-3">Creating a website that looks great, gets found on Google, grows your email list & books clients isn’t easy.</h4>
  <h5 className="sub-heading service-grid-item span-3">If it was, everyone would have one.</h5>
  <p className="paragraph service-grid-item span-3">But I’m sure you’ve come across plenty of websites that look outdated, are impossible to find what you’re looking for, and all-round make you question whether you trust the business.</p>

  <h5 className="sub-heading service-grid-item span-3">Yep, I’ve seen it all, and I want yours to be different.</h5>
  <p className="paragraph service-grid-item span-3">You started your business to share your magic with the world, not to spend your time trying to figure out #AllTheThings for a website that actually grows your email list and books you clients, so how about you leave me to handle the design and tech stuff so you can do the thing you actually love to do instead?</p>

  <p className="paragraph service-grid-item span-3">Whether you need a full website redesign or you want to freshen things up with a VIP design day, I can help!</p>

  <p className="paragraph service-grid-item span-3">I create beautiful and profitable websites for women in service-based businesses. If you want a website that looks great, gets found on Google and turns your visitors into subscribers and clients, I’ve got you covered!</p>
</div>

        
        {/* Inner Content Section */}
        <div className="service-inner">
          {/* Service Box 1 */}
          <div className="service-box">
            <div className="service-box-video">
              <video
                autoPlay
                muted
                loop
                className="video-style" // Added class for CSS styling
              >
                <source src={website} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="service-box-content">
            <div className="main-content">
                <h4>Web Application</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis pariatur facere similique? Rerum, eaque asperiores sit a molestiae voluptatum natus quasi voluptatibus. Molestiae alias tempora voluptatem! Aliquam nesciunt nemo aspernatur.</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam est inventore velit quasi iste. Ea ad, obcaecati quia dolore doloremque aliquid tempora quod, officiis iusto ex recusandae fugiat nisi dolorum facilis distinctio assumenda ut. Minus in culpa doloremque doloribus laboriosam voluptatum amet, incidunt quibusdam libero voluptatem, sapiente dicta quidem sunt rem velit. Eaque velit totam labore repudiandae quia mollitia aut.</p>
              </div>
              <button>Explore more</button>
            </div>
          </div>

          {/* Service Box 2 */}
          <div className="service-box reverse">
            <div className="service-box-video">
              <video
                autoPlay
                muted
                loop
                className="video-style" // Ensure consistency with CSS class
              >
                <source src={packing} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="service-box-content">
              <div className="main-content">
                <h4>Web Application</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis pariatur facere similique? Rerum, eaque asperiores sit a molestiae voluptatum natus quasi voluptatibus. Molestiae alias tempora voluptatem! Aliquam nesciunt nemo aspernatur.</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam est inventore velit quasi iste. Ea ad, obcaecati quia dolore doloremque aliquid tempora quod, officiis iusto ex recusandae fugiat nisi dolorum facilis distinctio assumenda ut. Minus in culpa doloremque doloribus laboriosam voluptatum amet, incidunt quibusdam libero voluptatem, sapiente dicta quidem sunt rem velit. Eaque velit totam labore repudiandae quia mollitia aut.</p>
              </div>
              <button>Explore more</button>
            </div>
          </div>

          {/* Service Box 3 */}
          <div className="service-box">
            <div className="service-box-video">
              <video
                autoPlay
                muted
                loop
                className="video-style" // Ensure consistency with CSS class
              >
                <source src={webDesign} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="service-box-content">
            <div className="main-content">
                <h4>Web Application</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis pariatur facere similique? Rerum, eaque asperiores sit a molestiae voluptatum natus quasi voluptatibus. Molestiae alias tempora voluptatem! Aliquam nesciunt nemo aspernatur.</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam est inventore velit quasi iste. Ea ad, obcaecati quia dolore doloremque aliquid tempora quod, officiis iusto ex recusandae fugiat nisi dolorum facilis distinctio assumenda ut. Minus in culpa doloremque doloribus laboriosam voluptatum amet, incidunt quibusdam libero voluptatem, sapiente dicta quidem sunt rem velit. Eaque velit totam labore repudiandae quia mollitia aut.</p>
              </div>
              <button>Explore more</button>
           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
