import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import ReactWhatsapp from "react-whatsapp";

function Footer() {
  function openPopup() {
    alert(
      "האתר עשוי להשתמש בקובצי קוקיס למעקב אחר פעולות המשתמש ולשפר את השירות המוצע. בכל מקרה, ניתן לשנות את הגדרות הדפדפן כך שהוא לא יאפשר את השימוש בקובצי קוקיס.\nהאתר עשוי לכלול קישורים לאתרים חיצוניים. אין לנו שליטה על תכנים, מדיניות פרטיות ותנאי שימוש של אותם אתרים, ואין לנו כל אחריות ביחס להם.\n"
    );
  }
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            <a href="https://github.com/maayanadivi/kidev">How it works</a>
            <Link to="/Investors">Our vision</Link>
            <Link to="/" onClick={openPopup}>
              Terms of Service{" "}
            </Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <a href="https://api.whatsapp.com/send/?phone=972508688129&text&type=phone_number&app_absent=0">
              Support
            </a>
            <Link to="/Hiring">We Are Hiring</Link>
            <Link to="/Sponsers">Sponsorships</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              KIDEV
              <i class="fa-solid fa-chalkboard" />
            </Link>
          </div>
          <small class="website-rights">KIDEV © 2023</small>
          <div class="social-icons">
            <a
              className="social-icon-link facebook"
              href="https://www.facebook.com/SCE.Bsc?mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="facebook"
            >
              <i class="fab fa-facebook-f" />
            </a>
            <a
              className="social-icon-link instagram"
              href="https://instagram.com/sce.academy?igshid=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </a>

            <a
              className="social-icon-link whatsapp"
              href="https://instagram.com/sce.academy?igshid=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="whatsapp"
            >
              <ReactWhatsapp number="+972508688129">
                <i class="fa-brands fa-whatsapp"></i>
              </ReactWhatsapp>
            </a>
            <a
              className="social-icon-link linkedin"
              href="https://www.linkedin.com/school/-sce/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="linkedin"
            >
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
