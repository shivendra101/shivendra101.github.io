import React from "react";
import './Terminal.scss';
import TerminalIntro from "../TerminalIntro/TerminalIntro";
const Terminal: React.FC = () => {
	return <div className="terminal-container">
        <TerminalIntro />
    </div>
}

export default Terminal;