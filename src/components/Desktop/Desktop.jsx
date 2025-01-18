import WindowWrapper from "../WindowWrapper/WindowWrapper"
import './Desktop.scss'
export default function Desktop() {
    return <div className="desktop-wrapper">
        {
            Array(5).fill(0).map((_, index) => <WindowWrapper key={index} view="terminal" />)
        }
        {/* <WindowWrapper view="terminal" /> */}
    </div>
}