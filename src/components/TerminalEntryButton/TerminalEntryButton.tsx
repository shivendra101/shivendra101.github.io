import React from 'react';
import './TerminalEntryButton.scss';

const TerminalEntryButton: React.FC = () => {
    return (
        <div className="terminal-entry-button">
           <button>Enter vault</button>
        </div>
    );
}

export default React.memo(TerminalEntryButton);