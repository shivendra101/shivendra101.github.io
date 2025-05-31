import React, { useEffect, useState, useRef } from 'react';
import Draggable from 'react-draggable';
import './SkillsPopup.scss';
import SkillsDisplay from '../SkillsDisplay/SkillsDisplay';
import { useTheme } from '../../contexts/ThemeContext';

interface SkillsPopupProps {
  onClose: () => void;
}

const SkillsPopup: React.FC<SkillsPopupProps> = ({ onClose }) => {
  const nodeRef = useRef(null);    

  const handleClickOutside = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target.closest('.skills-popup-content')) {
      onClose();
    }
  };


  return (
    <div className={`skills-popup-overlay`}>
      <div className="animation-wrapper">
        <Draggable 
          handle=".popup-header"
          bounds="parent"
          cancel=".close-button"
          nodeRef={nodeRef}
          defaultPosition={{x: 0, y: 0}}
        >
          <div ref={nodeRef} className="skills-popup-content">
            <div className="popup-header">
              <div className="header-decoration left"></div>
              <h2>TECHNICAL SKILLS ASSESSMENT</h2>
              <div className="header-decoration right"></div>
            </div>
            
            <button className="close-button" onClick={onClose}>×</button>
            
            <div className="popup-body">
              <SkillsDisplay />
            </div>
            
            <div className="popup-footer">
              <div className="footer-decoration"></div>
              <div className="footer-text">SKILL SET ANALYSIS // LAST UPDATE: 06/01/2025</div>
              <div className="footer-decoration"></div>
            </div>
          </div>
        </Draggable>
      </div>
    </div>
  );
};

export default SkillsPopup;