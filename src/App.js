import logo from './logo.svg';
import './App.css';
import Addproduct from './components/Addproduct';
import Search from './components/Search';
import Deletepro from './components/Deletepro';
import Viewpro from './components/Viewpro';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>

  <BrowserRouter>
  <Routes>
<Route path='/' element ={ <Addproduct/>} />
<Route path='/Search' element ={ <Search/>} />
<Route path='/view' element ={ <Viewpro/>} />
<Route path='/Delete' element ={ <Deletepro/>} />

  </Routes>
  </BrowserRouter>


    </div>
  );
}

export default App;
