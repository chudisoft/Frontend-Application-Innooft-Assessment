import React, { useState, useEffect, useRef } from "react";
import Axios from "axios";
import Loader from "../Loader/Loader";
import apiBase from "../../constants";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const ProductUpdate = () => {
  // const ProductUpdate = ({ productData }) => {
  // Product.propTypes = {
  //   productData: PropTypes.object.isRequired,
  // };

  const id = useRef();
  const [productData, setProductData] = useState({});
  const [updatedData, setUpdatedData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [video, setVideo] = useState("");

  useEffect(() => {
    // Fetch product data from API and set it in the state
    Axios.get(apiBase + id).then((response) => {
      setProductData(response.data);
      setIsLoaded(true);
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData({ ...updatedData, [name]: value });
  };

  const handleMessageChange = (input) => (e) => {
    if (input === "msg") {
      // console.log(e)
      this.setState({ [input]: e });
    } else this.setState({ [input]: e.target.value });
  };

  const handleSave = () => {
    // Send a PUT request to update product data with updatedData
    Axios.put(apiBase + id, updatedData).then((response) => {
      // Handle successful update
      console.log(response);
    });
  };

  if (!isLoaded) return <Loader />;

  return (
    <div>
      <h2>Update Product</h2>
      <ReactQuill
        required
        className="textarea"
        placeholder="Enter Product Description"
        defaultValue={updatedData.description || productData.description}
        onChange={handleInputChange}
        // onChange={this.handleMessageChange("msg")} >
      ></ReactQuill>
      {/* Other input fields for categories, business models, TRL, etc. */}
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default ProductUpdate;
