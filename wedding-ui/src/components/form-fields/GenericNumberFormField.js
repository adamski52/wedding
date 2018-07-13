import React from "react";
import GenericFormField from "./GenericFormField";

class GenericNumberFormField extends GenericFormField {
    render() {
        return (
            <div className="jna--form-field">
                <label className="jna--form-number-field">
                    {this.getTitle()}
                    {this.getSubtitle()}
                    <input
                        className="form-control"
                        type="number"
                        required={this.props.field.required}
                        value={this.props.field.value}
                        name={this.props.field.name}
                        min={this.props.field.min}
                        max={this.props.field.max}
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

export default GenericNumberFormField;