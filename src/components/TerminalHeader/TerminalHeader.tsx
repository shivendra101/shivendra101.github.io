import React from "react";
import './TerminalHeader.scss';
import logo from "../../assets/icons/logo.svg";
import { useTheme } from "../../contexts/ThemeContext";

interface TerminalHeaderProps {
  title?: string;
}

const TerminalHeader: React.FC<TerminalHeaderProps> = ({ title = "Shivendra Pratap Singh" }) => {
  const { toggleTheme } = useTheme();
  
  return (
    <div className="terminal-header">
      <div className="header-left">
        <div className="logo-container">
          <img src={logo} alt="Logo" />
        </div>
        <h1 className="header-title">{title}</h1>
      </div>
      <div className="header-right">
        <button className="shuffle-mood-button" onClick={toggleTheme}>
          Shuffle mood
        </button>
      </div>
    </div>
  );
};

export default TerminalHeader;