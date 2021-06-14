import React, { useState, FC } from 'react'
import TheLayout from './components/The/TheLayout'
import './App.styl'

const App: FC = () => {
  const [count, setCount] = useState(1)

  return (
    <div className="App">
      <TheLayout />
    </div>
  )
}

export default App
