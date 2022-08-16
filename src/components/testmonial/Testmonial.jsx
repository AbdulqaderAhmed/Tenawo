import React from "react";
import ReactOwlCarousel from "react-owl-carousel";
import photo from "../../assets/img/Header3.jpg";

export default function Testmonial() {
  return (
    <div className="container testmonial">
      <h2>Tesmonials</h2>
      <ReactOwlCarousel
        items={1}
        loop={true}
        autoplay={true}
        autoplaySpeed={4500}
      >
        {/* item */}
        <div className="card">
          <div className="card-content">
            <div className="row">
              <div className="col s12 m6">
                <img src={photo} alt="" className="responsive-img" />
                <h5>Ministry of Health Ethiopia</h5>
                <p>Addis Ababa</p>
              </div>
              <div className="col s12 m6 desc">
                <p>
                  By combining a flexible healthcare platform, proven
                  go-to-market strategies and best healthcare service,
                  Structured Web and mobile application continues to earn the
                  trust of the Ethiopia’s leading healthcare tech companies,
                  helping to power their channel business by empowering their
                  channel partners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ReactOwlCarousel>
    </div>
  );
}
