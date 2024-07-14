import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductList from '../components/ProductList';
import Header from '../components/Header';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../styles/Home.css";
import Product from '../components/Product';
import Product2 from '../components/Product';
import { listProducts } from '../actions/ProdcutActions';
import { Link } from 'react-router-dom';
import "./hme.css";
import "../styles/Compare.css";
import { FaShippingFast } from "react-icons/fa";


const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    const productList = useSelector(state => state.productList);
    const { loading, error, products } = productList;

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    const settings2 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Adjust as needed
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 800,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    
    return (
        <div>
<Header/>
<div className="banner-container">

<Slider {...settings}>

    <div className="banners">
      <img src="https://t3.ftcdn.net/jpg/04/65/46/52/360_F_465465254_1pN9MGrA831idD6zIBL7q8rnZZpUCQTy.jpg"/>
    </div>
    <div className="banners">
        <img src="https://www.notebookcheck.net/fileadmin/Notebooks/MSI/special/BTS_2022/US_BTS_1200x628.jpg" alt=""/>
    </div>
    <div className="banners">
        <img src="https://mindstacktechnologies.com/wordpress/wp-content/uploads/2018/01/ecommerce-banner.jpg" alt=""/>
    </div>

</Slider>

</div>
        <div className='main' id='bg'>
        <div className='fmain'>
            
            <h3>Top Selling Products | Top rated home products</h3>
            <div className='fpar'>
            {products && products.filter(product =>
                            product.category.toLowerCase().includes("monitor")
                        ).map(filteredProduct => (
                            <Link to={`/products/product/${filteredProduct._id}`}><img id='fparimg' className='fimg' src={filteredProduct.image}></img></Link>
            ))}             
            </div>

           </div>

                <div className='newmain'>

                    <div className='newone'>
                    <FaShippingFast style={{color:"#8BC34A", fontSize:"50px"}} />
                    <div>
                    <h3>Free Shipping</h3>
                    <p>Above $500 Only</p>
                    </div>
                    </div>
                    <div className='newone'>
                    <FaShippingFast style={{color:"#8BC34A", fontSize:"50px"}}/>
                    <div>
                    <h3>100% Quality</h3>
                    <p>100% Guarantee</p>
                    </div>
                    </div>
                    <div className='newone'>
                    <FaShippingFast style={{color:"#8BC34A", fontSize:"50px"}}/>
                    <div>
                    <h3>Huge Savings</h3>
                    <p>At Lowest Price</p>
                    </div>
                    </div>
                    <div className='newone'>
                    <FaShippingFast style={{color:"#8BC34A", fontSize:"50px"}} />
                    <div>
                    <h3>Easy Returns</h3>
                    <p>No Questions Asked</p>
                    </div>
                    </div>

                </div>
           
           
            <div className='one' id='bg'>
                <div className='two'>
                    <h3> Mobile </h3>
                    <div className='smain'>
                        {products && products.filter(product =>
                            product.category.toLowerCase().includes("mobile")
                        ).map(filteredProduct => (
                            <div className='schi' id='inbg' key={filteredProduct._id}>
                                <Link to={`/products/product/${filteredProduct._id}`}><img className='simg' src={filteredProduct.image} alt={filteredProduct.name}></img></Link>
                                <p className='spar'>{filteredProduct.name}</p>
                            </div>
                        ))}
                    </div>
                    <button className='hbtn'>See More</button>
                </div>
                <div className='two'>
                    <h3> Laptop </h3>
                    <div className='smain'>
                        {products && products.filter(product =>
                            product.category.toLowerCase().includes("laptop")
                        ).map(filteredProduct => (
                            <div className='schi' id='inbg' key={filteredProduct._id}>
                                 <Link to={`/products/product/${filteredProduct._id}`}><img className='simg' src={filteredProduct.image} alt={filteredProduct.name}></img></Link>
                                <p className='spar'>{filteredProduct.name}</p>
                            </div>
                        ))}
                    </div>
                    <button className='hbtn'>See More</button>
                </div>
                <div className='two'>
                    <h3> Monitor </h3>
                    <div className='smain'>
                        {products && products.filter(product =>
                            product.category.toLowerCase().includes("monitor")
                        ).map(filteredProduct => (
                            <div className='schi' id='inbg' key={filteredProduct._id}>
                                <Link to={`/products/product/${filteredProduct._id}`}><img className='simg' src={filteredProduct.image} alt={filteredProduct.name}></img></Link>
                                <p className='spar'>{filteredProduct.name}</p>
                            </div>
                        ))}
                    </div>
                    <button className='hbtn'>See More</button>
                </div>
            </div>
            <div className='one' id='bg'>
                <div className='two'>
                    <h3> Accessories </h3>
                    <div className='smain'>
                        {products && products.filter(product =>
                            product.category.toLowerCase().includes("accessories")
                        ).map(filteredProduct => (
                            <div className='schi' id='inbg' key={filteredProduct._id}>
                                <Link to={`/products/product/${filteredProduct._id}`}><img className='simg' src={filteredProduct.image} alt={filteredProduct.name}></img></Link>
                                <p className='spar'>{filteredProduct.name}</p>
                            </div>
                        ))}
                    </div>
                    <button className='hbtn'>See More</button>
                </div>
                <div className='two'>
                    <h3> Earphones </h3>
                    <div className='smain'>
                        {products && products.filter(product =>
                            product.category.toLowerCase().includes("earphones")
                        ).map(filteredProduct => (
                            <div className='schi' id='inbg' key={filteredProduct._id}>
                                 <Link to={`/products/product/${filteredProduct._id}`}><img className='simg' src={filteredProduct.image} alt={filteredProduct.name}></img></Link>
                                <p className='spar'>{filteredProduct.name}</p>
                            </div>
                        ))}
                    </div>
                    <button className='hbtn'>See More</button>
                </div>
                <div className='two'>
                    <h3> Laptop </h3>
                    <div className='smain'>
                        {products && products.filter(product =>
                            product.category.toLowerCase().includes("laptop")
                        ).map(filteredProduct => (
                            <div className='schi' id='inbg'key={filteredProduct._id}>
                                <Link to={`/products/product/${filteredProduct._id}`}><img className='simg' src={filteredProduct.image} alt={filteredProduct.name}></img></Link>
                                <p className='spar'>{filteredProduct.name}</p>
                            </div>
                        ))}
                    </div>
                    <button className='hbtn'>See More</button>
                </div>
            </div>
            
           <div className='fmain'>
            
            <h3>Up to 70% off | Top rated home products</h3>
            <div className='fpar'>
            {products && products.filter(product =>
                            product.category.toLowerCase().includes("earphones")
                        ).map(filteredProduct => (
                            <Link to={`/products/product/${filteredProduct._id}`}><img className='fimg' id='fparimg' src={filteredProduct.image}></img></Link>
            ))}             
            </div>

           </div>
           <div className='fmain'>
            
            <h3>Up to 50% off | Top rated home products</h3>
            <div className='fpar'>
            {products && products.filter(product =>
                            product.category.toLowerCase().includes("laptop")
                        ).map(filteredProduct => (
                            <Link to={`/products/product/${filteredProduct._id}`}><img id='fparimg' className='fimg' src={filteredProduct.image}></img></Link>
            ))}             
            </div>
           </div>

           <div id='hgd'>
    <h2>Highest to Lowest Price All Products</h2><br/>
    <div className="products-container" id='hgr'>
        {products && products
            .slice() // Create a shallow copy of the products array
            .sort((a, b) => b.price - a.price).map(product => ( // Sort the array based on price, highest to lowest
                <div className="product-item" id='fparimg' key={product._id}>
                    <a href="/products/product/${product._id}"><img src={product.image} alt={product.name} style={{ width: '200px', height: '200px' }} /></a><br/>
                    <h3>{product.name}</h3><br/>
                    <h2>${product.price}</h2><br/>
                </div>
            ))}
    </div>
</div>
           {/* <div id='hgd'>
    <h2>Highest to Lowest Price Laptop Products</h2><br/>
    <div className="products-container" id='hgr'>
        {products && products
            .slice() // Create a shallow copy of the products array
            .sort((a, b) => b.price - a.price).filter(product =>
                product.category.toLowerCase().includes("laptop")
            ).map(product => ( // Sort the array based on price, highest to lowest
                <div className="product-item" id='fparimg' key={product._id}>
                    <img src={product.image} alt={product.name} style={{ width: '200px', height: '200px' }} /><br/>
                    <h3>{product.name}</h3><br/>
                    <h2>${product.price}</h2><br/>
                </div>
            ))}
    </div>
</div> */}

{/* <div>
    <h2>Highest to Lowest Price Mobile Products</h2><br/>
    <div className="products-container">
        {products && products
            .slice() // Create a shallow copy of the products array
            .sort((a, b) => b.price - a.price).filter(product =>
                product.category.toLowerCase().includes("mobile")
            ).map(product => ( // Sort the array based on price, highest to lowest
                <div className="product-item" key={product._id}>
                    <img src={product.image} alt={product.name} style={{ width: '200px', height: '200px' }} /><br/>
                    <h3>{product.name}</h3><br/>
                    <h2>${product.price}</h2><br/>
                </div>
            ))}
    </div>
</div> */}

<div className='newmain'>

                    <div className='newone'>
                    <FaShippingFast style={{color:"#8BC34A", fontSize:"50px"}} />
                    <div>
                    <h3>Free Shipping</h3>
                    <p>Above $500 Only</p>
                    </div>
                    </div>
                    <div className='newone'>
                    <FaShippingFast style={{color:"#8BC34A", fontSize:"50px"}}/>
                    <div>
                    <h3>100% Quality</h3>
                    <p>100% Guarantee</p>
                    </div>
                    </div>
                    <div className='newone'>
                    <FaShippingFast style={{color:"#8BC34A", fontSize:"50px"}}/>
                    <div>
                    <h3>Huge Savings</h3>
                    <p>At Lowest Price</p>
                    </div>
                    </div>
                    <div className='newone'>
                    <FaShippingFast style={{color:"#8BC34A", fontSize:"50px"}} />
                    <div>
                    <h3>Easy Returns</h3>
                    <p>No Questions Asked</p>
                    </div>
                    </div>

                </div>


           <div className="home-product-slider" id='hgd'>
                <h2 className="sec-title" style={{color:"black"}}>More Products</h2>
                <Slider {...settings2} id='sli'>
                    {products && products.map(product => (
                        <Product key={product._id} product={product} />
                    ))}
                </Slider>
            </div>

        </div>

        <div className='foot'>

            <div className='fchi'>
                <h3>Home Menu</h3>
                <a href='' className='fan'>Laptop</a>
                <a href='' className='fan'>Laptop</a>
                <a href='' className='fan'>Laptop</a>
                <a href='' className='fan'>Laptop</a>
                <a href='' className='fan'>Laptop</a>
            </div>
            <div className='fchi'>
                <h3>Home Menu</h3>
                <a href='' className='fan'>Laptop</a>
                <a href='' className='fan'>Laptop</a>
                <a href='' className='fan'>Laptop</a>
                <a href='' className='fan'>Laptop</a>
                <a href='' className='fan'>Laptop</a>
            </div>
            <div className='fchi'>
                <h3>Home Menu</h3>
                <a href='' className='fan'>Laptop</a>
                <a href='' className='fan'>Laptop</a>
                <a href='' className='fan'>Laptop</a>
                <a href='' className='fan'>Laptop</a>
                <a href='' className='fan'>Laptop</a>
            </div>
            <div className='fchi'>
                <h3>Home Menu</h3>
                <a href='' className='fan'>Laptop</a>
                <a href='' className='fan'>Laptop</a>
                <a href='' className='fan'>Laptop</a>
                <a href='' className='fan'>Laptop</a>
                <a href='' className='fan'>Laptop</a>
            </div>

        </div>
        <div className='cpy'>

        <p>Developed by Sandhiya MCA, Kumaraguru College - Coimbatore</p>
        <p>Guided by Yellow Technologies - Madurai</p>

        </div>
</div>
    );
};

export default Home;
