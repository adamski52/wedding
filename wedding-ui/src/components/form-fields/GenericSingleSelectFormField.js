import React from "react";
import GenericRadioFormField from "./GenericRadioFormField";
import GenericFormField from "./GenericFormField";

class GenericSingleSelectFormField extends GenericFormField {
    getFields() {
        return this.props.field.options.map((value, index) => {
            return (
                <GenericRadioFormField
                    key={index}
                    field={this.props.field}
                    value={value}
                    onChange={this.props.onChange}
                />
            );
        });
    }

    render() {
        return (
            <div className="jna--form-field">
                <div className="jna--form-single-select">
                    {this.getTitle()}
                    {this.getFields()}
                </div>
            </div>
        );
    }
}

export default GenericSingleSelectFormField;