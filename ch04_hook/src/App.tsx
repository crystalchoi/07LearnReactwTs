// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {Alert} from "./Alert.tsx";
import {PersonScore} from "./PersonScore.tsx";

function App() {
  // const [count, setCount] = useState(0)

  // const unused = 'something';
  return (
    <div className="App" > asfkladsjfasdl
      <Alert heading="Success" closable> Everything is really good</Alert>
      <PersonScore />
    </div>
    )
}

export default App
