import './App.css';
import { Posts } from './components/PostContainer/Posts/Posts';
import { Users } from './components/UserContainer/Users/Users';

function App() {
  return (
    <div className='App'>
      <Users />
      <hr />
      <Posts />
    </div>
  );
}

export default App;
