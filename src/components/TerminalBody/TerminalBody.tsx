import React, { memo } from "react";

import './TerminalBody.scss';
import { TerminalBodyProps } from "../../types/propTypes";
import TerminalIntro from "../TerminalIntro/TerminalIntro";
import TerminalContent from "../TerminalContent/TerminalContent";

const TerminalBody: React.FC<TerminalBodyProps> = ({ toggleTerminal, showIntro }: TerminalBodyProps) => {
    return (
        <div className="terminal-body">
            {showIntro ? (
                <TerminalIntro toggleTerminal={toggleTerminal} /> 
            ) : (
                <TerminalContent toggleTerminal={toggleTerminal} />
            )}
        </div>
    );
}

export default memo(TerminalBody);