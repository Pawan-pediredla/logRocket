import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './comp/Navbar';
import Home from './comp/Home';
import About from './comp/About';
import News from './comp/News';
import Favorite from './comp/Favorite';
import GetStarted from './comp/GetStarted';
function App() {
  return (
    <Router>

           <Navbar />
<main className='main-content'>
  <Routes>
  <Route path='/' element={<Home />}  />
  <Route path='/news' element={<News/>}  />
  <Route path='/about-us' element={<About/>}  />
  <Route path='/favorite' element={<Favorite/>}  />
  <Route path='/location' element={<location/>}  />
  <Route path='/news' element={<GetStarted/>}  />  
  
  </Routes>

  
</main>
    </Router>
  );
}
export default App;
