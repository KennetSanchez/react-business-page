import React, { Component } from "react";
import "./Items.css";

import Item from "./Item";

import Plants from "../testData.json"


class Items extends Component {
  constructor(){
    super();
    this.state = {
      Plants
    };
  }


  render() {
    { const dB =  this.state.Plants.map((item) => {
      return(
        <section className="container">
          <Item plantName = {item.name} />



        </section>
      )
    }
    ) }
  
  

    return (
      <section className="container">
        {console.log(dB)}
      </section>
    );
  }
}

export default Items;
