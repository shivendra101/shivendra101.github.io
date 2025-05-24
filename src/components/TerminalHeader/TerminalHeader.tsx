import React from "react";
import './TerminalHeader.scss';
import logo from "../../assets/icons/logo.svg";

interface TerminalHeaderProps {
  title?: string;
}

const TerminalHeader: React.FC<TerminalHeaderProps> = ({ title = "Shivendra Pratap Singh" }) => {
  return (
    <div className="terminal-header">
      <div className="logo-container">
        <img src={logo} alt="Logo" />
      </div>
      <h1 className="header-title">{title}</h1>
    </div>
  );
};

export default TerminalHeader;