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
                    <p>Hi, my name is Evan and I am a student at Las Lomas in Walnut Creek California and DVC
                        in Pleasant Hill. I started self teaching programming in early 2019, and was fascinated
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
                    <h3>Hobbies:</h3>
                    <div className="indented">
                        <ul>
                            <li>Electronics</li>
                            <p>
                                I'm kind of a nerd when it comes to circuitry, even though I can use a bit of saftey 
                                lessons.  I've attemped some teardowns, salvaging and repairs with devices,
                                 as well as made a couple of small circuts.
                            </p>
                            <li>Digital Design</li>
                            <p>I've recently gotten into  digitial design as a hobby.
                                You can see some of my work if you look at my
                                <a href="/Resume.png" className="inlinelink">Resume</a>,
                                or if you run into a 404 error.
                            </p>
                            <li>Rocketry</li>
                            <p>I used to launch model rockets in my free time and was on a
                                TARC team for a season.
                            </p>
                            <li>Robotics</li>
                            <p>I am on a VEX robotics team and love to tinker with robotics.</p>
                            <li>CTFs</li>
                            <p>I regularly compete in CTFs for fun.  I usually do crypto, web, or sten.</p>
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
                                <li>VScode</li>
                                <li>IntelliJ</li>
                                <li>Vim</li>
                            </ul>
                            <h2>Operating Systems</h2>
                            <ul>
                                <li>Ubuntu</li>
                                <li>Fedora</li>
                                <li>Manjaro</li>
                            </ul>
                            <h2>Cybersecurity Tools</h2>
                            <ul>
                                <li>Binwalk</li>
                                <li>Burpsuite</li>
                                <li>Dirb</li>
                                <li>Ghidra</li>
                                <li>Insomnia</li>
                                <li>Wireshark</li>
                            </ul>
                            <h2>Communication/VCS</h2>
                            <ul>
                                <li>Gitkraken</li>
                                <li>Git CLI</li>
                                <li>Zoom</li>
                                <li>Slack</li>
                            </ul>
                        </div>
                    </div>
                    <br/>
                    <div className="indented">
                    <h2>Hardware</h2>
                        <div className="indented">
                            <p>When it comes to hardware, I look out for a few things.  Price, portability,
                               repairability, and durability.  I really like to repair devices if possible, or
                               at least salvage parts once the warranty is expired.  One of my favorite companies
                               for this is Dell because they post schemas and have good repair docs on their site,
                               as well as generally having repair friendly hardware.  I also don't have much
                               of a need for high performance machines thanks to things like cloud computing
                               to run my ml models.  I also am a linux junkie so if it can't boot linux, then
                               I probably won't buy it.
                            </p>
                            <h2>Devices</h2>
                            <ul>
                                <li>Dell xps 13</li>
                                <li>Dell Inspirion 5570</li>
                                <li>Samsung Galaxy j3v</li>
                            </ul>
                            <h2>Electronics</h2>
                            <ul>
                                <li>Raspi 0w</li>
                                <li>Arduino Uno</li>
                            </ul>
                        </div>
                    </div>
                </Card>
            </Layout>
        )
    }   
}