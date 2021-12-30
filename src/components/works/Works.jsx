import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/acheivements/award.png",
      title: "Guvi Leaderboard 2019",
      desc:
        "Awarded for acheiving top leaderboard person of guvi.in coding portal",
      img:"assets/acheivements/guvi.jpg"
    },
    {
      id: "2",
      icon: "./assets/acheivements/award.png",
      title: "PayPal Spot Award",
      desc:
        "Got a spot award recognition for domain migration work at paypal",
      img:
        "assets/acheivements/spotaward.png",
    },
    {
      id: "3",
      icon: "./assets/acheivements/award.png",
      title: "Hackerrank Six Star Rated Coder",
      desc:
        "Got recognized by hackerrank for advanced problem solving ",
      img:
        "assets/acheivements/Hackerrank.png",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  {/* <span>Projects</span> */}
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
