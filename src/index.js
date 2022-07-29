import React from "react"
import ReactDOM from "react-dom/client"

import { App } from "./App"
import { DialogProvider } from "./DialogProvider"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <DialogProvider>
        <App />
    </DialogProvider>
)
