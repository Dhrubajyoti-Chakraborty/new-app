import React, {Component} from 'react';
// import logo from './logo.png';
import img from './img.jpeg';

import './App.css';
// import product from './img/product-1.jpg'; 



export default class Gallery extends Component {
  render(){
    return(
      <div class="container" >
        <img src="{img}"  alt="img" />
        {/* <img src="{logo}"  alt="logo" /> */}

      </div>
    )
  }
}

// export SecondApp;

