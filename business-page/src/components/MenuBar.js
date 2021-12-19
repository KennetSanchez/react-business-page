import React, { Component, Fragment } from "react";

import "./MenuBar.css";

function MenuBar() {
  return <section className="menuBarContainer">
         <nav className="navbar navbar-expand-lg navbar-dark bg-primary" id="navBar">
             <div className="container-fluid" >
                 <a className="navbar-brand" href="#">Plant nursery</a>
                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                     data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                     aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                 </button>
                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                         <li className="nav-item">
                             <a className="nav-link" href="#">About us</a>
                         </li>
                         <li className="nav-item">
                             <a className="nav-link" href="#">Our services</a>
                         </li>
                         <li className="nav-item">
                             <a className="nav-link" href="#">Our plants</a>
                         </li>
                     </ul>
                 </div>
             </div>
         </nav>
  </section>;
}

export default MenuBar;
