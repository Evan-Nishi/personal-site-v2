import Layout from '../components/Layout'
import Header from '../components/Header'
import React from 'react'
import Card from '../components/Card'
import ClearCard from '../components/ClearCard'
import Button from '../components/Button'

export default class Index extends React.Component {
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
                <ClearCard>
                    I'm currently looking for internships or part time gigs, feel free to reach out via
                    <a id="sc" href="mailto:evan@evannishi.com" className="inlinelink">email</a> or 
                    <a id="sc" href="https://www.linkedin.com/in/evan-nishi-804a85183/" className="inlinelink">linkedin</a>!
                    </ClearCard>
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
                    <h3>Events</h3>
                    <p>Some of my most defining and impactful work is organizing events to educate
                       others about computer science.  I always organize events with the 
                       "Hackers First" mentality, meaning attendees experience is the most important.
                         I also love meeting new people and sharpening my
                       skills at hackathons and other similar events.
                    </p>
                    <div className="indented">
                    <h2>Events I've attended:</h2>
                    <div className="indented">
                        <ul>
                            <li>Hack Merced IV, attendee, won beginner prize</li>
                            <li>Los Altos Hacks, attendee, won best android app</li>
                            <li>LingHacks 2019, attendee</li>
                            <li>Launch Hacks 2019, attendee</li>
                            <li>Hack Club Flagship summit, attendee</li>
                            <li>Hack Club Leaders week summit, attendee</li>
                            <li>Github secure development spotlight, invitee</li>
                            <li>UC Berkeley aging research and technology summit, attendee</li>
                            <li>Hack Merced V, attendee, won best use of mongodb and 1st moonshot prize</li>
                        </ul>
                    </div>
                    <h2>Events I've organized/mentored:</h2>
                    <div className="indented">
                        <ul>
                            <li>CDBA Spring 2019, outreach organizer</li>
                            <li>AngelHacks, advisor/workshop leader</li>
                            <li>CDBA Fall 2019, sponsorships organizer</li>
                            <li>Atoms&Bits, advisor/workshop leader</li>
                            <li>Hack The New Year, mentor</li>
                            <li>CDBA Winter 2020, sponsorships organizer</li>
                        </ul>
                    </div>
                    </div>
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
                            <li>Las Lomas Hack Club</li>
                            <p><h5>Founder and President, 03/2019-present </h5>Organize, and founded a small Hack Club at my high school with ~5-10 regular members.</p>
                            <li>TrantonLLC </li>
                            <p><h5>Contract backend web developer, 01/2020-02/2020</h5>Was a paid contract developer for TrantonLLC.  Worked mainly with discord.js
                                and express.
                            </p>
                            <li>Monument Crisis</li>
                            <p><h5>Math tutor, 09/2018-01/2020</h5>Was a math and english tutor who helped underprivileged kids study
                                and do homework.
                            </p>
                        </ul>
                    </div>
                </Card>
                <br/>
                <br/>
                <Card>
                    <h3>Tools/Technologies:</h3>
                    <p>I love learning new technologies, along with the following tools.  These bars 
                        represent my familiarity with each respective language.
                        I am also experienced with linux, scrum, git, and bash scripting.
                    </p>
                    <div className="indented">
                        <h2>Python</h2>
                        <div className="indented">
                            <div className="skillbar">
                                <div id="python"/>
                            </div>
                        </div>
                        <h2>Accompanying tools:</h2>
                        <div className="indented">
                            <ul>
                                <li>OpenCV</li>
                                <li>Pandas</li>
                                <li>Pipenv</li>
                                <li>Pyquil</li>
                                <li>Sqlite</li>
                                <li>Tensorflow</li>
                            </ul>
                        </div> 
                        <br/>
                        <h2>Javascript/Typescript</h2>
                        <div className="indented">
                            <div className="skillbar">
                                <div id="jsts"/>
                            </div>
                        </div>
                        <h2>Accompanying tools:</h2>
                        <div className="indented">
                            <ul>
                                <li>Discord.js</li>
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
                            <div className="skillbar">
                                <div id="java"/>
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
                            <div className="skillbar">
                                <div id="cpp"/>
                            </div>
                        </div>
                        <br/>
                        <h2>HTML/CSS</h2>
                        <div className="indented">
                            <div className="skillbar">
                                <div id="htmlcss"/>
                            </div> 
                        </div>
                        <h2>Accompanying tools:</h2>
                        <div className="indented">
                            <ul>
                                <li>Bulma</li>
                            </ul>
                        </div>
                        <br/>
                        <h2>Ruby</h2>
                        <div className="indented">
                            <div className="skillbar">
                                <div id="ruby"/>
                            </div> 
                        </div>
                        <h2>Accompanying tools:</h2>
                        <div className="indented">
                            <ul>
                                <li>Ruby on Rails</li>
                            </ul>
                        </div>
                        <br/>
                    </div>
                </Card>
                <br/>
                <br/>
            </Layout>
        )
    }
}
