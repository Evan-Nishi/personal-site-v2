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
                        <Button href="/Evan-Nishi-resume.pdf" target='_blank' rel='noopener noreferrer'>Resume</Button>
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
                        I'm currently looking for internships or new grad roles for Summer 2025, feel free to reach out via
                        <a href="mailto:evan@evannishi.me" className="link">email</a> or 
                        <a href="https://www.linkedin.com/in/evan-nishi" className="link">linkedin</a> if you have or know of any opportunities available!
                    </ClearCard>
                </div>
                <br/>
                <br/>
                <Card>
                    <h3>Overview</h3>
                    <p>Hi my name is Evan Nishi and I'm interested in web development, cybersecurity, and hardware.  Feel free to look at my github: 
                             <a id="sc" href="https://github.com/Evan-Nishi/" className="inlinelink">Github</a>.
                    </p>
                </Card>
                <br/>
                <br/>
                <Card>
                    <h3>Personal Projects</h3>
                    <div className="indented">
                        <ul>
                            <li>Spotify LED Matrix <b className='tech-used'>|python, hardware</b> </li>
                            <p><h5>03/2022-</h5> Programmed an LED matrix to sync up with my spotify and display the album cover and other information about the currently playing song using a raspi <a id="sc" className="inlinelink" href="https://github.com/Evan-Nishi/spotify-panel-client">link</a></p>
                            <li>Birthday Card Generator <b className='tech-used'>|typescript, react, vercel serverless, mongodb</b></li>
                            <p><h5>11/2020-06/2021</h5>Created an api that generates and stores birthday cards with custom messages/theming given a post request <a id="sc" className="inlinelink" href="https://github.com/Evan-Nishi/birthday-card">link</a></p>
                            <li>Media Bias Visualization <b className='tech-used'>| python, web scraping, html/css, vercel serverless</b></li>
                            <p><h5>10/2020-12/2020</h5>Webscraped data and created a visualization of media bias vs viewership <a id="sc" className="inlinelink" href="https://github.com/Evan-Nishi/media-bias-visualization">link</a></p>
                            <li>Personal Site V2 <b className='tech-used'>|typescript, react, html/css</b></li>
                            <p><h5>04/2020-09/2020</h5>Created a personal website (looking at it right now!)</p>
                        </ul>
                    </div>
                </Card>
                <br/>
                <Card>
                    <h3>Class Projects</h3>
                    <div className="indented">
                        <ul>
                            <li>Data Integrated Sparring Helmet (in progress) <b className='tech-used'>|hardware, python, machine learning</b> </li>
                            <p>Currently working on a project under Dr. Kaikai Liu that integrates a single board computer into a sparring helmet and sensor suite to collect data and stream it to a dashboard</p>
                            <li>Fren2meet <b className='tech-used'>| typescript, html/css, mongodb</b> </li>
                            <p>Wrote a when2meet clone with expanded features such as adding friends, have a personal calendar attatched to user profle, and improved UI <a id="sc" className="inlinelink" href="https://github.com/Evan-Nishi/CMPE-133-Project">link</a></p>
                            <li>Skiver <b className='tech-used'>| Java, SQL</b> </li>
                            <p>Built a java journaling app with an SQL backend <a id="sc" className="inlinelink" href="https://github.com/Evan-Nishi/team-61-02">link</a></p>
                        </ul>
                            
                    </div>
                </Card>
                <br/>
                <br/>
                <Card>
                    <h3>Education</h3>
                    <div className="indented">
                        <ul>
                            <li>San Jose State University</li>
                            <p><h5>Student, 2022 - May 2025</h5>B.S. Software Engineering, cybersecurity certificate</p>
                            <li>Diablo Valley College</li>
                            <p><h5>Student, 2019-2022</h5>A.S. Computer Science</p>
                            <li>Las Lomas High School</li>
                            <p><h5>Student, 2018-2022</h5>High School Dilpoma</p>
                        </ul>
                    </div>
                </Card>
                <br/>
                <br/>
                <Card>
                    
                    <h3>Work</h3>
                    <div className="indented">
                        <ul>
                        <li>Drem</li>
                            <p><h5>Intern, 06/2022-07/2023</h5> Was a lead intern for Drem, a fintech startup based in SCU.  Worked mainly with code organization and quality, typescript, tailwind, and react.</p>             
                            <li>San Jose State Computer Science Club</li>
                            <p><h5>Web Developer, 10/2022-12/2022</h5> Made wireframes and wrote code for the San Jose State Computer Science Club's website and infrastructure.</p>
                            <li>The Coder School</li>
                            <p><h5>Code coach, 02/2021-09/2021</h5> Taught and tutored students in basic programming concepts.</p>
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
                        <h2>Javascript/Typescript</h2>
                        <div className="indented">
                            <div>
                                <p>
                                    I am proficient in writing and deploying web applications and APIs with js/ts as well as best practices, serverless functions, various libraries.
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
                                <li>Styled-components</li>
                                <li>Tailwind</li>
                            </ul>
                        </div>
                        <br/>
                        <h2>Python</h2>
                        <div className="indented">
                            <div>
                                <p>
                                    I am very comfortable working in python to automate tasks, write basic machine learning models, process data, and write web applications in python.
                                    <b className="relevant-coursework">Relevant coursework: Intro to Data Science, Machine Learning for Big Data</b>
                                </p>
                                
                            </div>
                        </div>
                        <h2>Accompanying tools:</h2>
                        <div className="indented">
                            <ul>
                                <li>Flask</li>
                                <li>Numpy</li>
                                <li>OpenCV</li>
                                <li>Pandas</li>
                                <li>Poetry</li>
                                <li>Pipenv</li>
                                <li>Sqlite</li>
                                <li>Tensorflow</li>
                            </ul>
                        </div> 
                        <br/>
                        <h2>Java</h2>
                        <div className="indented">
                        
                            <div>
                                <p>
                                    I am comfortable writing code for java gui applications, and working with build tools for both desktop and andriod.
                                    <b className="relevant-coursework">Relevant coursework: Object Oriented Design, Data Structures and Algorithms</b>
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
                        <h2>C/C++</h2>
                        <div className="indented">
                            <div>
                                <p>I am familiar with C/C++ especially in the context of operating systems.
                                    I also used C++ in VEX robotics, mainly working with littlevgl graphics library for the UI of our controller.
                                    <b className="relevant-coursework">Relevant coursework: Operating Systems</b>
                                </p>
                            </div>
                        </div>
                        <br/>
                        <h2>HTML/CSS</h2>
                        <div className="indented">
                            <div>
                                <p>I am proficient in designing, styling, and making responsive static websites with HTML and CSS.</p>
                            </div> 
                        </div>
                        <br/>
                        <h2>SQL</h2>
                        <div className='indented'>
                            <div>
                                <p>I am familiar with writing code for, deploying, and maintaining SQLite and Oracle SQL databases.
                                <b className="relevant-coursework">Relevant coursework:  Database Management, Enterprise Systems</b></p>
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
