import './App.scss';
import {auth} from './firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth';
import Forum from './components/Forum'
import SignIn from './components/SignIn'

function App() {
  const user= auth
  return (
    <div className="app">
      {user ? <Forum />: <SignIn />}
    </div>
  );
}

export default App;
