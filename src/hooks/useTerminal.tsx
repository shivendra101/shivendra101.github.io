import React, { useState, useRef, useEffect, ReactNode } from "react";
import CommandHelp from "../components/CommandHelp/CommandHelp";
import AboutPopup from "../components/AboutPopup/AboutPopup";
import SkillsPopup from "../components/SkillsPopup/SkillsPopup";

interface CommandEntry {
    command: string;
    output?: ReactNode;
}

export const useTerminalContent = () => {
    const [commandHistory, setCommandHistory] = useState<CommandEntry[]>([
        { command: "", output: "Welcome! Type 'help' for available commands." }
    ]);
    const [currentCommand, setCurrentCommand] = useState<string>("");
    const [showAboutPopup, setShowAboutPopup] = useState<boolean>(false);
    const [showSkillsPopup, setShowSkillsPopup] = useState<boolean>(false);
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

    const processCommand = (command: string): ReactNode => {
        // Simple command processing logic
        const cmd = command.trim().toLowerCase();
        
        if (cmd === "help") {
            return <CommandHelp />;
        } else if (cmd === "about") {
            // Show the About popup
            setTimeout(() => setShowAboutPopup(true), 100);
            return "Loading classified personnel file...";
        } else if (cmd === "skills") {
            // Show the Skills popup
            setTimeout(() => setShowSkillsPopup(true), 1000);
            return "Loading technical skills assessment...";
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

    const closeAboutPopup = () => {
        setShowAboutPopup(false);
    };

    const closeSkillsPopup = () => {
        setShowSkillsPopup(false);
    };

    return {
        commandHistory,
        currentCommand,
        setCurrentCommand,
        handleCommandSubmit,
        handleTerminalClick,
        inputRef,
        terminalMainRef,
        showAboutPopup,
        closeAboutPopup,
        showSkillsPopup,
        closeSkillsPopup
    };
};