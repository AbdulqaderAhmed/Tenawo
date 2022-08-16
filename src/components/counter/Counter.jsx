import React from "react";
import photo from "../../assets/img/Header3.jpg";

export default function Counter() {
  return (
    <div className="parallax-container">
      <div className="parallax">
        <img src={photo} />
      </div>
      <div className="container ">
        <div className="row counter">
          <div className="col s12 m3">
            <h2>1212</h2>
            <h5>Since we start</h5>
          </div>
          <div className="col s12 m3">
            <h2>1212</h2>
            <h5>Clients</h5>
          </div>
          <div className="col s12 m3">
            <h2>1212</h2>
            <h5>Doctors</h5>
          </div>
          <div className="col s12 m3">
            <h2>1212</h2>
            <h5>Service Providers</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
