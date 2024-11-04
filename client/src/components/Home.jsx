import React, { useEffect } from "react";
import landing1 from '../assets/landing1.png';
import landing2 from '../assets/landing2.png';
import services from '../assets/services.png';
import services2 from '../assets/services2.png';
import About from "./About";
import "./Home.css";

const Home = () => {
  useEffect(() => {
    const slideImages = document.querySelectorAll("img");

    const next = document.querySelector(".next");
    const prev = document.querySelector(".prev");

    let counter = 0;
    let deleteInterval;

    // Slide next
    function slideNext() {
      slideImages[counter].style.animation = "next1 0.5s ease-in forwards";
      if (counter >= slideImages.length - 1) {
        counter = 0;
      } else {
        counter++;
      }
      slideImages[counter].style.animation = "next2 0.5s ease-in forwards";
    }

    // Slide prev
    function slidePrev() {
      slideImages[counter].style.animation = "prev1 0.5s ease-in forwards";
      if (counter === 0) {
        counter = slideImages.length - 1;
      } else {
        counter--;
      }
      slideImages[counter].style.animation = "prev2 0.5s ease-in forwards";
    }

    // Auto sliding
    function autoSliding() {
      deleteInterval = setInterval(() => {
        slideNext();
      }, 6000);
    }
    autoSliding();

    // Stop auto sliding when mouse is over
    const container = document.querySelector(".slide-container");
    container.addEventListener("mouseover", () => clearInterval(deleteInterval));

    // Resume sliding when mouse is out
    container.addEventListener("mouseout", autoSliding);

    // Event listeners for next/prev buttons
    next.addEventListener("click", slideNext);
    prev.addEventListener("click", slidePrev);

    // Clean up event listeners on unmount
    return () => {
      next.removeEventListener("click", slideNext);
      prev.removeEventListener("click", slidePrev);
      container.removeEventListener("mouseover", () => clearInterval(deleteInterval));
      container.removeEventListener("mouseout", autoSliding);
    };
  }, []);

  return (
    
      
     
<>
    
      <div className="slides-outer-container">
      <div className="text-content">
        <h3>Welcome to Our Services</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aperiam cupiditate, quae blanditiis in, unde explicabo ratione est dignissimos ipsa obcaecati corrupti rem assumenda? Distinctio sit reiciendis nam nisi quibusdam.</p>
      </div>
        <div className="slide-container">
          <div className="slides">
            <img src="" alt="" className="active" />
            <img src={landing1} alt="Landing 1" />
            <img src={landing2} alt="Landing 2" />
            <img src={services} alt="Services 1" />
            <img src={services2} alt="Services 2" />
          </div>

          <div className="buttons">
            <span className="next">&#10095;</span>
            <span className="prev">&#10094;</span>
          </div>
        </div>
       
      </div>
     <About/>
     </>
  );
};

export default Home;
