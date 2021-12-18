import React, { Component} from "react";
import "./Items.css";

import Item from "./Item"

class Items extends Component {
  render(){
    return (
      <section className = "container" id="cardContainer">
        <Item plantName = "Virginica" imageLink = "https://upload.wikimedia.org/wikipedia/commons/9/9f/Iris_virginica.jpg"/>
        <Item plantName = "Versicolor" imageLink = "https://upload.wikimedia.org/wikipedia/commons/2/27/Blue_Flag%2C_Ottawa.jpg"/>
        <Item plantName = "Setosa" imageLink = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Iris_versicolor_3.jpg/220px-Iris_versicolor_3.jpg"/>
      </section>
    );
  }
}

export default Items;
