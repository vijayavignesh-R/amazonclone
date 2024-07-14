import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../../styles/Admin.css";
import UserIcon from '@material-ui/icons/AccountCircle';

const Category = () => {
  const [categoryName, setCategoryName] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [categories, setCategories] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editCategoryId, setEditCategoryId] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/category');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, [alertMessage]); // Fetch categories whenever alertMessage changes

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        let response;
        if (editMode) {
          // If in edit mode, send a POST request to add a new category with updated values
          response = await axios.put(`http://localhost:5000/api/category/${editCategoryId}`, {
            categoryname: categoryName
          });
          setEditMode(false); // Reset edit mode
          setEditCategoryId(null);
        } else {
          // If not in edit mode, send a regular POST request to add a new category
          response = await axios.post('http://localhost:5000/api/category/addcategory', {
            categoryname: categoryName
          });
        }
      setAlertMessage(response.data.message);
      setCategoryName(''); // Clear the input field after successful submission
      // Hide the alert message after 5 seconds
      setTimeout(() => {
        setAlertMessage('');
      }, 5000);
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };

  const handleEdit = async (categoryId) => {
    try {
      // Fetch the details of the category with the given ID
      const response = await axios.get(`http://localhost:5000/api/category/${categoryId}`);
      const category = response.data;
  
      // Check if the category exists
      if (category) {
        // Set the category name to the state to populate the form field
        setCategoryName(category.categoryname);
        // Optionally, you can set an edit mode flag to differentiate between adding and editing
         setEditMode(true);
         setEditCategoryId(category._id);
      } else {
        console.error('Category not found.');
      }
    } catch (error) {
      console.error('Error fetching category details:', error);
    }
  };
  
  const handleDelete = async (categoryId) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/category/${categoryId}`);
      setAlertMessage(response.data.message);
      // Fetch categories again after deleting
      const updatedCategories = categories.filter(category => category._id !== categoryId);
      setCategories(updatedCategories);
      // Hide the alert message after 5 seconds
      setTimeout(() => {
        setAlertMessage('');
      }, 5000);
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  return (
    <div>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>
      <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Amazon Clone</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="/category">Add Category</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/addproduct">Add Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/stocks">Stocks</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/orders">Orders</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/customers">Customers</a>
              </li>
            </ul>
          </div>
          <div className="d-flex text-white">
            <span className="me-3">
              <a className="text-white logout" href="/">Logout</a>
            </span>
            <span className="me-3">Admin</span>
            <UserIcon />
          </div>
        </div>
      </nav>

      <div className="container-fluid mt-3">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-12"><center><u><h3>ADD CATEGORY</h3></u></center></div>
          </div>
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              {alertMessage && (
                <div className="alert alert-success">{alertMessage}</div>
              )}
              <div className="form-group mb-3">
                <label htmlFor="categoryname" className="form-label">Category Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  name="categoryname" 
                  value={categoryName} 
                  onChange={(e) => setCategoryName(e.target.value)} 
                  required 
                  autoComplete='off'
                />
              </div>
              <div className="form-group mb-3">
                <center><input type="submit" value="Submit" className="btn btn-primary mt-4"/></center>
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <th><center>Position</center></th>
                    <th><center>Category Name</center></th>
                    <th><center>Action</center></th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((category, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{category.categoryname}</td>
                      <td>
                        <button type="button" className="btn btn-primary me-2" onClick={() => handleEdit(category._id)}>Edit</button>
                        <button type="button" className="btn btn-danger" onClick={() => handleDelete(category._id)}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="col-md-3"></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Category;
