import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Shop from './Pages/Shop';
import Shopcategory from './Pages/Shopcategory';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<Shopcategory category="mens"/>}/>
        <Route path='/womens' element={<Shopcategory category="women"/>}/>
        <Route path='/kids' element={<Shopcategory category="kid"/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
