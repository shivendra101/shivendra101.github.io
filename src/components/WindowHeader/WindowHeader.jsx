import './WindowHeader.scss'
import CloseButton from '../Buttons/CloseButton'
import MinimizeButton from '../Buttons/MinimizeButton'
import FullscreenButton from '../Buttons/FullscreenButton'
import { forwardRef } from 'react'
const WindowHeader = forwardRef((props, ref) => {
    return <div ref={ref} className="window-header handle" onDoubleClick={props.toggleFullScreen}>
        <CloseButton />
        <MinimizeButton />
        <FullscreenButton />
    </div>
})

export default WindowHeader;