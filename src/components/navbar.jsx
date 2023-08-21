import React from 'react'
import {Link} from 'react-router-dom'
import {ShoppingCart} from 'phosphor-react'
export const Navbar = () => {
    return (
        <div className='navbar-wrapper'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <span className="navbar-brand">Capstone</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <span className="nav-link">
                                <Link to="/"> Shop </Link>
                            </span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link">
                                <Link to="/cart">
                                    <ShoppingCart size={32} />       
                                </Link>
                            </span>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
