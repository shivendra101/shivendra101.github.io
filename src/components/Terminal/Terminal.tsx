import React from "react";
import './Terminal.scss';
import TerminalBody from "../TerminalBody/TerminalBody";
import TerminalHeader from "../TerminalHeader/TerminalHeader";

const Terminal: React.FC = () => {
    const [showIntro, setShowIntro] = React.useState(true);

    const toggleTerminal = () => setShowIntro(!showIntro);

    return (
        <div className="terminal-container">
            <TerminalHeader />
            <TerminalBody 
                toggleTerminal={toggleTerminal} 
                showIntro={showIntro} 
            />
        </div>
    );
}

export default Terminal;