import React from "react";

export default function Contact() {
  return (
    <div className="container contact">
      <h2>Contact us</h2>
      <div className="row">
        <div className="card">
          <div className="col s12 m6">
            <div className="row">
              <form action="#">
                <div className="input-field col s12">
                  <input type="text" className="validate" id="name" />
                  <label htmlFor="name">Full Name</label>
                </div>
                <div className="input-field col s12">
                  <input type="text" className="validate" id="subject" />
                  <label htmlFor="subject">Subject</label>
                </div>
                <div className="input-field col s12">
                  <input type="email" className="validate" id="email" />
                  <label htmlFor="email">Email</label>
                </div>
                <div className="input-field col s12">
                  <textarea
                    id="textarea1"
                    className="materialize-textarea"
                  ></textarea>
                  <label htmlFor="textarea1">Message</label>
                </div>
                <button type="submit" className="btn btn-">
                  Send
                </button>
              </form>
            </div>
          </div>

          {/* address and number */}
          <div className="col s12 m5">
            <p>
              <span>Address:</span>
              Ethiopia, Addis Ababa, Bole Sub-City,Woreda 07, Figa Mazoria Area,
              Gebrila Building, Office No. 302
            </p>
            <h3>9456</h3>
            <p>
              <span>Mobile Number:</span>+251904868788
            </p>
            <p>
              <span>Office Number:</span>+251116683203/04
            </p>
            <p>
              <span>Email:</span>
              KMS@tenawo.com or kmstenawo@gmail.com
            </p>
            <p>
              Our support available to help you 24 hours a day, seven days week
            </p>
          </div>

          {/* map */}
          <div className="col s12 m12">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  width="600"
                  height="500"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=KMS%20ETH%20Health%20Trading%20S.C,%20jacros%20-%20salite%20mehret%20rd&t=&z=19&ie=UTF8&iwloc=&output=embed"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                ></iframe>
                <a href="https://123movies-to.org">123 movies</a>
                <br />
                <a href="https://www.embedgooglemap.net">embedgooglemap.net</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
