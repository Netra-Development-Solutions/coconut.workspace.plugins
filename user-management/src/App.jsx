import SignIn from "./RemoteComponent"
import ReactDOM from "react-dom"

const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<SignIn />)