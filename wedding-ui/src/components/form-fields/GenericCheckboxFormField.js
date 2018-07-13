import React from "react";
import GenericFormField from "./GenericFormField";

class GenericCheckboxFormField extends GenericFormField {
    isChecked() {
        return this.props.field.value.indexOf(this.props.value) > -1;
    }

    render() {
        return (
            <div className="jna--form-field">
                <label className="jna--form-checkbox-field">
                    <input
                        className="jna--form-checkbox-input"
                        type="checkbox"
                        name={this.props.field.name}
                        value={this.props.value}
                        required={this.props.field.required}
                        checked={this.isChecked()}
                        onChange={(e) => {
                            return this.props.onChange(this.props.value, this.props.field);
                        }}
                    />
                    <span className="jna--form-checkbox-text">
                        {this.props.value}
                    </span>
                </label>
            </div>
        );
    }
}

export default GenericCheckboxFormField;