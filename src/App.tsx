import React from 'react'
import Terminal from './components/Terminal/Terminal'
import { ThemeProvider } from './contexts/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <Terminal />
    </ThemeProvider>
  )
}

export default App
