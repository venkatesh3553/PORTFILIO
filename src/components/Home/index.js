import "./index.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen  } from '@fortawesome/free-solid-svg-icons';
import { FaGithub , FaLinkedin  } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md';
const Home = ()=>(
    <div className="home-container">
      <div  className="hero-continer">
        <h1 className="home-head "><span className="span">Iam </span>Full stack Developer</h1>
        <p className="home-pera">Passionate about creating exceptional digital experiences with clean code and innovative solutions. Let's build something amazing together.</p>
        <div className="hero-img-min-screen-caontainer">
        <div class="img-wrapper">
          <img src="https://i.ibb.co/Hfy7665R/Whats-App-Image-2024-07-03-at-15-57-27.jpg" alt="Image" className="img"/>
          <div class="rotating-dot"></div>
        </div>
        <h1 className="hero-name ">Venkata Siva Prsad</h1>
        </div>
        <a 
          href="https://1drv.ms/b/c/46a3e931f66cdff4/EcAfU8U8T6NPiXMGWNReZcsBSbWmSNsA7vwoSvzy7zv_7g?e=4DYMFJ"
          className="home-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faBoxOpen} className="icon" />
          Open My CV
      </a>

   

        <div className="icon-container">
          <div className="icon-border-div">
            <a href="https://github.com/venkatesh3553" target="_blank" rel="noreferrer"> <FaGithub  className="icons"/></a> 
          </div>
          <div className="icon-border-div">
            <a href="https://www.linkedin.com/in/venkata-siva-prasad-p-798180228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"
              rel="noreferrer"><FaLinkedin className="icons"/></a> 
          </div>
          <div className="icon-border-div">
            <a href="mailto:sivaprasad111222333@gmail.com"> <MdEmail className="icons"/>     </a>  
          </div>
        </div>
      </div>
      <div className="hero-img-caontainer">
        <div class="img-wrapper">
          <img src="https://i.ibb.co/Hfy7665R/Whats-App-Image-2024-07-03-at-15-57-27.jpg" alt="Image" className="img"/>
          <div class="rotating-dot"></div>
        </div>
        <h1 className="hero-name ">Venkata Siva Prsad</h1>
        </div>
        
    </div>
)
export default Home
