import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './components/menuebar/menubar';
import All from './components/allproducts/all';
import Products from './components/products/products';
import { useState } from 'react';


function App() {
  const [count , setCount] = useState(0)

const counts = ()=>{
   setCount(count+1);
}

  return (
    <div className="App">
     <Menubar count={count} ></Menubar>
     <All sub={counts} ></All>
    </div>
  );
}

export default App;
