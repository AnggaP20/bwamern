import React from "react";

import IconCities from "assets/images/img-icon/ic_cities.svg";
import IconTraveler from "assets/images/img-icon/ic_traveler.svg";
import IconTreasure from "assets/images/img-icon/ic_treasure.svg";
import ImgHero from "assets/images/img/img-hero.jpg";
import FrameHero from "assets/images/img/img-frame-hero.jpg";

import Button from "elements/Button";
import NumberFormat from "react-number-format";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.currentoffsetTop - 30,
      behavior: "smooth",
    });
  }
  //const NumberFormat = require("react-number-format");

  return (
    <div>
      <section className="hero-page container pt-4">
        <div className="row align-items-center">
          <div className="col-auto pr-5" style={{ width: 530 }}>
            <h1 className="font-weight-bold line-height-1 mb-3">
              Forget Busy Work <br />
              Start Next Vacation
            </h1>
            <p
              className="mb-4 font-weight-light text-gray-500 w-75"
              style={{ lineHeight: "170%" }}
            >
              We provide what you need to enjoy your holiday with family. Time
              to make another memorable moments.
            </p>
            <Button
              className="btn px-5"
              hasShadow
              isPrimary
              onClick={showMostPicked}
            >
              Show Me Now
            </Button>

            <div className="row" style={{ marginTop: "80px" }}>
              <div className="col-auto" style={{ marginRight: 35 }}>
                <img
                  width="36"
                  height="36"
                  src={IconTraveler}
                  alt={`${props.data.travelers} Travelers`}
                />
                <h6 className="mt-3">
                  <NumberFormat
                    value={props.data.travelers}
                    displayType={"text"}
                    thousandSeparator={true}
                  />{" "}
                  <span className="text-gray-500 font-weigh-light">
                    Travelers
                  </span>
                </h6>
              </div>
              <div className="col-auto" style={{ marginRight: 35 }}>
                <img
                  width="36"
                  height="36"
                  src={IconCities}
                  alt={`${props.data.cities} Cities`}
                />
                <h6 className="mt-3">
                  <NumberFormat
                    value={props.data.cities}
                    displayType={"text"}
                    thousandSeparator={true}
                  />{" "}
                  <span className="text-gray-500 font-weigh-light">Cities</span>
                </h6>
              </div>
              <div className="col-auto">
                <img
                  width="36"
                  height="36"
                  src={IconTreasure}
                  alt={`${props.data.treasures} Treasures`}
                />
                <h6 className="mt-3">
                  <NumberFormat
                    value={props.data.treasures}
                    displayType={"text"}
                    thousandSeparator={true}
                  />{" "}
                  <span className="text-gray-500 font-weigh-light">
                    Treasures
                  </span>
                </h6>
              </div>
            </div>
          </div>

          <div className="col-6 pl-5">
            <div className="image-hero">
              <img
                src={ImgHero}
                alt=""
                className="img-hero img-fluid position-absolute"
                // style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
              />
              <img
                src={FrameHero}
                alt=""
                className="frame-hero img-fluid position-absolute"
                // style={{ margin: "0 -15px -15px 0" }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
