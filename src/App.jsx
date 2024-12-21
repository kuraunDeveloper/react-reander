import { useState } from 'react'
import { ChildArea } from './ChildArea'
import './App.css'

export default function App() {
  const [text, setText] = useState('')
  const [open, setOpen] = useState(false);

  const onClickCountUp = () => {
    setCount(count + 1);
  }
  
  const onClickOpen = () => {
    setOpen(!open);
  }

  const onChangeText = (e) => setText(e.target.value);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} />
    </div>
  )
}