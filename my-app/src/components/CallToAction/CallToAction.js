import React from 'react';
import './CallToAction.css'; // Make sure to create a CallToAction.css in the same directory

function CallToAction() {
  return (
    <div className="call-to-action">
      <p className="cta-text">Do you want to join our community?</p>
      <button className="cta-button">Let's Go</button>
    </div>
  );
}

export default CallToAction;
