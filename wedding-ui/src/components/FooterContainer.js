import React, {Component} from "react";

class FooterContainer extends Component {
    render() {
        return (
            <footer className="jna--footer-container">
                <h1>{this.props.title}</h1>
            </footer>
        );
    }
}

export default FooterContainer;