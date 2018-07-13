import React from "react";
import GenericFormField from "./GenericFormField";

class GenericRadioFormField extends GenericFormField {
    isChecked() {
        return this.props.field.value === this.props.value;
    }

    render() {
        return (
            <div className="jna--form-field">
                <label className="jna--form-radio-field">
                    <input
                        className="jna--form-radio-input"
                        type="radio"
                        name={this.props.field.name}
                        value={this.props.value}
                        required={this.props.field.required}
                        checked={this.isChecked()}
                        onChange={(e) => {
                            return this.props.onChange(e.target.value, this.props.field);
                        }}
                    />
                    <span className="jna--form-radio-text">
                        {this.props.value}
                    </span>
                </label>
            </div>
        );
    }
}

export default GenericRadioFormField;