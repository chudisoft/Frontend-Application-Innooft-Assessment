import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from 'react-router-dom';
import ErrorPage from './routes/error-page';
import Navbar from './components/Navbar/Navbar';
import './index.css';
import Products from './components/Products/Products';
import Product from './components/Products/Product';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container body">
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product/:edit" element={<Product />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Outlet />
        </div>
        <footer>
          <p>
            Copyright &copy; 2023&nbsp;
            <a href="https://github.com/chudisoft">Chudisoft</a>
            . All rights reserved.
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
