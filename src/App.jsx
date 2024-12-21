import { useState, useCallback, useMemo} from 'react'
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

  const onClickClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onChangeText = (e) => setText(e.target.value);

  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  )
}