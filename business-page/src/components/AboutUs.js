import React, { Component } from "react";
import "./AboutUs.css";

export class AboutUs extends Component {
  render() {
    return (
      <section className="container" id="aboutUsSection">
        <h4> Plant nursery, the happy plant </h4>
        <br></br>
        <p>
          "The happy plant" started as a local tree nursery serving a limited
          geographic area. Our company has evolved and responded to our
          customers' demand of quality nursery products. We continue to improve
          our on-line capabilities and expand our product offerings. We have
          extended our offerings outside the tree and shrub products, to include
          perennials, rose bushes and other plants, as well as flower bulbs,
          seeds and a complete garden center. We plan to continue to expand
          products to meet the needs of our customers.
          
          <br></br>
          <br></br>

          Our mission is to continually improve all aspects of our business in order to exceed our
          nationwide customers' expectations. The happy plant strives to
          offer one of the largest selections of high quality live plants and
          related products, complete with extensive plant information, while
          maintaining an exceptional level of customer service. We will not
          sacrifice the personal attention we give our customers for our
          expanded growth.
        </p>
      </section>
    );
  }
}

export default AboutUs;
