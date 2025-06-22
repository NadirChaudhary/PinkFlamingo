import React from "react";

export default function Header() {
  return (
    <div className="box">
      <div className="birdbox">
        <img src="../public/images/03.svg" alt="" className="bird" />
        <span className="span1">
          <span className="text2">
            <p className="pink1">PINK</p>
            <p>FLAMINGO</p>
          </span>
          <p className="text3">TAGLINE GOES HERE</p>
        </span>
      </div>

      <div className="box2">
        <div className="box3">
            <img src="../public/images/04.svg" alt="" className="location"/>
            <p className="text4">Deliver to 110094</p>
        </div>
        <input type="text" placeholder="Search for medication & Wellness products.." className="input1"/>
        <img src="../public/images/05.svg" alt="" className="searchIcon"/>
      </div>
      <div>
        <img src="../public/images/06.svg" alt="" className="cart" />
      </div>
      <div className="box5">
        <img src="../public/images/07.svg" alt="" />
        <span className="sign">
            <p>SIGN IN / SIGN UP</p>
        </span>
      </div>
    </div>
  );
}
