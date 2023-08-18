import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Categories.css"
const Categories = () => {
    const categories = [
        {
            title: "electronics",
            image: 'https://2.imimg.com/data2/UP/MK/MY-3812101/electronics.jpg'
        },
        {
            title: "jewelery",
            image: 'https://www.prachy.co.uk/cdn/shop/products/image_15db1b8c-e775-48fd-a214-ebdc95a3953a_410x.png?v=1598471284'
        },
        {
            title: "men's clothing",
            image: "https://mooseclothingcompany.com/wp-content/uploads/2023/07/MOOSE-CLOTHING0723-scaled-transformed.png"
        },
        {
            title: "women's clothing",
            image: "https://cdn.salehoo.com/files/image/dropship/ds-img-womens-clothing-02.png"
        }
    ]
    return (
        <div className="py-3 py-md-5 bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h4 className="mb-4">Our Categories</h4>
                    </div>
                    {categories.map((category, index) =>
                        <div className="col-6 col-md-3" key={index}>
                            <div className="category-card">
                                <Link to={"/categories/" + category.title}>
                                    <div className="category-card-img">
                                        <img src={category.image} className="w-100" alt="Laptop" />
                                    </div>
                                    <div className="category-card-body">
                                        <h5>{category.title}</h5>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Categories
