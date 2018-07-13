import React, {Component} from "react";

class RegistryContainer extends Component {
    render() {
        return (
            <div className="jna--registry-container">
                <h2 className="jna--section-title">{this.props.title}</h2>
                {
                    this.props.itemRenderer(
                        "p",
                        this.props.items
                    )
                }
            </div>
        );
    }
}

export default RegistryContainer;