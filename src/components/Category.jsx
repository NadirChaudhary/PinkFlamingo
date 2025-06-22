import Dropdown from "react-multilevel-dropdown";

export default function Category() {
  return (
    <div className="box6">
      <div className="category">
        <p>Home</p>

        <Dropdown
          title={
            <span className="dropdown-label">
              Products
              <img src="/images/08.svg" alt="arrow" className="arrow1" />
            </span>
          }
          className="dropdown-toggle"
        >
          <Dropdown.Item
            title={
              <span className="dropdown-label">
                Products
                <img src="/images/08.svg" alt="arrow" className="arrow1" />
              </span>
            }
            className="dhoop"
          >
            Dhoop Cones
            <Dropdown.Submenu>
              <Dropdown.Item>
                <a className="dropdown-item" href="/">
                  Jar Cones
                </a>
              </Dropdown.Item>
              <Dropdown.Item>
                <a className="dropdown-item" href="/">
                  Chandan Bamboo Dhoop
                </a>
              </Dropdown.Item>
              <Dropdown.Item>
                <a className="dropdown-item" href="/">
                  BackFlow Cone Dhoop
                </a>
              </Dropdown.Item>
              <Dropdown.Item>
                <a className="dropdown-item" href="/">
                  Buddha Red Incense Cone
                </a>
              </Dropdown.Item>
              <Dropdown.Item>
                <a className="dropdown-item" href="/">
                  ountain Sandal Dhoop
                </a>
              </Dropdown.Item>
              <Dropdown.Item>
                <a className="dropdown-item" href="/">
                  Mountain Sandal Dhoop
                </a>
              </Dropdown.Item>
            </Dropdown.Submenu>
          </Dropdown.Item>

          <Dropdown.Item>
            <a className="dropdown-item" href="/">
              Incense Holders
            </a>
          </Dropdown.Item>
          <Dropdown.Item>
            <a className="dropdown-item" href="/">
              Yantras
            </a>
          </Dropdown.Item>
          <Dropdown.Item>
            <a className="dropdown-item" href="/">
              Incense Sticks
            </a>
          </Dropdown.Item>
          <Dropdown.Item>
            <a className="dropdown-item" href="/">
              Pooja Thali Sets
            </a>
          </Dropdown.Item>
          <Dropdown.Item>
            <a className="dropdown-item" href="/">
              Shankh
            </a>
          </Dropdown.Item>
          <Dropdown.Item>
            <a className="dropdown-item" href="/">
              Kalash
            </a>
          </Dropdown.Item>
          <Dropdown.Item>
            <a className="dropdown-item" href="/">
              Book Rests
            </a>
          </Dropdown.Item>
        </Dropdown>
        <Dropdown
          title={
            <span className="dropdown-label">
              Services
              <img src="/images/08.svg" alt="arrow" className="arrow1" />
            </span>
          }
          className="dropdown-toggle"
        ></Dropdown>
        <p>Courses</p>
        <p>Blogs</p>
        <p>Videos</p>
        <p>Contact us</p>
      </div>
    </div>
  );
}
