import Home from './components/Home/Home';
import CartContent from './components/CartContent/CartContent';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/cart" element={<CartContent/>}/>
</Routes>
</BrowserRouter>
   
  );
}

export default App;
