import React from 'react';
import './BlinkingCursor.scss';

type BlinkingCursorProps = {
  className?: string;
  isTyping?: boolean;
};

const BlinkingCursor: React.FC<BlinkingCursorProps> = ({ 
  isTyping = false,
  className = ''
}) => {
  return <span className={`blinking-cursor ${className} ${isTyping && 'is-typing'}`}></span>;
};

export default React.memo(BlinkingCursor);