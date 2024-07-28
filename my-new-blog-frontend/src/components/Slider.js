import React, { useState, useEffect } from 'react';
import './Slider.css'; // Styles for the slider

const Slider = () => {
  const images = [
    // 'https://www.visualcapitalist.com/wp-content/uploads/2023/01/generative-ai-SHARE-1000x600.png',
    'https://www.alwin.io/siteimage/how-ai-predict-crypto-market-trends.webp',

    'https://quiq.com/wp-content/uploads/2023/04/Generative-AI-vs-LLMs-Social.png',
    // 'https://www.india.com/wp-content/uploads/2021/05/What-is-cryptocurrency.jpg',
    // 'https://i.ytimg.com/vi/U1RcSHJvw8w/maxresdefault.jpg',
    'https://i.ytimg.com/vi/-XchZ9hGEU0/maxresdefault.jpg',
    
    'https://coincodex.com/en/resources/images/admin/news/6-best-ai-crypto-coi/best-ai-crypto-coins.png:resizeboxcropjpg?1200x650.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Auto scroll to the next image every 2 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2500);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);

  const handleSlideClick = (index) => {
    // Define the routes for each index
    const routes = ['/gen-ai', '/gen-ai', '/crypto', '/crypto'];
    window.location.href = routes[index]; // Navigate to the corresponding route
  };

  return (
    <div className="slider-container">
      <div className="slider">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentImageIndex ? 'active' : ''}`}
            onClick={() => handleSlideClick(index)} // Call handleSlideClick on click
          >
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
