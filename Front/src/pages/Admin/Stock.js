import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../../styles/Admin.css"
import UserIcon from '@material-ui/icons/AccountCircle';

const AddProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
      const fetchProducts = async () => {
          try {
              const response = await axios.get('http://localhost:5000/api/products');
              setProducts(response.data);
          } catch (error) {
              console.error('Error fetching products:', error);
          }
      };

      fetchProducts();
  }, []);
    return (
        <div>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>
          <nav class="navbar navbar-dark navbar-expand-lg bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Amazon Clone</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" href="/category">Add Category</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/addproduct">Add Products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/stocks">Stocks</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/orders">Orders</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/customers">Customers</a>
        </li>
      </ul>
    </div>
    <div class="d-flex text-white">
    <span class="me-3">
      <a class="text-white logout" href="/">Logout</a></span>
      <span class="me-3">Admin</span>
      < UserIcon />
    </div>
  </div>
</nav>

    <div class="container-fluid">
    <h2>Products List</h2>
            <table class="table table-bordered mt-0">
                <thead>
                    <tr>
                        <th><center>Image</center></th>
                        <th><center>Name</center></th>
                        <th><center>Category</center></th>
                        <th><center>Brand</center></th>
                        <th><center>Price</center></th>
                        <th><center>Stock</center></th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product._id}>
                            <td><img src={product.image} alt={product.name} width="50" /></td>
                            <td>{product.name}</td>
                            <td>{product.category}</td>
                            <td>{product.brand}</td>
                            <td>{product.price}</td>
                            <td style={{ color: product.stock < 10 ? 'red' : 'blue', fontWeight:  'bold' }}>{product.stock}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default AddProducts
