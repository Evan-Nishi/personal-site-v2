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
                    <img src="/barseg1.png" id="TopBar" className="animated slideInRight delay-1s"/> 
                    <img src="/topbar2.png" id="SmolBar" className="animated slideInRight"/> 
                </div>
                <Header>
                    <Button href="/Evan-Nishi-resume.pdf">Resume</Button>
                    <Button href="/contact">Contact</Button>
                    <Button href="/about">About</Button>
                </Header>
                <div>
                    <img src="/pfp3.png" id="pfp" className="animated fadeInDown delay-1s"/>
                </div>
                <div id="job">
                    <ClearCard>
                        <p className="cancel" onClick={() => this.remove("job")}>X</p>
                        I'm currently looking for internships or part time gigs, feel free to reach out via
                        <a href="mailto:evan@evannishi.me" className="link">email</a> or 
                        <a href="https://www.linkedin.com/in/evan-nishi-804a85183/" className="link">linkedin</a> if you have or know of any opportunities available!
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
                    <h3>Work/Education</h3>
                    <div className="indented">
                        <ul>
                            <li>Las Lomas High School</li>
                            <p><h5>Student, 2018-2022</h5>Currently a student at Las Lomas High School, Current GPA:4.0, WGPA: 4.13</p>
                            <li>Diablo Valley College</li>
                            <p><h5>Student, 2018-2022</h5>Currently enrolled in Diablo Valley College and working towards my AA degree
                                    in computer science.  Current GPA: 4.0</p>
                            <li>TrantonLLC </li>
                            <p><h5>Contract backend web developer, 01/2020-02/2020</h5>Was a paid contract developer for TrantonLLC.  Worked mainly with discord.js, AWS EC2, and express.
                            </p>
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
                        <h2>Python</h2>
                        <div className="indented">
                            <div>
                                <p>I am familiar with syntax and structure of python, as well as Object Oriented concepts and modules.
                                    I also am familiar with the usage of virtual environments with pip packages.  I also have some understanding
                                     of data science and machine learning concepts.
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
                        <h2>Java</h2>
                        <div className="indented">
                            <div>
                                <p>I took APCS A, and covered program structure and Object Oriented programming.  I also learned web development and routing
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
                                <p>I took COMPSC 110 at DVC and covered C++ fundamentals.  I also use C++ in VEX robotics, mainly working with 
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
