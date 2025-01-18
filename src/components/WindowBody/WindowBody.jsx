import TerminalBody from "../Terminal/Terminalbody/TerminalBody"
import './WindowBody.scss'
export default function WindowBody({ view }) {
    return (
        <div className="window-body">
            {view === 'terminal' && <TerminalBody />}
        </div>
    )
}