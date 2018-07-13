import React, {Component} from "react";

class GenericFormGroup extends Component {
    getTitle() {
        if(!this.props.title) {
            return null;
        }

        return (
            <span className="jna--form-group-title">{this.props.title}</span>
        );
    }

    getSubtitle() {
        if(!this.props.subtitle) {
            return null;
        }

        return (
            <span className="jna--form-group-subtitle">{this.props.subtitle}</span>
        );
    }

    render() {
        let classes = ["jna--form-group"];
        if(this.props.visible === false) {
            classes.push("jna--hidden");
        }

        return (
            <div className={classes.join(" ")}>
                <div className="jna--form-group-container">
                    {this.getTitle()}
                    {this.getSubtitle()}
                    {this.props.visible !== false && this.props.children}
                </div>
            </div>
        );
    }
}

export default GenericFormGroup;