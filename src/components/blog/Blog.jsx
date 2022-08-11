import React from "react";
import news from "../../assets/img/news.jpeg";
import recent from "../../assets/img/Header3.jpg";

export default function Blog() {
  return (
    <div className="row">
      <h2>Latest News</h2>
      <div className="col s12 m6">
        <div className="card">
          <div className="card-image">
            <img src={news} />
          </div>
          <div className="card-content">
            <p>
              <span className="card-title">
                የጤናዉ ዘርፍ ፈር ቀዳጅ ለሆነዉ ኩባንያ ባለቤትና ተጠቃሚ ዛሬዉኑ ይሁኑ ‼️
              </span>
              July 19, 2022
            </p>
            <p>
              #ለጤናዎ ዘርፍ የድጅታል ትራንስፎርሜሽን ፈር ቀዳጅ ለሆነዉና በጤናዉ ስርዓት ግዙፍ ካምፓኒ ለሆነዉ ኬ
              ኤም ኤስ ኢ ቲ ኤች ኽልዝ ትሬዲንግ አ.ማ ( KMS ETH Health Trading S.C ) ባለቤትና
              ተጠቀሚ ይሆኑ ዘንድ እነዎ ከሰኔ 1/2014 ዓ.ም ጀምሮ በሼር ሽያጭ ላይ ይገኛል ። ካምፓኒው
              ጤናዎ(TENAWO) የሚባል የሞባይል መተግበሪያና ድህረገፅ እንዲሁም የጥሪ ማዕከል 9456 በመክፈት በስራ
              ላይ ይገኛል። ካምፓኒው ከ 100 በላይ የጤና ተቋማትና ከ 200 በላይ የሃኪሞች አብረዉት ይሰራሉ።
            </p>
          </div>
          <div className="card-action">
            <a href="#">Read More...</a>
          </div>
        </div>
      </div>
      <div className="col s12 m6">
        <div className="card-panel">
          <p>Recent Posts</p>
          <div class="recent-card ">
            <div class="row valign-wrapper">
              <div class="col s2">
                <img src={recent} alt="" class="circle responsive-img" />
              </div>
              <div class="col s10">
                <span class="black-text">
                  This is a square image. Add the "circle" class to it to make
                  it appear circular.
                </span>
              </div>
            </div>
          </div>
          <div class="recent-card ">
            <div class="row valign-wrapper">
              <div class="col s2">
                <img src={recent} alt="" class="circle responsive-img" />
              </div>
              <div class="col s10">
                <span class="black-text">
                  This is a square image. Add the "circle" class to it to make
                  it appear circular.
                </span>
              </div>
            </div>
          </div>
          <div class="recent-card">
            <div class="row valign-wrapper">
              <div class="col s2">
                <img src={recent} alt="" class="circle responsive-img" />
              </div>
              <div class="col s10">
                <span class="black-text">
                  This is a square image. Add the "circle" class to it to make
                  it appear circular.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="custom-btn">
        <a href="#" className="btn btn-large btn-wave blue">
          Read More...
        </a>
      </div>
    </div>
  );
}
