import React, {Component} from "react";
import GenericTextFormField from "./form-fields/GenericTextFormField";
import GenericTextareaFormField from "./form-fields/GenericTextareaFormField";
import GenericEmailFormField from "./form-fields/GenericEmailFormField";

class QuestionFormContainer extends Component {
    getForm() {
        if(this.props.fields.isSuccess || this.props.fields.isError) {
            return null;
        }

        return (
            <form className="jna--form" onSubmit={(e) => {
                e.preventDefault();
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
        );
    }

    getError() {
        if(!this.props.fields.isError) {
            return null;
        }

        return (
            <div className="jna--form-error">
                <h3>Uh oh</h3>
                <p>Something went wrong. It's probably not your fault.</p>
                <button
                    className="btn jna--theme-wedding-btn jna--form-error-button"
                    onClick={(e) => {
                        e.preventDefault();
                        return this.props.onTryAgain();
                    }}
                >Either way, you can try again.</button>
            </div>
        );
    }

    getSuccess() {
        if(!this.props.fields.isSuccess) {
            return null;
        }

        return (
            <div className="jna--form-success">
                <h3>Good question!</h3>
                <p>We'll let you know the answer soon.</p>
                <button
                    className="btn jna--theme-wedding-btn jna--form-error-button"
                    onClick={(e) => {
                        e.preventDefault();
                        return this.props.onTryAgain();
                    }}
                >OK, but I have another...</button>
            </div>
        );
    }

    render() {
        return (
            <div className="jna--question-form-container">
                <div className="row">
                    <h3>{this.props.title}</h3>
                    <h6>{this.props.subtitle}</h6>
                    {this.getForm()}
                    {this.getError()}
                    {this.getSuccess()}
                </div>
            </div>
        );
    }
}

export default QuestionFormContainer;