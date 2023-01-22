import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import Home from './pages/Home.js';
import Cart from './pages/Cart.js';
import Navbar from './components/Navbar.js';
import store from './store/store';

function App() {
  return (
    <div className="App">
      
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
        </BrowserRouter>
      </Provider>

      
    </div>
  );
}

export default App;
