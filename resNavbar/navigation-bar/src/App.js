import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './comp/Navbar';
import Home from './comp/Home';
import News from './comp/News';
function App() {
  return (
    <Router>

           <Navbar />
<main className='main-content'>
  <Routes>
  <Route path='/' element={<Home />}  />
  <Route path='/news' element={<News/>}  />
  </Routes>

  
</main>
    </Router>
  );
}
export default App;
