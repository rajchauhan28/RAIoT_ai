import React from 'react';
import './AboutSection.css';

function AboutSection() {
  return (
    <section className="about-section">
      {/* Title */}
      <h2 className="section-title">Real-Time ISL Translator</h2>
      
      {/* Subtitle */}
      <h3 className="section-subtitle">Bridging Communication Gaps</h3>
      
      {/* Description */}
      <p className="section-description">
        This project aims to develop a real-time Indian Sign Language (ISL) to multilingual translation system. 
        Our goal is to empower the deaf community in India by breaking down communication barriers in education, 
        employment, healthcare, and social interactions.
      </p>
      
      {/* Hackathon Context */}
      <div className="hackathon-context">
        <p>
          Developed for [Hackathon Name/Date] - A step towards social inclusion and accessibility.
        </p>
      </div>
      
      {/* AI Status */}
      <div className="ai-status">
        <p>
          <strong>Note:</strong> The AI backend for real-time sign recognition and translation is currently under development by our team.
        </p>
      </div>
      
      {/* Future Enhancements Section */}
      <div className="future-enhancements">
        <h3 className="enhancements-title">Future Enhancements</h3>
        <div className="enhancements-content">
          <h4 className="priority-title">P1 - High Priority (Next Steps):</h4>
          <ul className="enhancements-list">
            <li>Implement actual AI backend integration (WebSockets for real-time video stream/frame submission and translation reception)</li>
            <li>Add real-time audio output for translations (using Web Speech API or similar)</li>
            <li>Implement dynamic output language selection (English, Hindi, regional languages)</li>
            <li>Improve AI connection status (real-time feedback, retry logic)</li>
          </ul>
          
          <h4 className="priority-title">P2 - Stretch Goals (Future Ideas):</h4>
          <ul className="enhancements-list">
            <li>Enhance error handling (e.g., specific messages for camera access, AI errors, network issues)</li>
            <li>Add user feedback mechanism for incorrect translations</li>
            <li>Implement session history for reviewed translations</li>
            <li>Introduce accessibility features (e.g., keyboard navigation, high contrast mode)</li>
            <li>Refine UI/UX with more advanced animations or micro-interactions</li>
            <li>Consider mobile app versions (React Native/Flutter)</li>
          </ul>
          
          <h4 className="priority-title">General:</h4>
          <ul className="enhancements-list">
            <li>Expand ISL dataset for improved recognition accuracy</li>
            <li>Optimize latency for real-time experience</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;