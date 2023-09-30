import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from 'react-router-dom';
import ErrorPage from './routes/error-page';
import Navbar from './components/Navbar/Navbar';
import './index.css';
// import Products from './components/Products/Products';
import Product from './components/Products/Product';
import ProductUpdate from './components/Products/ProductUpdate';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main id="content" className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Product />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product/:edit" element={<ProductUpdate />} />
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
