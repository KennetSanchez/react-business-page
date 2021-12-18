import React, { Component } from "react";

class Item extends Component {
  render() {
    return (
      <div
        class="card shadow p-3 mb-5 bg-body rounded"
        style={{ width: 20 + "rem" }}
      >
        <img
          src="https://www.dropbox.com/s/5xp7sy21sqb6jm4/ImageCap.jpg?raw=1"
          class="card-img-top"
          alt="..."
        ></img>
        <div class="card-body">
          <h5 class="card-title"> { this.props.plantName }</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    );
  }
}

export default Item;
