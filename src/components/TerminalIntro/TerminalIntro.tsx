import React, {useState, useEffect, useCallback } from "react";
import './TerminalIntro.scss';
import brainIcon from "../../assets/icons/brain.svg";
import bulbIcon from "../../assets/icons/bulb.svg";
import Lottie from "lottie-react";
import codeLottie from "../../assets/lottie/code-lottie.json";
import BlinkingCursor from "../BlinkingCursor/BlinkingCursor";
import TerminalEntryButton from "../TerminalEntryButton/TerminalEntryButton";


const TerminalHeader: React.FC = () => {

    const line = `console.log("Welcome to my digital forge !!");`;
    const [subHeading, setSubHeading] = useState<string>('');
    const [isTyping, setIsTyping] = useState<boolean>(false);
    
    const delay = useCallback((ms: number) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }, []);
  
    useEffect(() => {
        let isMounted = true;

        async function typeEffect(textToType, typingSpeed) {
            setSubHeading('');
            let currentText = '';
            for (let i = 0; i < textToType.length; i++) {
                if (!isMounted) return;
                setIsTyping(true);
                currentText += textToType[i];
                setSubHeading(prev => prev + textToType[i]);
                await delay(typingSpeed);
                if(i === textToType.length - 1) {
                    setIsTyping(false);
                }
            }
        }

        typeEffect(line, 100);

        return () => {
            isMounted = false;
        };
    }, [delay, line]);

    
    return <div className="terminal-header">
        <span className="heading"> Where Logic <img src={brainIcon} className="icons brain-icon" alt="" /> meets innovation  <img src={bulbIcon} className="icons bulb-icon" alt="" /> && </span>
        <span className="heading"> solving problems through code <Lottie className="code-lottie" animationData={codeLottie} loop={true} autoplay={true} />  </span>
        <span className="heading typing-effect"> {subHeading} <BlinkingCursor isTyping={isTyping}  /> </span>

        <TerminalEntryButton />
    </div>
};

export default React.memo(TerminalHeader);