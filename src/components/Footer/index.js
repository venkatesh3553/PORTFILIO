import { FaGithub, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import './index.css';

const Footer = () => (
  <footer className="footer animation-container">
    <div className="footer-container animation-container">

      {/* About Section */}
      <div className="footer-section animation-container">
        <h3 className="footer-title animation-container">Venkata Siva Prasad</h3>
        <p className="footer-subtitle animation-container">Full Stack Developer</p>
        <p>Passionate about building scalable web applications and creating smooth user experiences using modern technologies like React, Node.js, MongoDB, and more.</p>
      </div>

      {/* Contact Section */}
      <div className="footer-section animation-container">
        <h4 className="footer-heading animation-container">Contact</h4>
        <p><MdEmail className="footer-icon animation-container" /> sivaprasad111222333@gmail.com</p>
        <p><FaPhoneAlt className="footer-icon animation-container" /> +91 6305168684</p>
        <p><MdLocationOn className="footer-icon animation-container" /> Andhra Pradesh, India</p>
      </div>

      {/* Links Section */}
      <div className="footer-section animation-container">
        <h4 className="footer-heading animation-container">Quick Links</h4>
        <ul className="footer-links animation-container">
          <li className='animation-container'><a href="#home">Home</a></li>
          <li className='animation-container'><a href="#about">About</a></li>
          <li className='animation-container'><a href="#skills">Skills</a></li>
          <li className='animation-container'><a href="#projects">Projects</a></li>
          <li className='animation-container'><a href="#contact">Contact</a></li>
        </ul>
      </div>

      {/* Social Section */}
      <div className="footer-section animation-container">
        <h4 className="footer-heading animation-container">Connect</h4>
        <div className="footer-socials animation-container">
          <a href="https://github.com/venkatesh3553" target="_blank" rel="noreferrer">
            <FaGithub className="footer-social-icon animation-container" />
          </a>
          <a href="https://www.linkedin.com/in/venkata-siva-prasad-p-798180228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">
            <FaLinkedin className="footer-social-icon animation-container" />
          </a>
        </div>
      </div>

    </div>

    {/* Footer Bottom */}
    <div className="footer-bottom ">
      <p className='end'>© {new Date().getFullYear()} Venkata Siva Prasad. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
