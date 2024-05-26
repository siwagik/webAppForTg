import { useState } from 'react';
import './App.css'
import logo from "./assets/click.png"

const tg = window.Telegram.WebApp;

function App() {

  const [count, setCount ] = useState(0)

  return (
    <>
      <h1>Hello {tg.initDataUnsafe.user?.username}</h1>
      <h1>Your system: {tg.platform}</h1>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}><img src={logo}/></button>
    </>
  )
}

export default App