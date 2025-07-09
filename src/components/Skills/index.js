import React from "react"
import "./index.css"

const Skills = () => (
    <>
        <div className="container animation-container">
            <header className="header animation-container">
                <h1 className="main-title animation-container">My Skills</h1>
                <p className="subtitle animation-container">Technologies & Tools I Work With</p>
            </header>

            <section className="skills-section animation-container">
                <div className="skills-grid animation-container">
                    
                    <div className="skill-category animation-divs">
                        <h3 className="category-title animation-container">Frontend Development</h3>
                        <div className="skills-list animation-container">
                            <div className="skill-item animation-container">
                                <div className="skill-info animation-container">
                                    <span className="skill-name animation-container">HTML5</span>
                                    <span className="skill-percentage animation-container">95%</span>
                                </div>
                                <div className="skill-bar animation-container">
                                    <div className="skill-progress-html animation-container"></div>
                                </div>
                            </div>
                            
                            <div className="skill-item animation-container">
                                <div className="skill-info animation-container">
                                    <span className="skill-name animation-container">CSS3</span>
                                    <span className="skill-percentage animation-container">90%</span>
                                </div>
                                <div className="skill-bar animation-container">
                                    <div className="skill-progress-css animation-container" ></div>
                                </div>
                            </div>
                            
                            <div className="skill-item animation-container">
                                <div className="skill-info animation-container">
                                    <span className="skill-name animation-container">JavaScript</span>
                                    <span className="skill-percentage animation-container">85%</span>
                                </div>
                                <div className="skill-bar animation-container">
                                    <div className="skill-progress-java animation-container" ></div>
                                </div>
                            </div>
                            
                            <div className="skill-item animation-container">
                                <div className="skill-info animation-container">
                                    <span className="skill-name animation-container">React</span>
                                    <span className="skill-percentage animation-container">09%</span>
                                </div>
                                <div className="skill-bar animation-container">
                                    <div className="skill-progress-react animation-container" ></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="skill-category animation-divs">
                        <h3 className="category-title animation-container">Backend & Database</h3>
                        <div className="skills-list animation-container" >
                            <div className="skill-item animation-container">
                                <div className="skill-info animation-container">
                                    <span className="skill-name animation-container">Python</span>
                                    <span className="skill-percentage animation-container">80%</span>
                                </div>
                                <div className="skill-bar animation-container">
                                    <div className="skill-progress-python animation-container"></div>
                                </div>
                            </div>
                            
                            <div className="skill-item animation-container">
                                <div className="skill-info animation-container">
                                    <span className="skill-name animation-container">SQL</span>
                                    <span className="skill-percentage animation-container">85%</span>
                                </div>
                                <div className="skill-bar animation-container">
                                    <div className="skill-progress-sql animation-container"></div>
                                </div>
                            </div>
                            
                            <div className="skill-item animation-container">
                                <div className="skill-info animation-container">
                                    <span className="skill-name animation-container">MySQL</span>
                                    <span className="skill-percentage animation-container">80%</span>
                                </div>
                                <div className="skill-bar animation-container">
                                    <div className="skill-progress-mysql animation-container"></div>
                                </div>
                            </div>
                            
        
                        </div>
                    </div>

                    <div className="skill-category animation-divs">
                        <h3 className="category-title animation-container">Development Tools</h3>
                        <div className="skills-list animation-container">
                            <div className="skill-item animation-container">
                                <div className="skill-info animation-container">
                                    <span className="skill-name animation-container">Git</span>
                                    <span className="skill-percentage animation-container">85%</span>
                                </div>
                                <div className="skill-bar animation-container">
                                    <div className="skill-progress-git"></div>
                                </div>
                            </div>
                            
                            <div className="skill-item animation-container">
                                <div className="skill-info animation-container">
                                    <span className="skill-name animation-container">VS Code</span>
                                    <span className="skill-percentage animation-container">90%</span>
                                </div>
                                <div className="skill-bar animation-container">
                                    <div className="skill-progress-vscode animation-container"></div>
                                </div>
                            </div>
                            
                            <div className="skill-item animation-container">
                                <div className="skill-info animation-container">
                                    <span className="skill-name animation-container">Chrome DevTools</span>
                                    <span className="skill-percentage animation-container">80%</span>
                                </div>
                                <div className="skill-bar animation-container">
                                    <div className="skill-progress-chrome animation-container"></div>
                                </div>
                            </div>
                            
                            <div className="skill-item animation-container">
                                <div className="skill-info animation-container">
                                    <span className="skill-name animation-container">Responsive Design</span>
                                    <span className="skill-percentage animation-container">95%</span>
                                </div>
                                <div className="skill-bar animation-container">
                                    <div className="skill-progress-design animation-container"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="tech-icons animation-container">
                <h3 className="section-title animation-container">Technologies at a Glance</h3>
                <div className="icons-grid animation-container">
                    <div className="tech-icon ">
                        <div className="icon-circle ">
                            <span className="icon-text ">HTML</span>
                        </div>
                    </div>
                    <div className="tech-icon ">
                        <div className="icon-circle ">
                            <span className="icon-text ">CSS</span>
                        </div>
                    </div>
                    <div className="tech-icon ">
                        <div className="icon-circle ">
                            <span className="icon-text ">JS</span>
                        </div>
                    </div>
                    <div className="tech-icon ">
                        <div className="icon-circle ">
                            <span className="icon-text ">React</span>
                        </div>
                    </div>
                    <div className="tech-icon ">
                        <div className="icon-circle ">
                            <span className="icon-text ">SQL</span>
                        </div>
                    </div>
                    <div className="tech-icon ">
                        <div className="icon-circle ">
                            <span className="icon-text ">Python</span>
                        </div>
                    </div>
                    <div className="tech-icon ">
                        <div className="icon-circle ">
                            <span className="icon-text ">VSCode</span>
                        </div>
                    </div>
                </div>
            </section>

        </div>
            <div className="floating-elements">
                <div className="float-item float-1"></div>
                <div className="float-item float-2"></div>
                <div className="float-item float-3"></div>
                <div className="float-item float-4"></div>
            </div>
    </>
)

export default Skills