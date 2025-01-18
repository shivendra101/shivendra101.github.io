import { useState, useRef } from "react"
import WindowHeader from "../WindowHeader/WindowHeader"
import "./WindowWrapper.scss"
import Draggable from 'react-draggable'
import WindowBody from "../WindowBody/WindowBody"

export default function WindowWrapper({ view }) {

    const [fullScreen, setFullScreen] = useState(false);
    const nodeRef = useRef(null);
    const handleRef = useRef(null);
    const toggleFullScreen = () => {
        setFullScreen(prevFullScreen => !prevFullScreen);
    }

    return (
        <Draggable nodeRef={nodeRef} handle=".handle">
            <div ref={nodeRef} className={`window-wrapper ${fullScreen ? 'full-screen' : ''}`}>
                    <WindowHeader handleRef={handleRef} toggleFullScreen={toggleFullScreen} />
                    {view === 'terminal' && <WindowBody view={view} />}
            </div>
        </Draggable>
    )
}