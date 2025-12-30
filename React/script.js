import React from "react"
import ReactDOM from 'react-dom/client'

const h1 = (
    <div className="container">
        <b>hello</b>
    </div>
)

const root = ReactDOM.createRoot
(document.querySelector('#root'))
root.render(h1)


