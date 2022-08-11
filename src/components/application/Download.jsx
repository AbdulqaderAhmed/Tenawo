import React from "react";
import google from "../../assets/img/google.png";
import appstore from "../../assets/img/app_Store.png";
import comingsoon from "../../assets/img/comingsoon.jpg";

export default function download() {
  return (
    <div className="row download">
      <div className="col s12 m7">
        <h5>Easy and Fast</h5>
        <h3>Download TENAWO App on Play Store & on App Store</h3>
        <h3>Available now on:</h3>
        <a href="#" className="btn btn-large">
          {/* <img src={google} /> */}
          Google Play
        </a>
        <a href="#" className="btn btn-large">
          {/* <img src={appstore} /> */}
          App Store
        </a>
      </div>

      <div className="col s12 m5">
        <img src={comingsoon} alt="" className="soon" />
      </div>
    </div>
  );
}
