import Layout from '../components/Layout'
import Header from '../components/Header'
import React from 'react'

export default class Index extends React.Component {
    render(){
        return(   
            <Layout>
                <div>
                    <img src="/barseg1.png" id="TopBar" className="animated slideInRight"/> 
                    <img src="/topbar2.png" id="SmolBar" className="animated slideInRight"/> 
                </div>
                <Header/>
                <img src="/pfp3.png" id="pfp" className="animated fadeInDown delay-1s"/>
                <br/>
                <div className="container">
                    <h3>About me:</h3>
                    <p>Hi, my name is Evan and I am a student at Las Lomas in Walnut Creek California and DVC
                            in Pleasant Hill. I started self teaching programming in early 2019, and was fascinated
                            with the idea of being able to create whatever I wanted, and learn how to do so
                            off of the internet. I started off with python, and basic web development, but
                            things really changed when I attended Hack Merced.  After I saw the amazing 
                            hacker community, I devoted more and more of my time to coding.  I am always curious,
                            constantly self improving, and am not
                            afraid to fail or ask for help sometimes.  I have a solid work ethic, and 
                            adapt to new environments and technologies quickly.</p>
                </div>
                <br/>
                <br/>
                <div className="container">
                    <h3>Events</h3>
                    <p>In the past few months, hackathons and the hacker community as a whole
                        have changed my life completely.  I love this community and as a way
                        of giving back I organize events with the single priority.  That is 
                        "Hackers First".  I also love meeting new people and sharpening my
                        skills at hackathons and other similiar events.
                    </p>
                    <div className="indented">
                    <h2>Events I've attended:</h2>
                    <div className="indented">
                        <ul>
                            <li>Hack Merced, attendee won beginner prize</li>
                            <li>Los Altos Hacks, attendee won best android app</li>
                            <li>LingHacks, attendee</li>
                            <li>Launch Hacks, attendee</li>
                        </ul>
                    </div>
                    <h2>Events I've organized/mentored:</h2>
                    <div className="indented">
                        <ul>
                            <li>CDBA Spring 2019, organizer</li>
                            <li>AngelHacks, advisor</li>
                            <li>CDBA Fall 2019, organizer</li>
                            <li>Atoms&Bits, advisor</li>
                            <li>Hack The New Year, mentor</li>
                            <li>CDBA Winter 2020, organizer</li>
                        </ul>
                    </div>
                    </div>
                </div>
                <br/>
                <br/>
                <div className="container" id="skills">
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
                    </div>
                </div>
                <br/>
                <br/>
                <div className="container">
                    <h3>Work/Education/Volunteer</h3>
                    <div className="indented">
                        <ul>
                            <li>Student, Las Lomas High School, 2018-2020</li>
                            <p>Currently a student at Las Lomas High School, Current GPA:4.0, WGPA: 4.13</p>
                            <h5></h5>
                            <li>Student, Diablo Valley College, 2018-2020</li>
                            <p>Currently enrolled in Diablo Valley College and working towards my AA degree
                                    in computer science.  Current GPA: 4.0</p>
                            <li>Founder and President, Las Lomas Hack Club,03/2019-present</li>
                            <p>Organize, and founded a small Hack Club at my high school with ~5-10 regular members.</p>
                            <li>Contract backend web developer, TrantonLLC, 01/2020-02/2020 </li>
                            <p>Was a paid contract developer for TrantonLLC.  Worked mainly with discord.js
                                and express.
                            </p>
                            <li>Math tutor, Monument Crisis, 09/2018-01/2020</li>
                            <p>Was a math and english tutor who helped underprivelaged kids study
                                and do homework.
                            </p>
                        </ul>
                    </div>
                </div>
                <br/>
                <br/>
                <div className="container">
                    <h3>Hobbies:</h3>
                    <div className="indented">
                        <ul>
                            <li>Electronics</li>
                            <p>I'm kind of a nerd when it comes to circuitry.</p>
                            <li>Digital Design</li>
                            <p>I've recently gotten into  digitial design as a hobby.
                                You can see some of my work is you look at my
                                <a href="/Resume.png" className="inlinelink"> Resume</a>,
                                or if you get a 404 error.
                            </p>
                            <li>Rocketry</li>
                            <p>I used to launch model rockets in my free time, and was on a
                                    TARC team for a season.
                            </p>
                            <li>Robotics</li>
                            <p>I am on a VEX robotics team and love to tinker with robotics sometimes.</p>
                            <li>CTFs</li>
                            <p>I regularly compete in CTFs for fun.  I usually do crypto, web, or sten.</p>
                        </ul>
                    </div>
                </div>
                <div className="blank"/>
            </Layout>
        )
    }
}
