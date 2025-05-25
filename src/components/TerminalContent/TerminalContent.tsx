import React from "react";
import './TerminalContent.scss';
import { ButtonSize } from "../../types/propTypes";
import TerminalButton from "../TerminalButton/TerminalButton";

interface TerminalContentProps {
    toggleTerminal: () => void;
}

const TerminalContent: React.FC<TerminalContentProps> = ({ toggleTerminal }) => {
    return (
        <div className="terminal-content">
            <div className="terminal-content-top">
                <span className="terminal-content-text back-btn" onClick={toggleTerminal}> {'<-'} </span>
                <span className="terminal-content-text">Welcome to the terminal body!</span>
                <span></span>
            </div>
            <div className="terminal-content-main">
                <span className="terminal-content-text">This is where the magic happens.</span>
            </div>
        </div>
    );
};

export default React.memo(TerminalContent);