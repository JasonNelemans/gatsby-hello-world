import React from "react"

export default function Layout({ children }) {
  return <div className="app-wrapper">
    <h1>Header</h1>
    {children}
    <h3>Footer</h3>
    </div>
}
