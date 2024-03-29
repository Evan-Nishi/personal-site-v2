import React from 'react'
import Layout from '../components/Layout'
import Card from '../components/Card'
import Button from '../components/Button'

export default class About extends React.Component{
    render(){
        return(
            <Layout Title="About">
                <div className="homeButton">
                    <Button href="/">Home</Button>
                </div>
                <h1 id="title">About</h1>
                <Card>
                    <h3>About me</h3>
                    <p>Hi, my name is Evan and I am a student at San Jose State University studying software engineering.
                        I started self teaching myself programming in early 2019, and was fascinated
                        with the idea of being able to create whatever I wanted, and learn how to do so
                        off of the internet. I started off with python, and basic web development, but
                        things really changed when I attended Hack Merced.  After I saw the amazing 
                        hacker community, I devoted more and more of my time to coding.  I eventually started organizing
                        events, and hosting workshops.  After Los Altos Hacks, I also got involved with Hack Club,
                        and have been an active member of the community.
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
                    <h3>Hobbies:</h3>
                    <div className="indented">
                        <ul>
                            <li>CTFs</li>
                            <p>I regularly compete in CTFs for fun.  I usually do crypto, web, or sten.</p>

                            <li>Digital Design</li>
                            <p>I've recently gotten into  digitial design as a hobby.
                                I usually do small projects in figma and sometimes photoshop.
                            </p>
                            <li>Electronics</li>
                            <p>
                                I'm kind of a nerd when it comes to circuitry, even though I can use a bit of saftey 
                                lessons.  I've attemped some teardowns, salvaging and repairs with devices,
                                 as well as made a couple of small circuts.
                            </p>

                            <li>Rocketry</li>
                            <p>I used to launch model rockets in my free time and was on a
                                TARC team for a season.
                            </p>
                            
                            <li>Robotics</li>
                            <p>I am on a VEX robotics team and love to tinker with robotics.</p>
                            
                        </ul>
                    </div>
                </Card>
                <br/>
                <br/>
                <Card>
                    <h3>Tooling preferences</h3>
                    <p>Here are the tools I use to do my daily work and school.
                        These include hardware, software, and everything in between.
                    </p>
                    <div className="indented">
                        <h2>Software</h2>
                        <p>Here are some of the software programs I use for projects and competitions.</p>
                        <div className="indented">
                            <h2>Editors/IDE</h2>
                            <ul>
                                <li>IntelliJ</li>
                                <li>Vim</li>
                                <li>VScode</li>
                            </ul>
                            <h2>Operating Systems</h2>
                            <ul>
                                <li>Fedora</li>
                                <li>Manjaro</li>
                                <li>Ubuntu</li>
                            </ul>
                            <h2>Cybersecurity Tools</h2>
                            <ul>
                                <li>Binwalk</li>
                                <li>Burpsuite</li>
                                <li>Dirb</li>
                                <li>Ghidra</li>
                                <li>Wireshark</li>
                            </ul>
                            <h2>Communication/VCS</h2>
                            <ul>
                                <li>Gitkraken</li>
                                <li>Git CLI</li>
                                <li>Slack</li>
                                <li>Zoom</li>
                            </ul>
                        </div>
                    </div>
                    <br/>
                </Card>
            </Layout>
        )
    }   
}