import React, { Component } from "react";
import "./Item.css"

class Item extends Component {
  render() {
    return (
      <a className = "cardsLink" href= {this.props.link} target="blank">
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
            
          <h5 className="card-title"> { this.props.plantName }</h5>
          <p className="card-text">
            <br></br> 

            {this.props.description}
          </p>
        </div>
      </div>
      </a>
    );
  }
}

export default Item;
