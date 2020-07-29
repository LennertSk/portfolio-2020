import React from "react";

export default class Scroll extends React.Component {
    render() {
        return (
            <a href="/contact" className="scroll">
                <div className="scroll__icon">
                    <span className="scroll__icon__dot"></span>
                </div>
            </a>
        );
    }
}