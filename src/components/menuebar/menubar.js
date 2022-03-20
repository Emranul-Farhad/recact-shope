import React from 'react';
import './menue.css'

const Menubar = (props) => {
    return (
        <div className='container'>
        <div className='row'>
            <div className="col-lg-2">
                <h2>Fake Store</h2>
            </div>
            <div className="col-lg-10  ">
               <ul className=' menu-container d-flex  justify-content-end'>
               <li><a href="">Home</a></li>
                <li><a href="">Products</a></li>
                <li><a href="">Add cards <sup> {props.count} </sup> </a></li>
                <li><a href="">Contact US</a></li>
               </ul>
            </div>

        </div>
        </div>
    );
};

export default Menubar;