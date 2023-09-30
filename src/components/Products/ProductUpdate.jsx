import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const ProductUpdate = ({ productData }) => {
  Product.propTypes = {
    productData: PropTypes.object.isRequired,
  };

  // const [productData, setProductData] = useState({});
  const [updatedData, setUpdatedData] = useState({});

  useEffect(() => {
    // Fetch product data from API and set it in the state
    Axios.get('/api/product/:id').then((response) => {
      setProductData(response.data);
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData({ ...updatedData, [name]: value });
  };

  const handleSave = () => {
    // Send a PUT request to update product data with updatedData
    Axios.put('/api/product/:id', updatedData).then(() => {
      // Handle successful update
    });
  };

  return (
    <div>
      <h2>Update Product</h2>
      <textarea
        name="description"
        value={updatedData.description || productData.description}
        onChange={handleInputChange}
      />
      {/* Other input fields for categories, business models, TRL, etc. */}
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default ProductUpdate;
