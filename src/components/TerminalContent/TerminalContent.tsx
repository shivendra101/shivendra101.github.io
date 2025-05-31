import React from "react";
import { useTerminalContent } from "../../hooks/useTerminal";
import AboutPopup from "../AboutPopup/AboutPopup";
import SkillsPopup from "../SkillsPopup/SkillsPopup";
import './TerminalContent.scss';

interface TerminalContentProps {
    toggleTerminal: () => void;
}

const TerminalContent: React.FC<TerminalContentProps> = ({ toggleTerminal }) => {
    const {
        commandHistory,
        currentCommand,
        setCurrentCommand,
        handleCommandSubmit,
        handleTerminalClick,
        inputRef,
        terminalMainRef,
        showAboutPopup,
        showSkillsPopup,
        closeAboutPopup,
        closeSkillsPopup
    } = useTerminalContent();

    return (
        <div className="terminal-content">
            <div className="terminal-content-top">
                <span className="terminal-content-text back-btn" onClick={toggleTerminal}> {'<-'} </span>
                <span className="terminal-content-text">Welcome to the terminal!</span>
                <span></span>
            </div>
            <div 
                className="terminal-content-main" 
                ref={terminalMainRef}
                onClick={handleTerminalClick}
            >
                {commandHistory.map((entry, index) => (
                    <React.Fragment key={index}>
                        {entry.command && (
                            <div className="terminal-content-text command-line">
                                {entry.command}
                            </div>
                        )}
                        {entry.output && (
                            <div className="terminal-content-text output-line">
                                {entry.output}
                            </div>
                        )}
                    </React.Fragment>
                ))}
                
                <form onSubmit={handleCommandSubmit} className="terminal-input-form">
                    <div className="terminal-prompt-line">
                        <span className="terminal-prompt"></span>
                        <input
                            type="text"
                            value={currentCommand}
                            onChange={(e) => setCurrentCommand(e.target.value)}
                            ref={inputRef}
                            className="terminal-input"
                            autoFocus
                            autoComplete="off"
                            spellCheck="false"
                        />
                    </div>
                </form>
            </div>
            
            {/* About popup component */}
            { showAboutPopup && <AboutPopup onClose={closeAboutPopup} /> }
            {showSkillsPopup && <SkillsPopup onClose={closeSkillsPopup} />}
        </div>
    );
};

export default React.memo(TerminalContent);