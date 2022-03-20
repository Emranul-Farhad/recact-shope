import React, { useEffect, useState } from 'react';
import Products from '../products/products';




const All = (props) => {
    

const [products , setproducts] = useState ([])

useEffect ( ()=> {

    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data=> setproducts(data))

},[] )

    return (
        <div className=' container'>
            <div className="row gy-5"> 
            <h1>All ptroducts </h1>
            {
                products.map(product =>  <Products key={product.id} pd={product}        subs={props.sub} > </Products>)
            }
            </div>
        </div>
    );
};

export default All; 