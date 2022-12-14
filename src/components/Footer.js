import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import ReactWhatsapp from "react-whatsapp";

function Footer() {
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
						<Link to="/sign-up">How it works</Link>
						<Link to="/">Testimonials</Link>
						<Link to="/">Careers</Link>
						<Link to="/">Investors</Link>
						<Link to="/">Terms of Service</Link>
					</div>
					<div class="footer-link-items">
						<h2>Contact Us</h2>
						<Link to="/">whatsapp</Link>
						<Link to="/">Support</Link>
						<Link to="/">Destinations</Link>
						<Link to="/">Sponsorships</Link>
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
					<small class="website-rights">KIDEV © 2022</small>
					<div class="social-icons">
						<Link
							class="social-icon-link facebook"
							to="/"
							target="_blank"
							aria-label="Facebook"
						>
							<i class="fab fa-facebook-f" />
						</Link>
						<Link
							class="social-icon-link instagram"
							to="/"
							target="_blank"
							aria-label="Instagram"
						>
							<i class="fab fa-instagram" />
						</Link>

						<Link
							class="social-icon-link whatsapp"
							to="/"
							target="_blank"
							aria-label="whatsapp"
						>
							<ReactWhatsapp number="+972508688129">
								<i class="fa-brands fa-whatsapp"></i>
							</ReactWhatsapp>
						</Link>
						<Link
							class="social-icon-link linkedin"
							to="/"
							target="_blank"
							aria-label="LinkedIn"
							href="https://www.linkedin.com/school/-sce/"
						>
							<i class="fab fa-linkedin" />
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Footer;
