import React from 'react'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          {/* <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <Link href="/">
                  <a className="logo">
                    <img src="/images/logo-white.png" alt="logo" />
                  </a>
                </Link>

                <p>
                Đắm chìm trong bản hòa nhạc tự nhiên, cắm trại tại Mã Đà - Nơi khám phá bản nguyên hoang dã, nâng cao tinh thần phiêu lưu và kết nối tận cùng với thiên nhiên.
                </p>

                <ul className="social-link">
                  <li>
                    <a href="https://www.facebook.com/" className="d-block" target="_blank" rel="noreferrer">
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/" className="d-block" target="_blank" rel="noreferrer">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" className="d-block" target="_blank" rel="noreferrer">
                      <i className="bx bxl-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" className="d-block" target="_blank" rel="noreferrer">
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-6 offset-lg-1">
              <div className="single-footer-widget">
                <h3>Explore</h3>
                <ul className="footer-links-list">
                  <li>
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about-us">
                      <a>About Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses">
                      <a>Courses</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact-us">
                      <a>Contact Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq">
                      <a>FAQ</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
 
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h3>Address</h3>
                <ul className="footer-contact-info">
                  <li>
                    <i className="bx bx-map"></i>
                    Ấp 1, xã, Hiếu Liêm, Vĩnh Cửu, Đồng Nai
                  </li>
                  <li>
                    <i className="bx bx-phone-call"></i>
                    <a href="tel:0918 669 926">0918 669 926</a>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}

          <div className="footer-bottom-area">
            <div className="row align-items-center justify-content-center">
                <p className="text-center">
                  <i className="bx bx-copyright"></i>
                  {currentYear} Product is made by{' '}
                  <a target="_blank" href="/" rel="noreferrer">
                    Bộ tứ siêu đẳng
                  </a>
                </p>

              
            </div>
          </div>
        </div>

        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </footer>
    </>
  )
}

export default Footer
