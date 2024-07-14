import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import '../styles/Speech.css';
import { useSelector, useDispatch } from 'react-redux';
import { signout } from '../actions/UserAction';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MicIcon from '@material-ui/icons/Mic';
import SearchIcon from '@material-ui/icons/Search';
import MobileIcon from '@material-ui/icons/PhoneAndroid';
import LaptopIcon from '@material-ui/icons/Laptop';
import MonitorIcon from '@material-ui/icons/DesktopWindows';
import EarIcon from '@material-ui/icons/Headset';



const Header = (props) => {
    const dispatch = useDispatch();
    const [dropdown, setDropDown] = useState(false);
    const [secondDropdown, setSecondDropdown] = useState(false);
    const [transcript, setTranscript] = useState('');
    const [showSpeakNow, setShowSpeakNow] = useState(false);

    useEffect(() => {
        if (showSpeakNow) {
            const timer = setTimeout(() => {
                setShowSpeakNow(false);
            }, 3000); // Hide the message after 3 seconds
            return () => clearTimeout(timer);
        }
    }, [showSpeakNow]);

    const showDropDown = () => {
        setDropDown(!dropdown);
    };

    const speechText = () => {
        setShowSpeakNow(true);

        const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
        const recognition = new SpeechRecognition();
        recognition.interimResults = true;

        recognition.addEventListener('result', e => {
            const transcript = Array.from(e.results)
                .map(result => result[0])
                .map(result => result.transcript)
                .join('');
            setTranscript(transcript);
            console.log(transcript);
        });

        recognition.start();
    };

    const showSecondDropDown = () => {
        setSecondDropdown(!secondDropdown);
    };

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    const signOutHandler = () => {
        dispatch(signout());
    };

    return (
        <header>
            <div className="container">
                <div className="inner-content">
                    <div className="brand">
                        <Link to="/">Amazon Clone</Link>
                    </div>

                    <div className="search-bar">
                        <input className="search-input" id="covert_text" placeholder="Search products" value={transcript}></input>
                        &nbsp;&nbsp;
                        <div className="search-btn">
                            <p onClick={speechText}>
                                <MicIcon />
                            </p>
                        </div>
                        <div className="search-btn">
                            <Link to={`/searchresults/${transcript}`}>
                                <SearchIcon />
                            </Link>
                        </div>
                    </div>

                    {showSpeakNow && (
                        <div className="speak-now-message">
                            Speak now...
                        </div>
                    )}

                    <ul className="nav-links">
                        <li>
                            <Link to="/cart">
                                <ShoppingCartIcon />
                                {cartItems.length > 0 && (<p className="badge">{cartItems.length}</p>)}
                            </Link>
                        </li>
                        <li>
                            {userInfo ? (
                                <div className="header-dropdown">
                                    <p onClick={showDropDown}>
                                        {userInfo.name}
                                        <ArrowDropDownIcon />
                                    </p>

                                    <ul className={dropdown ? 'dropdown-content show' : 'dropdown-content'}>
                                        <li><Link to="/profile">Account</Link></li>
                                        <li><Link to="/orderhistory">Order History</Link></li>
                                        <li><Link to="/" onClick={signOutHandler}>Sign out</Link></li>
                                    </ul>
                                </div>
                            ) : (
                                <Link to="/signin"><AccountCircleIcon /></Link>
                            )}
                        </li>

                        {userInfo && userInfo.isAdmin && (
                            <li>
                                <div className="header-dropdown">
                                    <p onClick={showSecondDropDown}>
                                        Admin
                                        <ArrowDropDownIcon />
                                    </p>
                                    <ul className={secondDropdown ? 'dropdown-content show' : 'dropdown-content'}>
                                        <li><Link to="/productlist">Products</Link></li>
                                    </ul>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>

                <div className="category-container">
                    <ul>
                        <li><Link to="/category/mobile"> <table><tr><td><MobileIcon /></td><td>Mobile</td></tr></table></Link></li>
                        <li><Link to="/category/laptop"> <table><tr><td><LaptopIcon /></td><td>Laptop</td></tr></table></Link></li>
                        <li><Link to="/category/monitor"> <table><tr><td><MonitorIcon /></td><td>Monitor</td></tr></table></Link></li>
                        <li><Link to="/category/accessories"> <table><tr><td><SearchIcon /></td><td>Computer Accessories</td></tr></table></Link></li>
                        <li><Link to="/category/earphones"> <table><tr><td><EarIcon /></td><td>Earphones</td></tr></table></Link></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
