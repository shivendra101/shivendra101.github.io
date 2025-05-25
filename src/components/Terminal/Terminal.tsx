import React from "react";
import './Terminal.scss';
import TerminalBody from "../TerminalBody/TerminalBody";
import TerminalHeader from "../TerminalHeader/TerminalHeader";
import { useTheme } from "../../contexts/ThemeContext";

const Terminal: React.FC = () => {
    const [showIntro, setShowIntro] = React.useState(true);
    const { theme } = useTheme();

    const toggleTerminal = () => setShowIntro(!showIntro);

    return (
        <div className={`terminal-container theme-${theme}`}>
            <TerminalHeader />
            <TerminalBody 
                toggleTerminal={toggleTerminal} 
                showIntro={showIntro} 
            />
        </div>
    );
}

export default Terminal;