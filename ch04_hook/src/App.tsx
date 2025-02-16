import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {Alert} from "./Alert.tsx";

function App() {
  const [count, setCount] = useState(0)

  // const unused = 'something';
  return (
    <>

      <Alert heading="Success" closable> Everything is really good </Alert>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React and TypeScript
      </a>
      <p className="read-the-docs">
      Click on the Vite and React logos to learn more.
    </p>
    </>
  )
}

export default App
