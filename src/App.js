import Home from './components/Home/Home';
import CartContent from './components/CartContent/CartContent';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import DataProvider from './components/Context/DataContext';
function App() {
  return (
    <DataProvider>
<BrowserRouter>
<Navbar />
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/cart" element={<CartContent/>}/>
</Routes>
</BrowserRouter>
</DataProvider>
  );
}

export default App;
