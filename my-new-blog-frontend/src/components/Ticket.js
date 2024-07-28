import React from 'react';
import './Ticket.css'; // Make sure to create this CSS file

const Ticker = ({ newsItems }) => {
  return (
    <div className="ticker-container">
      <div className="ticker">
        {newsItems.map((item, index) => (
          <div key={index} className="ticker-item">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
