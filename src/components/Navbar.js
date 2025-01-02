import React , {useState}from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import Textform from'./Tectform';
import './Navbar';


const Navbar = (props)=>{ 
    const [TextColor , setTextColor] =  useState("black");
    // const [backgroundcolor , setbackgroundcolor] =  useState("white");

    // const handlecolor = () =>{
    //     settextcolor(textcolor === "black" ? "black" : "white");
    // }

    const handleColor = (color) => {
        setTextColor(color); // Update the state
        document.body.style.color = color; // Apply color globally (or modify specific elements as needed)
      };


    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page"  to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" to="/about">About</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Action
                        </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/" >change color</a>
                            <ul className="dropdown-menu">
                                <li>
                                    <button
                                        className="dropdown-item"
                                        onClick={() => handleColor("red")}
                                    >
                                        Red
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className="dropdown-item"
                                        onClick={() => handleColor("blue")}
                                    >
                                        Blue
                                </button>
                                </li>
                                <li>
                                    <button
                                        className="dropdown-item"
                                        onClick={() => handleColor("green")}
                                    >
                                        Green
                                </button>
                                </li>
                            </ul>
                        </li>
                        <li><a className="dropdown-item" href="/">Another action</a></li>
                        <li><a className="dropdown-divider"> </a></li>
                        <li><a className="dropdown-item" href="/">Something else here</a></li>
                    </ul>
                    </li>
                    
                    <li className="nav-item">
                        <Link className="nav-link active" aria-disabled="true" to='/dashboard'>Dashboard</Link>
                    </li>
        
                    <li className="nav-item">
                    <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
        <div className = "container">
            <Textform />
        </div>
        
        </>
    );
}

export default Navbar;

// Navbar.propTypes = {title : PropTypes.string }
