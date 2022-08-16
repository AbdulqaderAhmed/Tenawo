import React from "react";
import ReactOwlCarousel from "react-owl-carousel";
import awash from "../../assets/img/awash.jpg";
import coop from "../../assets/img/coop.png";
import ethiotele from "../../assets/img/ethiotelecom.png";
import telebirr from "../../assets/img/telebirr.png";

export default function Partners() {
  return (
    <div className="row">
      <div className="col s12 m12">
        <div className="partners">
          <h2>Our Partnerts</h2>
        </div>
      </div>

      <div className="col s12 m12">
        <ReactOwlCarousel
          items={3}
          loop={true}
          autoplay={true}
          autoplaySpeed={4500}
        >
          <div className="item box">
            <img src={awash} alt="" className="partner-img" />
          </div>
          <div className="item box">
            <img src={coop} alt="" className="partner-img" />
          </div>
          <div className="item box">
            <img src={ethiotele} alt="" className="partner-img" />
          </div>
          <div className="item box">
            <img src={telebirr} alt="" className="partner-img" />
          </div>
        </ReactOwlCarousel>
      </div>
    </div>
  );
}
