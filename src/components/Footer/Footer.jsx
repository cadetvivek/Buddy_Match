import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ8ookY7Z7P0EpURCA6ugirAU7guqhJrxkGevHtkh2xAwdpuGDz" alt="logo" />
        <div className="footer-brand">
          <h3>Fitness Buddy</h3>
          <p className="tagline">Transform Your Body</p>
          <p className="description">
            Transform Your Body with FitMaker, Your Trusted Partner in Fitness.
            With Over 5 Years of Experience, We Offer Expert Coaching, Tailored
            Workout Plans, and Comprehensive Nutritional Guidance.
          </p>
          <div className="social-links">
            <a href="#" className="social-icon">
              <img src="https://cdn-icons-png.flaticon.com/128/3670/3670144.png" alt="Facebook" />
            </a>
            <a href="#" className="social-icon">
              <img src="https://cdn-icons-png.flaticon.com/128/4103/4103007.png" alt="Instagram" />
            </a>
            <a href="#" className="social-icon">
              <img src="https://cdn-icons-png.flaticon.com/128/4096/4096132.png" alt="Twitter" />
            </a>
            <a href="#" className="social-icon">
              <img src="https://cdn-icons-png.flaticon.com/128/4096/4096116.png" alt="YouTube" />
            </a>
            <a href="#" className="social-icon">
              <img src="https://cdn-icons-png.flaticon.com/128/4102/4102940.png" alt="YouTube" />
            </a>
            <a href="#" className="social-icon">
              <img src="https://cdn-icons-png.flaticon.com/128/17059/17059311.png" alt="YouTube" />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Our Services</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Testimonial</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="#">Fitness Tools</a>
              </li>
              <li>
                <a href="#">Workout Videos</a>
              </li>
              <li>
                <a href="#">Nutrition Guides</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Success Stories</a>
              </li>
              <li>
                <a href="#">Membership</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Programs</h4>
            <ul>
              <li>
                <a href="#">Weight Loss</a>
              </li>
              <li>
                <a href="#">Building Muscles</a>
              </li>
              <li>
                <a href="#">Home Workout</a>
              </li>
              <li>
                <a href="#">Gym Plan</a>
              </li>
              <li>
                <a href="#">Our Plans</a>
              </li>
              <li>
                <a href="#">Fitness Group</a>
              </li>
            </ul>
          </div>

          <div className="footer-section contact-info">
            <h4>Contact Us</h4>
            <ul>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                ING - Dehli
              </li>
              <li>
                <i className="fas fa-phone"></i>
                +91-9876543210
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                FitnessBuddy1234@Gmail.Com
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
