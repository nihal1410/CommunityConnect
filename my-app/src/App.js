import React from 'react';
import Header from '/Users/nihalmahansaria/Desktop/CommunityConnect/my-app/src/components/Header/Header.js';
import MainContent from '/Users/nihalmahansaria/Desktop/CommunityConnect/my-app/src/components/MainContent/MainContent.js';
import CallToAction from '/Users/nihalmahansaria/Desktop/CommunityConnect/my-app/src/components/CallToAction/CallToAction.js';
import Footer from '/Users/nihalmahansaria/Desktop/CommunityConnect/my-app/src/components/Footer/Footer.js';
import './App.css'; // Main styling file for the app, if you have additional global styles

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
