import React, {Component} from "react";

class LoaderContainer extends Component {
    render() {
        if(!this.props.isSending) {
            return null;
        }

        return (
            <div className="jna--loader-container" />
        );
    }
}

export default LoaderContainer;