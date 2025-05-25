import React, { useState, useRef, useEffect } from "react";
import './TerminalContent.scss';
import { ButtonSize } from "../../types/propTypes";
import TerminalButton from "../TerminalButton/TerminalButton";

interface TerminalContentProps {
    toggleTerminal: () => void;
}

interface CommandEntry {
    command: string;
    output?: string;
}

const TerminalContent: React.FC<TerminalContentProps> = ({ toggleTerminal }) => {
    const [commandHistory, setCommandHistory] = useState<CommandEntry[]>([
        { command: "", output: "This is where the magic happens." }
    ]);
    const [currentCommand, setCurrentCommand] = useState<string>("");
    const inputRef = useRef<HTMLInputElement>(null);
    const terminalMainRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom when command history updates
    useEffect(() => {
        if (terminalMainRef.current) {
            terminalMainRef.current.scrollTop = terminalMainRef.current.scrollHeight;
        }
    }, [commandHistory]);

    // Focus input when component mounts
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    const handleCommandSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!currentCommand.trim()) return;
        
        // Process command and get output
        const newEntry: CommandEntry = {
            command: currentCommand,
            output: processCommand(currentCommand)
        };
        
        // Update command history
        setCommandHistory(prev => [...prev, newEntry]);
        
        // Clear current command
        setCurrentCommand("");
    };

    const processCommand = (command: string): string => {
        // Simple command processing logic
        const cmd = command.trim().toLowerCase();
        
        if (cmd === "help") {
            return "Available commands: help, about, skills, projects, contact, clear";
        } else if (cmd === "about") {
            return "Hi! I'm a developer passionate about creating amazing web experiences.";
        } else if (cmd === "skills") {
            return "React, TypeScript, Node.js, CSS/SCSS, and more!";
        } else if (cmd === "projects") {
            return "Check out my portfolio projects! More details coming soon.";
        } else if (cmd === "contact") {
            return "Email: example@example.com | GitHub: github.com/username";
        } else if (cmd === "clear") {
            // Clear the history except for the initial welcome message
            setTimeout(() => {
                setCommandHistory([{ command: "", output: "Terminal cleared. Type 'help' for available commands." }]);
            }, 0);
            return "";
        } else {
            return `Command not found: ${command}. Type 'help' for available commands.`;
        }
    };

    // Keep focus on input when clicking anywhere in the terminal
    const handleTerminalClick = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

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
        </div>
    );
};

export default React.memo(TerminalContent);