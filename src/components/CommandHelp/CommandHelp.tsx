import React from "react";
import "./CommandHelp.scss";

export interface CommandInfo {
  name: string;
  description: string;
}

export const commandList: CommandInfo[] = [
  { name: "help", description: "Display available commands" },
  { name: "about", description: "Learn about me" },
  { name: "skills", description: "View my technical skills" },
  { name: "projects", description: "See my portfolio projects" },
  { name: "contact", description: "Get my contact information" },
  { name: "clear", description: "Clear the terminal" }
];

interface CommandHelpProps {
  commands?: CommandInfo[];
}

const CommandHelp: React.FC<CommandHelpProps> = ({ commands = commandList }) => {
  return (
    <div className="command-help">
      <div className="command-help-header">Available Commands:</div>
      <div className="command-help-list">
        {commands.map((cmd, index) => (
          <div key={index} className="command-help-item">
            <span className="command-name">{cmd.name}</span>
            <span className="command-description">{cmd.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommandHelp;