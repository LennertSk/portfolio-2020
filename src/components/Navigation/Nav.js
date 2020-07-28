import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import logoWhite from '../../assets/logo-white.svg';
import Modal from './Modal';

export default class Nav extends React.Component {
    state = {
        show: false
    };
    showModal = e => {
        this.setState({
            show: !this.state.show
        });
    };
    render() {
        return (
            <nav className='navigation'>
                <div className='navbar'>
                    <Link to="/" className='navbar__logo'>
                        <img src={logoWhite} className={'logo-dark logo-image--' + (this.state.show ? 'visible' : 'hidden')} alt='Logo' />
                        <img src={logo} className={'logo-white logo-image--' + (this.state.show ? 'hidden' : 'visible')} alt='Logo' />
                    </Link>

                    <Link to='#' onClick={e => { this.showModal(e); }} className={'navbar__toggle ' + (this.state.show ? 'show-modal ' : 'hide-modal')}>
                        <div className={"icon menu-toggle--" + (this.state.show ? 'show' : 'normal')}>
                            <div className={"bar bar1 " + (this.state.show ? 'toggled toggled--bar1' : 'no-toggle')}></div>
                            <div className={"bar bar2 " + (this.state.show ? 'toggled toggled--bar2' : 'no-toggle')}></div>
                            <div className={"bar bar3 " + (this.state.show ? 'toggled toggled--bar3' : 'no-toggle')}></div>
                        </div>
                        <p className={"menu-toggle--" + (this.state.show ? 'show' : 'normal')}>
                            <span className={"menu-text " + (this.state.show ? 'hidden' : 'visible')}>me</span>
                            <span className={"menu-text " + (this.state.show ? 'hidden' : 'visible')}>nu</span>
                            <span className={"menu-text " + (this.state.show ? 'visible' : 'hidden')}>ba</span>
                            <span className={"menu-text " + (this.state.show ? 'visible' : 'hidden')}>ck</span>
                        </p>
                    </Link>
                </div>
                <Modal onClose={this.showModal} show={this.state.show} />
            </nav>
        );
    }
}