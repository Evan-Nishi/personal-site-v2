import Layout from '../components/Layout'
import Header from '../components/Header'
import React from 'react'
import Card from '../components/Card'
import ClearCard from '../components/ClearCard'
import Button from '../components/Button'

export default class Index extends React.Component {
    constructor(props){
        super(props)
        this.remove = this.remove.bind(this)
    }

    remove(element){
        document.getElementById(element).style.display = "none"
    }
    render(){
        return(   
            <Layout Title="Evan Nishi">
                <div>
                    <Header>
                        <Button href="/Evan-Nishi-Resume.pdf">Resume</Button>
                        <Button href="/contact">Contact</Button>
                        <Button href="/about">About</Button>
                    </Header>
                    <img src="/barseg1.png" id="TopBar" className="animated slideInRight delay-1s"/> 
                    <img src="/topbar2.png" id="SmolBar" className="animated slideInRight"/> 
                </div>

                <div>
                    <img src="/pfp3.png" id="pfp" className="animated fadeInDown delay-1s"/>
                </div>
                <div id="job">
                    <ClearCard>
                        <p className="cancel" onClick={() => this.remove("job")}>X</p>
                        I'm currently looking for internships or part time gigs, feel free to reach out via
                        <a href="mailto:evan@evannishi.me" className="link">email</a> or 
                        <a href="https://www.linkedin.com/in/evan-nishi" className="link">linkedin</a> if you have or know of any opportunities available!
                    </ClearCard>
                </div>
                <br/>
                <br/>
                <Card>
                    <h3>Overview</h3>
                    <p>Hi my name is Evan Nishi, a self taught programmer, community leader, and avid learner.
                          I have demonstrated a strong work ethic, a passion for learning,
                           high adaptability, a knack for problem solving, and accountability while on projects.
                          I mainly do web development, but also some machine learning on the side.
                            If you want to see some of my projects, feel free to look on my
                             <a id="sc" href="https://github.com/Evan-Nishi/" className="inlinelink">Github</a>.
                    </p>
                </Card>
                <br/>
                <br/>
                <Card>
                    <h3>Personal Projects</h3>
                    <div className="indented">
                        <ul>
                            <li>Personal Site V2</li>
                            <p><h5>04/2020-09/2020</h5>Created a personal website (looking at it right now!)</p>
                            <li>Media Bias Visualization</li>
                            <p><h5>10/2020-12/2020</h5>Webscraped data and created a visualization of media bias vs viewership <a id="sc" className="inlinelink" href="https://github.com/Evan-Nishi/media-bias-visualization">link</a></p>
                            <li>Birthday Card Generator</li>
                            <p><h5>11/2020-06/2021</h5>Created an api that generates and stores birthday cards with custom messages/theming given a post request <a id="sc" className="inlinelink" href="https://github.com/Evan-Nishi/birthday-card">link</a></p>
                            <li>Spotify LED Matrix</li>
                            <p><h5>03/2022</h5> Programmed an LED matrix to sync up with my spotify and display the album cover and other information about the currently playing song using a raspi <a id="sc" className="inlinelink" href="https://github.com/Evan-Nishi/spotify-panel-client">link</a></p>
                        </ul>
                    </div>
                </Card>
                <br/>
                <br/>
                <Card>
                    <h3>Education</h3>
                    <div className="indented">
                        <ul>
                            <li>Las Lomas High School</li>
                            <p><h5>Student, 2018-2022</h5>High School Dilpoma</p>
                            <li>Diablo Valley College</li>
                            <p><h5>Student, 2019-2022</h5>A.S. Computer Science</p>
                            <li>San Jose State University</li>
                            <p><h5>Student, 2022-present</h5>B.S. Digital Forensics</p>
                        </ul>
                    </div>
                </Card>
                <br/>
                <br/>
                <Card>
                    
                    <h3>Work</h3>
                    <div className="indented">
                        <ul>
                            <li>TrantonLLC </li>
                            <p><h5>Contract backend web developer, 01/2020-02/2020</h5>Was a paid contract developer for TrantonLLC.  Worked mainly with discord.js, AWS EC2, and express.
                            </p>
                            <li>The Coder School</li>
                            <p><h5>Code coach, 02/2021-09/2021</h5> Taught and tutored students in basic programming concepts.</p>
                            <li>Kwan Logistics</li>
                            <p><h5>Grunt, 06/2022-07/2022</h5> Literally moved and palletized boxes and helped staff with computer issues in the hot LA sun.  A little hard labor goes a long way.</p>
                            <li>Drem</li>
                            <p><h5>Intern, 06/2022-09/2022</h5> Was a lead intern for Drem, a fintech startup based in SCU.  Worked mainly with code organization and quality, typescript, tailwind, and react.</p>
                        </ul>
                    </div>
                </Card>
                <br/>
                <br/>
                <Card>
                    <h3>Tools/Technologies:</h3>
                    <p>I love learning new technologies, along with the following tools.
                        I am also experienced with linux, scrum, git, mongodb administration, and bash scripting.
                    </p>
                    <div className="indented">
                        <h2>Javascript/Typescript</h2>
                        <div className="indented">
                            <div>
                                <p>I am familiar with syntax and structure of javascript programs, as well as Object Oriented concepts and modules.
                                    I am also familiar with sending and receiving requests, CRUD operations with noSQL databases, dynamic websites with react,
                                     and asynchronous programming.
                                </p>
                            </div>
                        </div>
                        <h2>Accompanying tools:</h2>
                        <div className="indented">
                            <ul>
                                <li>Express</li>
                                <li>Mongoose/Mongo</li>
                                <li>Next.js</li>
                                <li>Node.js</li>
                                <li>React.js</li>
                            </ul>
                        </div>
                        <br/>
                        <h2>Python</h2>
                        <div className="indented">
                            <div>
                                <p>I am familiar with syntax and structure of python, as well as Object Oriented concepts and modules.
                                    I also am familiar with the usage of virtual environments with pip packages.  I also have some understanding
                                     of data science and machine learning concepts and have taken basic data science COMSC-120ds at DVC.
                                </p>
                            </div>
                        </div>
                        <h2>Accompanying tools:</h2>
                        <div className="indented">
                            <ul>
                                <li>OpenCV</li>
                                <li>Pandas</li>
                                <li>Poetry</li>
                                <li>Pipenv</li>
                                <li>Pyquil</li>
                                <li>Sqlite</li>
                                <li>Tensorflow</li>
                            </ul>
                        </div> 
                        <br/>
                        <h2>Java</h2>
                        <div className="indented">
                            <div>
                                <p>I took APCS A and COMSC 255, which taught Java gui programming, control flow, and OOP.  I also learned web development and routing
                                     with Spring Boot, as well as familiarized myself with build tools such as Gradle and Maven.
                                </p>
                            </div>
                        </div>
                        <h2>Accompanying tools:</h2>
                        <div className="indented">
                            <ul>
                                <li>Gradle</li>
                                <li>Maven</li>
                                <li>Spring Boot</li>
                            </ul>
                        </div>
                        <br/>
                        <h2>C++</h2>
                        <div className="indented">
                            <div>
                                <p>I took COMSC 110, COMSC 165, COMSC 200 and COMSC 210 at DVC and covered C++ fundamentals, data structures, and best practices.
                                     I also used C++ in VEX robotics, mainly working with 
                                    littlevgl graphics library for the UI of our controller.
                                </p>
                            </div>
                        </div>
                        <br/>
                        <h2>HTML/CSS</h2>
                        <div className="indented">
                            <div>
                                <p>I know how to style and make responsive static websites with HTML and CSS.</p>
                            </div> 
                        </div>
                    </div>
                </Card>
                <br/>
                <br/>
            </Layout>
        )
    }
}
