
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header'
import './App.css';
import Home from './Components/Home/Home';

import About from './Components/About/About'
import TShirt from './Components/Tshirt/TShirt';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/order' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>

      </Routes>
    </div>
  );
}

export default App;
