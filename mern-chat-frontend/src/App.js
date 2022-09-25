import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route , Routes} from 'react-router-dom'
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Chat from './pages/Chat';


function App() {
  return (
    <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/login" element={<Login />}/>
          <Route path="/Signup" element={<Signup />}/>
          <Route path="/Chat" element={<Chat />}/>
        </Routes>
    </BrowserRouter>
    
  );
}

export default App;
