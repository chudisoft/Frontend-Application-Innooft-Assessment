import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from 'react-router-dom';
import { useState } from 'react';
import ErrorPage from './routes/error-page';
import Navbar from './components/Navbar/Navbar';
import './index.css';
// import Products from './components/Products/Products';
import Product from './components/Products/Product';
import ProductUpdate from './components/Products/ProductUpdate';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(!show);
  };

  return (
    <Router>
      <div className="App">
        <Navbar handleCloseClick={handleClose} />
        <main id="content" className={`${show ? 'shown' : ''} container mx-auto p-4`}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product/edit/:id" element={<ProductUpdate />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Outlet />
        </main>
        <footer>
          <p>
            Copyright &copy; 2023&nbsp;
            <a href="https://github.com/chudisoft">
              Chudisoft
            </a>
            . All rights reserved.
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
