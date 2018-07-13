import React from "react";
import GenericFormField from "./GenericFormField";

class GenericTextareaFormField extends GenericFormField {
    render() {
        return (
            <div className="jna--form-field">
                <label className="jna--form-textarea-field">
                    {this.getTitle()}
                    <textarea
                        className="form-control"
                        required={this.props.field.required}
                        value={this.props.field.value}
                        name={this.props.field.name}
                        placeholder={this.props.field.placeholder}
                        onChange={(e) => {
                            return this.props.onChange(e.target.value, this.props.field);
                        }}
                    />
                </label>
            </div>
        );
    }
}

export default GenericTextareaFormField;