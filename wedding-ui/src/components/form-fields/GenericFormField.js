import React, {Component} from "react";

class GenericFormField extends Component {
    getTitle() {
        if(!this.props.field.title || this.props.suppressTitle) {
            return null;
        }

        return (
            <span className="jna--form-field-title">{this.props.field.title}</span>
        );
    }

    getSubtitle() {
        if(!this.props.field.subtitle) {
            return null;
        }

        return (
            <span className="jna--form-field-subtitle">{this.props.field.subtitle}</span>
        );
    }

    render() {
        return null;
    }
}

export default GenericFormField;