import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Loader from '../Loader/Loader';
import apiBase from '../../constants';

const ProductUpdate = () => {
// const ProductUpdate = ({ productData }) => {
  // Product.propTypes = {
  //   productData: PropTypes.object.isRequired,
  // };

  const [productData, setProductData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [video, setVideo] = useState('');

  useEffect(() => {
    // Fetch product data from API and set it in the state
    Axios.get(apiBase + '6781/').then((response) => {
      setProductData(response.data);
      setIsLoaded(true);
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData({ ...updatedData, [name]: value });
  };

  const handleSave = () => {
    // Send a PUT request to update product data with updatedData
    Axios.put(apiBase + '6781/', updatedData).then(() => {
      // Handle successful update
    });
  };

  if(!isLoaded) return <Loader />;

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
