import Layout from '../components/Layout'
import Header from '../components/Header'
import React from 'react'
import Card from '../components/Card'
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
                    <Button href="/Resume.png">Resume</Button>
                    <Button href="/contact">Contact</Button>
                    <Button href="/about">About</Button>
                </Header>
                <div>
                    <img src="/pfp3.png" id="pfp" className="animated fadeInDown delay-1s"/>
                </div>
                <Card>
                    <h3>Overview</h3>
                    <p>Hi my name is Evan Nishi.  I am active in the programming community, and am a
                        mostly self taught developer.  I have a strong work ethic, a knack for problem
                         solving, and high adaptability to new environments and tools.
                         I am accountable, and have a sense of urgency during projects.  I am always curious,
                       constantly self improving, and am not afraid to fail or ask for help sometimes.
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
                            <li>Hack Merced, attendee, won beginner prize</li>
                            <li>Los Altos Hacks, attendee, won best android app</li>
                            <li>LingHacks 2019, attendee</li>
                            <li>Launch Hacks 2019, attendee</li>
                            <li>Hack Club Flagship summit, attendee</li>
                            <li>Hack Club Leaders week summit, attendee</li>
                            <li>Github secure development spotlight, invitee</li>
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
                    <p>I love learning new technologies, along with the following tools
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
                                <li>Tensorflow</li>
                                <li>Pyquil</li>
                                <li>OpenCV</li>
                                <li>Pipenv</li>
                                <li>Pandas</li>
                                <li>Sqlite</li>
                            </ul>
                        </div> 
                        <h2>Javascript/Typescript</h2>
                        <div className="indented">
                            <div className="skillbar">
                                <div id="jsts"/>
                            </div>
                        </div>
                        <h2>Accompanying tools:</h2>
                        <div className="indented">
                            <ul>
                                <li>Node.js</li>
                                <li>Express</li>
                                <li>React.js</li>
                                <li>Tensorflow.js</li>
                                <li>Discord.js</li>
                                <li>Mongoose/Mongo</li>
                            </ul>
                        </div>
                        <h2>Java</h2>
                        <div className="indented">
                            <div className="skillbar">
                                <div id="java"/>
                            </div>
                        </div>
                        <h2>Accompanying tools:</h2>
                        <div className="indented">
                            <ul>
                                <li>Maven</li>
                                <li>Gradle</li>
                                <li>Spring Boot</li>
                            </ul>
                        </div>
                        <h2>C++</h2>
                        <div className="indented">
                            <div className="skillbar">
                                <div id="cpp"/>
                            </div>
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
