import React from 'react';
import './MainContent.css'; // This is assuming your CSS file is named MainContent.css and is in the same directory as this JS file.

function MainContent() {
  return (
    <div className="main-content">
      <h1>CommunityConnect</h1>
      <div className="features">
        <p>Team Space Interaction: See how active each team member is in our collaborative space.</p>
        <p>Project Contributions: Track who's driving progress on ongoing projects.</p>
        <p>Emotion in Text: We analyze text to convey emotions better, ensuring clear communication.</p>
        <p>Visual Insights: Dive into data visualizations for a snapshot of team dynamics.</p>
      </div>
      <div className="call-to-action">
        <p>Join us in fostering collaboration, productivity, and positivity in our community!</p>
        <button className="join-button">Do you want to join our community?</button>
      </div>
    </div>
  );
}

export default MainContent;
