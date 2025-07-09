import './index.css'
import { FaCode , FaPalette  , FaRocket , FaPeopleArrows  } from 'react-icons/fa'

const About = ()=>(
    <div className='about-container Without integrity*'>
        <h1 className='about-head animation-container '>About Me</h1>
        <p className="about-pera animation-container">
            I'm a passionate and self-motivated Full Stack Developer with a solid foundation in web technologies including <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>Python</strong>, <strong>SQL</strong>, and <strong>React.js</strong>.  
            <br /><br />
            As a fresher, I’ve invested my time in building real-world projects on my own — from responsive websites to interactive web applications — which have helped me gain hands-on experience in both frontend and backend development.
            <br /><br />
            I enjoy solving problems, writing clean code, and continuously learning new technologies. I'm excited to start my career in tech and contribute to meaningful, innovative projects as part of a dynamic team.
        </p>
        <div className='about-skil-card animation-container'>
            <p className='about-skil animation-container'>Html</p>
            <p className='about-skil animation-container'>Css</p>
            <p className='about-skil animation-container'>BootStarp</p>
            <p className='about-skil animation-container'>Python</p>
            <p className='about-skil animation-container'>JavaScript</p>
            <p className='about-skil animation-container'>Sql</p>
            <p className='about-skil animation-container'>React Js</p>
        </div>
        <div className='about-allcard-containers animation-container'>
            <div className='aboutskil-card '>
                <FaCode className='aboutskil-icon1 animation-container'/>
                <h2 className='aboutskil-head animation-container'>Clean Code</h2>
                <p className='aboutskil-pera animation-container'>Writing maintainable, scalable, and efficient code</p>
            </div>
            <div className='aboutskil-card '>
                <FaPalette  className='aboutskil-icon2 animation-container'/>
                <h2 className='aboutskil-head animation-container'>Design Focus</h2>
                <p className='aboutskil-pera animation-container'>Creating beautiful and intuitive user interfaces</p>
            </div>
            <div className='aboutskil-card '>
                <FaRocket className='aboutskil-icon3 animation-container'/>
                <h2 className='aboutskil-head animation-container'>Performance</h2>
                <p className='aboutskil-pera animation-container'>Optimizing applications for speed and efficiency</p>
            </div>
            <div className='aboutskil-card'>
                <FaPeopleArrows className='aboutskil-icon4 animation-container'/>
                <h2 className='aboutskil-head animation-container'>Collaboration</h2>
                <p className='aboutskil-pera animation-container'>Working effectively with teams and stakeholders</p>
            </div>
        </div>

    </div>
)
export default About