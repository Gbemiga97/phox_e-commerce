import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Description, Footer, NavBar, Review } from './components';
import { About, Blog, BlogDetail, Cart, Contact, Home, ProductDetail, Shop } from './pages';
import { ShopContextProvider } from './Context/ShopContext';
import {Toaster} from 'react-hot-toast'

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <HashRouter>
      <NavBar />
      <Toaster />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='shop' element={<Shop />} />

        <Route path='shop/:id' element={<ProductDetail />}>
          <Route index element={<Description />} />
          <Route path='review' element={<Review />} />
        </Route>

        <Route path='about' element={<About />} />
        <Route path='blog' element={<Blog />} />
        <Route path='blog/:id' element={<BlogDetail />} />
        <Route path='contact' element={<Contact />} />
        <Route path='cart' element={<Cart />} />
      </Routes>
      <Footer />
      </HashRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;
