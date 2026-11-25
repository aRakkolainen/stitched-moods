import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar/NavigationBar.js'
import MoodSelector from './features/mood-selection/MoodSelector.js'
import DefaultButton from './components/NavigationBar/DefaultButton.js'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavigationBar></NavigationBar>
      <MoodSelector></MoodSelector>
      <DefaultButton text="Generate new palette"></DefaultButton>
    </>
  )
}

export default App
