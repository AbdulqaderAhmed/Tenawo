import React from "react";
import mobile from "../../assets/img/mobile2.jpg";

export default function Services() {
  return (
    <div className="service">
      <div className="service-title">
        <h6>Some services that we will provide now and in the future</h6>
        <h3>Mobile App Access</h3>
      </div>
      <div className="row">
        <div className="col s12 m4">
          <div className="row">
            <div className="col s12 m12">
              <span class="material-icons">vaccines</span>
              <h5>Searching and buy drugs online</h5>
              <p>
                By simply using our website and application or our call center
                (9456), you will be able to get your prescribed drugs and we can
                help find drug stores/ pharmacies within 500 m radius.
              </p>
            </div>

            <div className="col s12 m12">
              <span class="material-icons">medication</span>
              <h5>Searching and buy drugs online</h5>
              <p>
                By simply using our website and application or our call center
                (9456), you will be able to get your prescribed drugs and we can
                help find drug stores/ pharmacies within 500 m radius.
              </p>
            </div>
          </div>
        </div>
        <div className="col s12 m4">
          <img src={mobile} alt="" srcset="" />
          <a href="#" className="btn btn-wave">
            Get More...
          </a>
        </div>
        <div className="col s12 m4">
          <div className="row">
            <div className="col s12 m12">
              <span class="material-icons">edit_calendar</span>
              <h5>Searching and buy drugs online</h5>
              <p>
                By simply using our website and application or our call center
                (9456), you will be able to get your prescribed drugs and we can
                help find drug stores/ pharmacies within 500 m radius.
              </p>
            </div>

            <div className="col s12 m12">
              <span class="material-icons">emergency</span>
              <h5>Searching and buy drugs online</h5>
              <p>
                By simply using our website and application or our call center
                (9456), you will be able to get your prescribed drugs and we can
                help find drug stores/ pharmacies within 500 m radius.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
