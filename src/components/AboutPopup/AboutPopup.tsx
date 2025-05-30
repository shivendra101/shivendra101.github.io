import React, { useRef } from 'react';
import Draggable from 'react-draggable';
import './AboutPopup.scss';
import { useTheme } from '../../contexts/ThemeContext';

interface AboutPopupProps {
  onClose: () => void;
}

const AboutPopup: React.FC<AboutPopupProps> = ({ onClose }) => {
  const { theme } = useTheme();
  const nodeRef = useRef(null);

  return (
    <div className={`about-popup-overlay`}>
      <div className="animation-wrapper">
        <Draggable 
          handle=".popup-header"
          bounds="parent"
          cancel=".close-button"
          nodeRef={nodeRef}
          defaultPosition={{x: 0, y: 0}}
        >
          <div ref={nodeRef} className="about-popup-content">
            <div className="popup-header">
              <div className="header-decoration left"></div>
              <h2>CLASSIFIED PERSONNEL FILE</h2>
              <div className="header-decoration right"></div>
              <div className="drag-handle-indicator">DRAG TO REPOSITION</div>
            </div>
            
            <button className="close-button" onClick={onClose}>×</button>
            
            <div className="popup-body">
              <div className="identity-section">
                <div className="profile-picture-container">
                  <div className="profile-picture">
                    <div className="scan-line"></div>
                  </div>
                  <div className="access-level">
                    <span>ACCESS LEVEL:</span>
                    <span className="level">ALPHA</span>
                  </div>
                </div>
                
                <div className="identity-details">
                  <div className="detail-row">
                    <span className="label">NAME:</span>
                    <span className="value">SHIVENDRA PRATAP SINGH</span>
                  </div>
                  <div className="detail-row">
                    <span className="label">DESIGNATION:</span>
                    <span className="value">FULL STACK DEVELOPER</span>
                  </div>
                  <div className="detail-row">
                    <span className="label">STATUS:</span>
                    <span className="value status-active">ACTIVE</span>
                  </div>
                  <div className="detail-row">
                    <span className="label">LOCATION:</span>
                    <span className="value">CLASSIFIED</span>
                  </div>
                </div>
              </div>
              
              <div className="biometric-data">
                <h3>PROFILE ANALYSIS</h3>
                <div className="data-visualization">
                  <div className="data-bar"></div>
                  <div className="data-bar"></div>
                  <div className="data-bar"></div>
                  <div className="data-bar"></div>
                  <div className="data-bar"></div>
                </div>
              </div>
              
              <div className="about-content">
                <h3>SUBJECT BACKGROUND</h3>
                <p>
                  A seasoned software engineer with expertise in modern web technologies. 
                  Specializes in creating elegant, user-centric digital experiences using 
                  React, TypeScript, and Node.js. Demonstrates exceptional problem-solving 
                  capabilities and a deep understanding of software architecture principles.
                </p>
                <p>
                  Subject has shown remarkable ability to adapt to rapidly evolving technological 
                  landscapes while maintaining high code quality standards. Known for turning complex 
                  requirements into intuitive user interfaces.
                </p>
              </div>
            </div>
            
            <div className="popup-footer">
              <div className="footer-decoration"></div>
              <div className="footer-text">TOP SECRET // SCI // NOFORN</div>
              <div className="footer-decoration"></div>
            </div>
          </div>
        </Draggable>
      </div>
    </div>
  );
};

export default AboutPopup;