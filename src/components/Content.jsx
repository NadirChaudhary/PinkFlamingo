import React from "react";

export default function Content() {
  return (
    <div className="box8">
      <div className="minbox">
        <p className="text9">Shop From Our Top Categories</p>
      </div>

      <div className="minbox2">
        <div className="minbox3">
          <div className="picbox">
            <img src="/images/13.svg" alt="" className="picstyle" />
            <div>
              <p className="shoptitle">Cone Dhoop</p>
              <p className="Shopnow">Shop Now</p>
            </div>
          </div>
          <div className="picbox">
            <img src="/images/14.svg" alt="" className="picstyle" />
            <div>
              <p className="shoptitle">incense Holders</p>
              <p className="Shopnow">Shop Now</p>
            </div>
          </div>
          <div className="picbox">
            <img src="/images/15.svg" alt="" className="picstyle" />
            <div>
              <p className="shoptitle">Incense Sticks</p>
              <p className="Shopnow">Shop Now</p>
            </div>
          </div>
          <div className="picbox">
            <img src="/images/16.svg" alt="" className="picstyle" />
            <div>
              <p className="shoptitle">Shankh</p>
              <p className="Shopnow">Shop Now</p>
            </div>
          </div>
          <div className="picbox">
            <img src="/images/17.svg" alt="" className="picstyle" />
            <div>
              <p className="shoptitle">Kalash</p>
              <p className="Shopnow">Shop Now</p>
            </div>
          </div>
          <div className="picbox">
            <img src="/images/18.svg" alt="" className="picstyle" />
            <div>
              <p className="shoptitle">Buddha</p>
              <p className="Shopnow">Shop Now</p>
            </div>
          </div>
        </div>
      </div>

      <div className="minbox4">
        <div className="minbox5">
          <h1 className="mintext">Why PINK FLAMINGO ?</h1>
        </div>
        <div className="disflex">
          <div className="minbox6">
            <img src="/images/19.svg" alt="" className="whitebird" />
          </div>
          <div className="minbox7">
            <div className="rightbox">
              <img src="/images/20.svg" alt="" className="pinkright" />
              <span className="texto">
                Spirituality can provide them with a framework for understanding
                the universe and their role in it
              </span>
            </div>
            <div className="rightbox1">
              <img src="/images/20.svg" alt="" className="pinkright" />
              <span className="texto">Coping with stress and uncertainty</span>
            </div>
            <div className="rightbox2">
              <img src="/images/20.svg" alt="" className="pinkright" />
              <span className="texto">
                Spirituality can be a path to personal growth and self-discovery
              </span>
            </div>
            <div className="rightbox rightbox3">
              <img src="/images/20.svg" alt="" className="pinkright" />
              <span className="texto">
                Spirituality can provide people with a sense of community and
                connection with others
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* our latest blog */}
      <div className="box9">
        <p className="text10">Our Latest Blogs</p>
        <div className="flexContect">
          <div className="lefticon">
            <img src="/images/10.svg" alt="" className="miniarrow2" />
          </div>
          <div className="flexContect1">
            <div className="conttag">
              <img src="/images/21.svg" alt="" className="tagpic" />
              <p className="text11">The Power of Mindfulness</p>
              <div className="text12">
                <p className="text13">
                  Mindfulness is the practice of being present and fully engaged
                  in the moment. It is about paying attention to our thoughts,
                  feelings, and sensations in a non-judgmental way.
                </p>
              </div>
              <div className="readbox">
                <p className="readtext">Read More</p>
              </div>
              <div className="datetag">
                <p className="datetag1">08-05-2022</p>
              </div>
            </div>
          </div>
          <div className="flexContect1">
            <div className="conttag">
              <img src="/images/22.svg" alt="" className="tagpic" />
              <p className="text11">Connecting with the Divine</p>
              <div className="text12">
                <p className="text13">
                  Connecting with the Divine refers to the process of
                  establishing a spiritual connection or relationship with a
                  higher power, such as God, the Universe, or a higher
                  consciousness.
                </p>
              </div>
              <div className="readbox">
                <p className="readtext">Read More</p>
              </div>
              <div className="datetag">
                <p className="datetag1">11-06-2022</p>
              </div>
            </div>
          </div>
          <div className="flexContect1">
            <div className="conttag">
              <img src="/images/23.svg" alt="" className="tagpic" />
              <p className="text11">The Beauty of Forgiveness</p>
              <div className="text12">
                <p className="text13">
                  The beauty of forgiveness lies in its transformative power. It
                  has the ability to heal wounds and to restore relationships
                  that have been damaged. Forgiveness brings a new level of
                  understanding.
                </p>
              </div>
              <div className="readbox">
                <p className="readtext">Read More</p>
              </div>
              <div className="datetag">
                <p className="datetag1">11-07-2022</p>
              </div>
            </div>
          </div>
          <div className="lefticon">
            <img src="/images/12.svg" alt="" className="miniarrow2" />
          </div>
        </div>
      </div>

      {/* Lets Connect */}
      <div className="box10">
        <div className="text15">
          <p className="text14">Let’s Connect</p>
        </div>
        <div className="box11">
          <div className="box12">
            <div className="box13">
              <div className="pertag">
                <img src="/images/24.svg" alt="" className="minitag" />
                <img src="/images/25.svg" alt="" className="taglin" />

                <input type="text" placeholder="Name" className="inputtag" />
              </div>
              <div className="pertag">
                <img src="/images/26.svg" alt="" className="minitag" />
                <img src="/images/25.svg" alt="" className="taglin" />

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="inputtag"
                />
              </div>
            </div>
            <div className="emaibox">
              <img src="/images/27.svg" alt="" className="minitag" />
              <img src="/images/25.svg" alt="" className="taglin" />

              <input
                type="text"
                placeholder="Phone Number"
                className="inputtag1"
              />
            </div>
            <div className="box14">
              <input
                type="text"
                placeholder="Write your message here"
                className="inputmes"
              />
            </div>
          </div>

          <div className="box12">
            <img src="/images/28.svg" alt="" className="iconBox" />
          </div>
        </div>
      </div>
    </div>
  );
}
