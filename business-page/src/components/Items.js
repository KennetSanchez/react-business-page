import React, { Component, Fragment } from "react";
import "./Items.css";

import Item from "./Item"

class Items extends Component {
  render(){
    return (
      <section className = "container">
        <Item plantName = "Virginica"/>
        <Item plantName = "Versicolor"/>
        <Item plantName = "Setosa"/>
      </section>
    );
  }
}

export default Items;
