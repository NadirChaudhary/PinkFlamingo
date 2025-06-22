import React from 'react'

export default function Footer() {
  return (
    <div className="footer">
      <div className="subscribe-section">
        <div className="subscribe-left">
          <img src="/images/29.svg" alt="Email Icon" className="email-icon" />
          <p className='textemail'>Sign Up To Shop Now</p>
        </div>
        <div className="subscribe-right">
          <input type="email" placeholder="Enter your email" />
          <button>
            <p className='inputText1'>
            SUBSCRIBE
            </p>
            </button>
        </div>
      </div>

      <hr />

      <div className="footer-links">
        <div className="footer-column">
          <h4>Contact Us</h4>
          <p>Demo Store</p>
          <p>No. 1258 Utawala, Nairobi, 01010</p>
          <p>Kenya</p>
          <p>+25470101010</p>
          <p>example@gmail.com</p>
        </div>

        <div className="footer-column">
          <h4>Information</h4>
          <p>Privacy Policy</p>
          <p>Refund Policy</p>
          <p>Shipping Policy</p>
          <p>Terms Of Service</p>
          <p>Blogs</p>
        </div>

        <div className="footer-column">
          <h4>Account</h4>
          <p>Search</p>
          <p>About Us</p>
          <p>Faq</p>
          <p>Contact</p>
          <p>Help</p>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <p>Incense Sticks</p>
          <p>Shankh</p>
          <p>Kalash</p>
          <p>Incense Holders</p>
          <p>Cone Dhoop</p>
        </div>

        <div className="footer-column col">
          <h4>Social Media.</h4>
          <p>Follow us on social media and stay updated.</p>
          <div className="social-icons">
            <div className='iconback'>
            <img src="/images/30.svg" alt="Twitter" />
            </div>
            <div className='iconback'>
            <img src="/images/31.svg" alt="Facebook" />
            </div>
            <div className='iconback'>
            <img src="/images/32.svg" alt="Instagram" />
            </div>
            <div className='iconback'>
            <img src="/images/33.svg" alt="YouTube" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
