import React from "react";
import kms from "../../assets/img/kmslogo.png";
import Header2 from "../../include/header/Header2";

export default function About() {
  return (
    <>
      <header>
        <Header2 />
      </header>

      <div className="container about">
        <h1>About Tenawo</h1>
        <div className="row">
          <div className="col s12 m7">
            <p>
              KMS ETH Health Trading SC is the first innovative healthcare
              company founded by professionals and innovators from various
              educational diversities from Ethiopia, Canada, the United Kingdom,
              and the United States of America. We envision a healthy and
              prosperous Ethiopian society to have access to quality health
              services and products for everyone.
            </p>
            <p>
              TENAWO is the first multiuser health service website and mobile
              application in Ethiopia that play a vital role in the day-to-day
              health activities of society. The company is launched to close the
              communication gap between healthcare providers, healthcare
              facilities, and clients.
            </p>
            <p>
              This multi-user application comprises drug stores/pharmacies,
              laboratory/pathology, diagnostic centers, diagnostic imaging
              centers, private clinics/hospital, doctors appointments and
              consultation, homecare service, medical and pharmaceutical
              wholesalers, ambulance service, oxygen plant, nursing services,
              physiotherapy services, dental clinic services, medical tourism
              and more. Along with these services, it incorporates the taxi
              service for delivering the defined healthcare services. TENAWO has
              the prospect to save clients, doctors, and all institutions their
              valuable time and money when used properly.
            </p>
          </div>
          <div className="col s12 m5">
            <div className="kmslogo">
              <img src={kms} alt="" />
            </div>
          </div>
        </div>
        <div className="sub-about">
          <div className="mission">
            <h5 className="sub-title">Mission</h5>
            <ol className="list">
              <li>
                To build a healthy society by providing effective medical care
                information at an affordable price by connecting clients with
                the right service providers through technology.
              </li>
              <li>
                To enable our society to have access and locate qualified
                Medical Doctors, pharmacies, medical laboratories, and other
                healthcare providers through user friendly technology.
              </li>
              <li>
                To facilitate and connect clients who are seeking advanced
                medical care outside Ethiopia
              </li>
            </ol>
          </div>
          <div className="core">
            <h5 className="sub-title">Our Core value</h5>
            <p>
              We pursue TENAWO as a platform that makes a real difference for
              real people We are dedicated to ensuring that digital health is
              effective, usable, and feasible - and to make sure that digital
              health products that meet these metrics are shared widely.
            </p>
            <p>Wer are driven by: </p>
            <ol>
              <li>Systems perspective</li>
              <li>Patient-focused excellence</li>
              <li>Valuing people</li>
              <li>Managing for innovation</li>
              <li>Management by fact for quality of health services</li>
              <li>Societal responsibility and community health</li>
              <li>Ethics and transparency</li>
            </ol>
          </div>
          <div className="why">
            <h5 className="sub-title">Why Choose US?</h5>
            <ol className="list">
              <li>Saves your time and money</li>
              <li>You can find drugs or services within 500 meter radius</li>
              <li>100 % safe and simple</li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}
