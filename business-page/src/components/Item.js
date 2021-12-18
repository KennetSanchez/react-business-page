import React, { Component } from "react";
import "./Item.css"

class Item extends Component {
  render() {
    return (
      <div
        className="card shadow p-3 mb-5 bg-body rounded"
        style={{ width: 20 + "rem" }}
        className="cardDiv"
      >
        <img
          src={this.props.imageLink}
          className="card-img-top"
          alt="..."
          style={{ maxHeight: 50 + "%" }}
        ></img>
        <div className="card-body">
            
          <h5 className="card-title" style={{paddingTop: 5+"px"}}> { this.props.plantName }</h5>
          <p className="card-text">
            <br></br> 

            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    );
  }
}

export default Item;
