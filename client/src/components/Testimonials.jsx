import React, { useState, useEffect, useRef } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae libero temporibus alias aut rem totam repellendus cumque! Eveniet assumenda cupiditate iusto aut! In unde blanditiis aut repellat minima eaque delectus.",
    name: "__John Doe",
  },
  {
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae libero temporibus alias aut rem totam repellendus cumque! Eveniet assumenda cupiditate iusto aut! In unde blanditiis aut repellat minima eaque delectus. In unde blanditiis aut repellat minima eaque delectus.",
    name: "__Jane Smith",
  },
  {
    feedback:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio praesentium itaque non rerum culpa, consequuntur cumque quo minima cum dicta laborum impedit quia nobis quae nulla nisi? Blanditiis harum nihil vero amet, sed eos minus corporis quod tenetur, architecto sunt atque! Esse maiores illum ipsum magnam enim earum. Voluptatibus, sint.",
    name: "__Alice Johnson",
  },
];

const Testimonials = () => {
  const headingRef = useRef(null);
  const sliderRef = useRef(null);
  const observerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the container
      threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const callback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          headingRef.current.classList.add('slide-in');
          sliderRef.current.classList.add('slide-in');
          observerRef.current.disconnect(); // Stop observing after animation
        }
      });
    };

    observerRef.current = new IntersectionObserver(callback, options);
    if (headingRef.current) {
      observerRef.current.observe(headingRef.current); // Observe the heading
    }

    return () => {
      if (observerRef.current && headingRef.current) {
        observerRef.current.unobserve(headingRef.current); // Clean up
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="testimonials-page">
      <div className="spacer"></div>
      <div className="content">
        <div className="content-inner">
          <h2 ref={headingRef}>What Our Customers Say</h2>
          <div ref={sliderRef} className="slider">
            <div
              className="slide"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div className="testimonial" key={index}>
                  <p>{testimonial.feedback}</p>
                  <h4>{testimonial.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="buttons">
          <button onClick={prevSlide}>&lt; Prev</button>
          <button onClick={nextSlide}>Next &gt;</button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
