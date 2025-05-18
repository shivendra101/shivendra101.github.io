import React from "react";
import './Terminal.scss';
import TerminalHeader from "../TerminalHeader/TerminalHeader";

const Terminal: React.FC = () => {
	return <div className="terminal-container">
        <TerminalHeader />
    </div>
}

export default Terminal;