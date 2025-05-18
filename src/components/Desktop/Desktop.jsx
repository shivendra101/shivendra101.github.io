import WindowWrapper from "../WindowWrapper/WindowWrapper"
import './Desktop.scss'
export default function Desktop() {
    return <div className="desktop-wrapper">
        {
             <WindowWrapper key={index} view="terminal" />
        }
        {/* <WindowWrapper view="terminal" /> */}
    </div>
}