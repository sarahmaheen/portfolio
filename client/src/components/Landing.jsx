import React, { useEffect, useRef } from 'react';
import manage from "../assets/aboutpage/manage.png";
import laptop from "../assets/aboutpage/laptop.png";
import happyballoon from "../assets/aboutpage/happyballoon.png";
import money from "../assets/aboutpage/money.png";
import text from "../assets/aboutpage/text.png";
import './Landing.css';
import NewAboutPage from './NewAboutPage';
import Service from './Service';
import Projects from './Project';
import Testimonials from './Testimonials';
import Footer from './Footer';

const LandingPage = () => {
  const gridRef = useRef(null);
  const speed = 1; // Scrolling speed
  const items = [
    { src: manage, alt: "Manage" },
    { src: laptop, alt: "Laptop" },
    { src: happyballoon, alt: "Balloon" },
    { src: money, alt: "Money" },
    { src: text, alt: "Text" }
  ];

  useEffect(() => {
    const grid = gridRef.current;

    // Clone the grid items for infinite scrolling
    const cloneItems = () => {
      items.forEach(item => {
        const imgElement = document.createElement('div');
        imgElement.className = 'grid-item';
        imgElement.innerHTML = `<img src="${item.src}" alt="${item.alt}"/>`;
        grid.appendChild(imgElement);
      });
    };

    cloneItems();

    const scrollInterval = setInterval(() => {
      if (grid) {
        grid.scrollTop += speed; // Change to vertical scroll

        // Reset scroll to start when reaching the end
        if (grid.scrollTop >= grid.scrollHeight / 2) {
          grid.scrollTop = 0; // Reset to start
        }
      }
    }, 10);

    // Cleanup function to prevent memory leaks
    return () => clearInterval(scrollInterval);
  }, []);

  const title = "Business Development & Branding";

  return (
    <>
    <div className="main-container">
      <div className="spacer"></div>
      <div className="text-container">
       
        <div className="second-text-container">
        <h2>
          {title.split("").map((letter, index) => (
            <span key={index}>{letter}</span> // Wrap each letter in a span
          ))}
        </h2>
        <p>For Entrepreneurs, Executives, and Innovators seeking to elevate their online presence and attract more clients.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea accusantium ex, minima veritatis dolorem dolores sapiente deserunt libero mollitia? Veritatis, obcaecati quas? Id labore autem, facere consequatur perferendis quidem molestias voluptas ex aperiam, quam itaque repellendus<span>molestiae atque libero pariatur!</span> </p>
        </div>
       
      </div>
      {/* <div className="text-container-2"></div> */}
      <div className="section content-grid">
        <div className="image-grid" ref={gridRef}>
          {items.map((item, index) => (
            <div className="grid-item" key={index}>
              <img src={item.src} alt={item.alt} />
            </div>
          ))}
          {/* Duplicate items for infinite scrolling */}
          {items.map((item, index) => (
            <div className="grid-item" key={`duplicate-${index}`}>
              <img src={item.src} alt={`${item.alt} Duplicate`} />
            </div>
          ))}
        </div>
      </div>
    </div>
    {/* <NewAboutPage/>
    <Service/>
    <Projects/>
    <Testimonials/>
    <Footer/> */}
    </>
  );
};

export default LandingPage;
