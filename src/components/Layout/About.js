import React from "react";
import { Link } from 'react-router-dom';
import me from '../../assets/me.jpg';

let text1 = 'text1'
let text2 = 'text2'
let text3 = 'text3'
let text4 = 'text4'

export default class About extends React.Component {

    render() {
        return (
            <section className='section-about' id='about'>
                <div className="heading">
                    <p className="heading__sub">Get to know me</p>
                    <h1 className="heading__title">About me</h1>
                </div>
                <div className="content">
                    {/* left div */}
                    <div className="left-side facts">
                        <p className="fact">
                            <span className="fact__question">I'm a —</span>
                            <span className="fact__answer">junior full stack developer</span>
                        </p>
                        <p className="fact">
                            <span className="fact__question">Outside the web I like —</span>
                            <span className="fact__answer">tinkering with Arduino and building IoT projects &amp; solutions</span>
                        </p>
                        <p className="fact fact-last">
                            <span className="fact__question">My favorite songs —</span>
                            <span className="fact__answer">check out my spotify playlist</span>
                        </p>
                        <img src={me} alt="a picture of me" />
                    </div>
                    {/* right div */}
                    <div className="right-side">
                        <div className="about">
                            <h3 className="about__title">
                                Hi, I'm Lennert.
                            </h3>
                            <ul className="about__navigation">
                                <li id='text1' className='toggle active' onClick={(e) => { this.changeText(e, text1) }}>01</li>
                                <li id='text2' className='toggle' onClick={(e) => { this.changeText(e, text2) }}>02</li>
                                <li id='text3' className='toggle' onClick={(e) => { this.changeText(e, text3) }}>03</li>
                                <li id='text4' className='toggle' onClick={(e) => { this.changeText(e, text4) }}>04</li>
                            </ul>
                            <div className="about__text">
                                <p id='tab1' className='tab-text show-tab'>
                                    I'm a 21 years old web developer living in Antwerp, Belgium.
                                    I graduated in June 2020 with a bachelor's degree in Multimedia &amp; Communications Technology. <br /><br />
                                    As of august 2020 I'm working as a front end Drupal developer in Mia Interactive (Antwerp, Belgium). <br />
                                    This role gives me a lot of flexibility and helps me maintain a wide skill set. Although the front-end is mainly html, css, javascript, ... The Drupal aspect also requires my PHP skills to be on point.
                                </p>
                                <p id='tab2' className='tab-text'>
                                    When I'm not behind a desk creating web applications, I like to hang out at my local scouts or go cycling. I enjoy being out in the nature and travelling to remote places.
                                    <br /><br />
                                    The programming doesn't stop at work. In my free time I like to create small personal projects. These side-projects don't have to be web connected but always end up to being fun and educational.
                                </p>
                                <p id='tab3' className='tab-text'>
                                    Thanks to school and the numerous amount of side-projects, I've managed to gather a pretty wide skillset. <br /><br />
                                    <span>I've done projects with —</span><br /> HTML, CSS, JavaScript, Python, PHP, SQL, C#, Git, ...<br /><br />
                                    <span>Worked with frameworks like —</span>
                                    <br />
                                    <a href="https://reactjs.org/" target='blank'>React</a>, <a href="https://vuejs.org/" target='blank'>VueJs</a>, <a href="https://laravel.com/" target='blank'>Laravel</a>, <a href="https://www.djangoproject.com/" target='blank'>Django</a>, <a href="https://flask.palletsprojects.com/en/1.1.x/" target='blank'>Flask</a>, <a href="https://www.drupal.org/" target='blank'>Drupal</a>, <a href="https://wordpress.com/" target='blank'>Wordpress</a>.
                                    <br /><br />
                                    <span>Played around with programs such as —</span><br />
                                    <a href="https://www.adobe.com/be_en/products/photoshop.html" target='blank'>Photoshop</a>, <a href="https://www.adobe.com/be_en/products/illustrator.html" target='blank'>Illustrator</a>, <a href="https://www.adobe.com/be_en/products/premiere.html" target='blank'>Premiere Pro</a>, <a href="https://unity.com/" target='blank'>Unity</a>, <a href="https://www.figma.com/" target='blank'>Figma</a>.
                                </p>
                                <p id='tab4' className='tab-text'>
                                    When I'm not coding myself, I help out at my local coderdojo to teach children the basics of programming. This starts with making simple games in Scratch, but quickly evolves into Arduino projects. <br /><br />
                                    Graphic design has always been one of my passions and being able to translate that into web design
                                    is a dream come true.
                                </p>
                            </div>
                            <Link className="about__url" to="/contact">
                                Get in touch
                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.8839 10.8839C20.372 10.3957 20.372 9.60427 19.8839 9.11612L11.9289 1.16117C11.4408 0.67301 10.6493 0.67301 10.1612 1.16117C9.67301 1.64932 9.67301 2.44078 10.1612 2.92893L17.2322 10L10.1612 17.0711C9.67301 17.5592 9.67301 18.3507 10.1612 18.8388C10.6493 19.327 11.4408 19.327 11.9289 18.8388L19.8839 10.8839ZM0 11.25H19V8.75H0V11.25Z" fill="#112730" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    changeText(event, text) {
        var element = document.getElementById(text)
        var elements = document.getElementsByClassName('toggle')
        var alltext = document.getElementsByClassName('tab-text')

        for (var i = 0; i < elements.length; i++) {
            elements.item(i).classList.remove('active')
            alltext.item(i).classList.remove('show-tab')
        }
        element.classList.add('active')

        if (text === 'text1') {
            var text = document.getElementById('tab1')
            text.classList.add('show-tab')
        } else if (text === 'text2') {
            var text = document.getElementById('tab2')
            text.classList.add('show-tab')
        } else if (text === 'text3') {
            var text = document.getElementById('tab3')
            text.classList.add('show-tab')
        } else {
            var text = document.getElementById('tab4')
            text.classList.add('show-tab')
        }


    }
}