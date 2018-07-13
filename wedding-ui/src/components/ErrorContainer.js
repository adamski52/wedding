import React, {Component} from "react";

class ErrorContainer extends Component {
    getItems() {
        return this.props.items.map((item, index) => {
            return (
                <li className="jna--error-item">
                    {item.message}
                    <button
                        className="btn"
                        onClick={(e) => {
                            return this.props.onRemoveError(item);
                        }}
                    >x</button>
                </li>
            );
        });
    }

    render() {
        if(this.props.items.length < 1) {
            return null;
        }

        return (
            <ul className="jna--error-container">
                {this.getItems()}
            </ul>
        );
    }
}

export default ErrorContainer;