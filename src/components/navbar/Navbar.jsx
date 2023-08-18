import React, { useState } from 'react'
import "./Navbar.css"
import { Link, useNavigate } from 'react-router-dom'
const Navbar = () => {
    const [searchText, setSearchText] = useState()
    const navigate = useNavigate()

    const searchButtonHandler = (e) => {
        e.preventDefault()
        navigate({ pathname: "/search", search: `?item=${searchText}` })
    }

    return (
        <div className="main-navbar shadow-sm sticky-top">
            <div className="top-navbar">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2 my-auto d-none d-sm-none d-md-block d-lg-block">
                            <h5 className="brand-name"><Link to="/" className='logo'>Funda Ecom</Link></h5>
                        </div>
                        <div className="col-md-5 my-auto">
                            <form role="search">
                                <div className="input-group">
                                    <input type="search" placeholder="Search your product" className="form-control" onChange={(e) => setSearchText(e.target.value)} />
                                    <button className="btn bg-white" type="submit" onClick={searchButtonHandler}>
                                        <i className="fa fa-search"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-5 my-auto">
                            <ul className="nav justify-content-end">

                                <li className="nav-item">
                                    <Link className="nav-link" to="/cart">
                                        <i className="fa fa-shopping-cart"></i> Cart (0)
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/wishlist">
                                        <i className="fa fa-heart"></i> Wishlist (0)
                                    </Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fa fa-user"></i> Username
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="#"><i className="fa fa-user"></i> Profile</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="fa fa-list"></i> My Orders</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="fa fa-heart"></i> My Wishlist</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="fa fa-shopping-cart"></i> My Cart</a></li>
                                        <li><a className="dropdown-item" href="#"><i className="fa fa-sign-out"></i> Logout</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand d-block d-sm-block d-md-none d-lg-none" href="#">
                        Funda Ecom
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">All Categories</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">New Arrivals</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Featured Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Electronics</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Fashions</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Accessories</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Appliances</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
