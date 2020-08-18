import React from "react";
import { Link } from 'react-router-dom';

export default class Footer extends React.Component {
    render() {
        return (
            <footer className='section-footer'>
                <ul className="footer-main">
                    <li className="footer-main__item">
                        <p className="title">
                            Contact<br /> information —
                        </p>
                        <p className="text">
                            Not a big fan of contact forms? No problem. Feel free to contact me over email.
                        </p>
                        <a href="mailto:lennert.slabbinck@hotmail.com">lennert.slabbinck@hotmail.com</a>
                    </li>
                    <li className="footer-main__item">
                        <p className="title">
                            Recent <br /> projects —
                        </p>
                        <ul className="links">
                            <li className="links-item">
                                <Link to="#">Project A</Link>
                            </li>
                            <li className="links-item">
                                <Link to="#">Project A</Link>
                            </li>
                            <li className="links-item">
                                <Link to="#">Project A</Link>
                            </li>
                            <li className="links-item">
                                <Link to="#">Project A</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="footer-main__item">
                        <p className="title">
                            Current <br /> occupation —
                        </p>
                        <p className="text">
                            I'm currently working as a front-end drupal dev.
                        </p>
                    </li>
                    <li className="footer-main__item">
                        <p className="title">
                            Follow <br /> me on —
                        </p>
                        <li className="links-item">
                            <a href="https://github.com/LennertSk" target='blank'>Github</a>
                        </li>
                        <li className="links-item">
                            <a href="https://dribbble.com/LennertSk" target='blank'>Dribbble</a>
                        </li>
                        <li className="links-item">
                            <a href="https://codepen.io/LennertSk" target='blank'>Codepen</a>
                        </li>
                        <li className="links-item">
                            <a href="https://www.linkedin.com/feed/" target='blank'>LinkedIn</a>
                        </li>
                    </li>
                </ul>
                <div className="footer-bottom">
                    <p>
                        © 2020 Lennert Slabbinck, made with
                        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.275 2.55017C13.675 -1.69983 8.47499 0.200166 7.99999 2.32517C7.34999 0.0751662 2.27499 -1.59983 0.724985 2.55017C-1.00001 7.17517 7.39999 11.3252 7.99999 12.0002C8.59999 11.4502 17 7.10017 15.275 2.55017" fill="#889397" />
                        </svg>
                        in <a href="https://en.wikipedia.org/wiki/Antwerp" target="blank">Antwerp</a>
                        , Belgium
                    </p>
                    <a href="#hero" className='to-top'>
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000svg">
                            <path d="M1.35791 13.5L11.9645 2.8934L22.5711 13.5" stroke="#889397" stroke-width="3" />
                        </svg>
                    </a>
                </div>
            </footer>
        )
    }
}