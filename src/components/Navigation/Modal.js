import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

export default class Modal extends React.Component {
    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    };
    render() {
        if (!this.props.show) {
            return null;
        }
        return (

            <div className='navmodal' id="modal">
                <div className="navmodal__container">
                    <nav className="content">
                        <h4>menu</h4>
                        <ul className="main__menu">
                            <li className="menu-item">
                                <Link to="/" className='menu-item--url'>Featured<i></i></Link>
                            </li>
                            <li className="menu-item">
                                <Link to="/projects" className='menu-item--url'>Portfolio<i></i></Link>
                            </li>
                            <li className="menu-item">
                                <Link to="/about" className='menu-item--url'>About me<i></i></Link>
                            </li>
                            <li className="menu-item">
                                <Link to="/contact" className='menu-item--url'>Contact<i></i></Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}
Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
};