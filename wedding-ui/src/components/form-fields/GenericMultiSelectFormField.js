import React from "react";
import GenericCheckboxFormField from "./GenericCheckboxFormField";
import GenericFormField from "./GenericFormField";

class GenericMultiSelectFormField extends GenericFormField {
    getFields() {
        return this.props.field.options.map((value, index) => {
            return (
                <GenericCheckboxFormField
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
                <div className="jna--form-multi-select">
                    {this.getTitle()}
                    {this.getSubtitle()}
                    {this.getFields()}
                </div>
            </div>
        );
    }
}

export default GenericMultiSelectFormField;