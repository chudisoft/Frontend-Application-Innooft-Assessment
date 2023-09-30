import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Product from './Product';
import { useSelector } from 'react-redux';
import './Product.css';

function Products() {
  const productsAvailable = useSelector((state) => state.products.products);
  const [ filteredProduct, setFilteredProduct ] = useState([]);
  const [ searchValue, setSearchValue ] = useState('');
  const [ showSearch, setShowSearch ] = useState(true);

  useEffect(() => {
    document.title = "Music Collections - Products";
  }, []);

  useEffect(() => {
    // Filter objects by keys matching searchValue
    if(searchValue === '') {
      setFilteredProduct(productsAvailable);
    } else {
      // Filter the original data object by keys (case-insensitive)
      const filteredData = productsAvailable.filter((key) => 
        key.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredProduct(filteredData);
    }
  }, [searchValue]);


  return (
    <div className=''>
      <div className='products-header'>
        <i>Select music product to view its music collections</i>
        <span className='float-end pointer text-light'>
          <i className='fas fa-cogs'
            title='Toggle Search'
            onClick={() => setShowSearch(!showSearch)}
          >
          </i>
        </span>
      </div>
      {showSearch && (<div className="search-container">
        <div className="form-group">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search by product"
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  // Cancel the default action, if needed
                  e.preventDefault();
                  // Trigger the button element with a click
                  setSearchValue(e.target.value);
                }
              }}
            />
            <span
              className="input-group-text btn btn-primary"
              onClick={(e) => {
                setSearchValue(searchValue);
              }}
            >
              <i className='fa fa-search'
                title='Search'
              >
              </i>
            </span>
          </div>
        </div>
      </div>)}
      <Row className='products'>
        {
          filteredProduct.map((b) => 
            <div
              className={`product-container ${b.class} text-light p-2 shadow card col-sm-6 col-md-4`}
              key={b.description}>
              <Product 
                product={b}
                key={b.name}
              />
            </div>
          )
        }
      </Row>
    </div>
  )
}

Products.propTypes = {}

export default Products
