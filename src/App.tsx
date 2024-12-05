import { useRef, useState } from 'react';
import './App.css';

function App() {

  const [user, setUser] = useState({});
  const name = useRef();
  const age = useRef();

  console.log(user);

  //@ts-ignore
  const handler = (e) => {
    e.preventDefault()
    setUser(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  return (
    <div>
      {/* <div>count: {count}</div>
      <button onClick={() => setCount(prev => prev + 1)}>inc</button> */}
      <form>
        <input type='text' placeholder={'name'} name={'name'} onChange={handler}/>
        <input type='text' placeholder={'age'} name={'age'} onChange={handler}/>
        <button>Save</button>
      </form>
    </div>
  );
}

export default App;
