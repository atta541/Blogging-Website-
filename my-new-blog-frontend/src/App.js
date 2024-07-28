import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './Routes'; // Adjust the path if necessary
import './App.css';
// import Ticker from './components/Ticker';
import Ticker from './components/Ticket';
import GenAIPostsPage from './pages/GenAIPostsPage';
// src/index.js or src/App.js
import './index.css'; // Adjust the path if necessary


function App() {
  const newsItems = [
    'Breaking News: New advancements in AI technology announced.',
    'Cryptocurrency market hits new all-time high.',
    'Weather update: Heatwave expected in the northern hemisphere.',
    'Sports: Local team wins championship.',
    'Breaking News: New advancements in AI technology announced.',
    'Cryptocurrency market hits new all-time high.',
    'Weather update: Heatwave expected in the northern hemisphere.',
    'Sports: Local team wins championship.',
  ];
// this is app.js


  return (
    <Router>
      <div className="App">
        <Header />
        <div className="ticker-container">
          <Ticker newsItems={newsItems} />
        </div>
        <main>
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
