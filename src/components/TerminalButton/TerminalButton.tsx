import React from 'react';
import './TerminalButton.scss';
import { TerminalButtonProps } from '../../types/propTypes';

const TerminalButton: React.FC<TerminalButtonProps> = ({text, size, toggleTerminal}: TerminalButtonProps) => {
    return (
        <div onClick={toggleTerminal} className={`terminal-entry-button ${size}`}>
           <button>{text}</button>
        </div>
    );
}

export default React.memo(TerminalButton);