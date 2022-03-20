import React from 'react';
import Show from '../modal/moda';
import './products.css'
 
const Products = (props) => {
    const { title, image} = props.pd
    return (

    <div className="col-lg-4">  
    <div className="card cards" >
           <div className='cards-image'>
           <img  src={image} className='card-img-top w-50 mx-auto' alt="" />
           </div>
        <div className="card-body">
          <h5 className="card-title"> {title} </h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
        </div>

        <div className="card-footer d-flex justify-content-between">
        <button onClick={props.subs} type="button" className="btn btn-primary">Primary</button>
       <Show ds={props.pd} > </Show>
        </div>
    </div>
    </div>
    );
};

export default Products; 