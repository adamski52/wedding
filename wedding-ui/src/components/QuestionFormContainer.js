import React, {Component} from "react";
import GenericTextFormField from "./form-fields/GenericTextFormField";
import GenericTextareaFormField from "./form-fields/GenericTextareaFormField";
import GenericEmailFormField from "./form-fields/GenericEmailFormField";

class QuestionFormContainer extends Component {
    render() {
        return (
            <div className="jna--question-form-container">
                <div className="row">
                    <h3>{this.props.title}</h3>
                    <h6>{this.props.subtitle}</h6>
                    <form className="jna--form" onSubmit={(e) => {
                        return this.props.onSubmit(e, this.props.fields);
                    }}>
                        <div className="col-xs-6">
                            <GenericTextFormField
                                field={this.props.fields.name}
                                onChange={this.props.onChange}
                            />
                        </div>
                        <div className="col-xs-6">
                            <GenericEmailFormField
                                field={this.props.fields.email}
                                onChange={this.props.onChange}
                            />
                        </div>
                        <div className="col-xs-12">
                            <GenericTextareaFormField
                                field={this.props.fields.message}
                                onChange={this.props.onChange}
                            />
                        </div>
                        <div className="col-xs-12">
                            <button className="btn jna--theme-wedding-btn">{this.props.submitText}</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default QuestionFormContainer;