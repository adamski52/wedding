import React, {Component} from "react";
import RSVPFormHandler from "../handlers/RSVPFormHandler";
import QuestionFormHandler from "../handlers/QuestionFormHandler";
import QuestionFormContainer from "./QuestionFormContainer";
import RSVPFormContainer from "./RSVPFormContainer";

class WeddingContainer extends Component {
    render() {
        return (
            <div className="jna--wedding-container">
                <h2 className="jna--section-title">{this.props.title}</h2>

                <div className="col-xs-12">
                    <RSVPFormContainer
                        onTryAgain={this.props.onTryAgain}
                        onChange={(value, field) => {
                            return this.props.onChange(value, field, RSVPFormHandler);
                        }}
                        onSubmit={(e, fields) => {
                            // success and failure both shrink the form, so re-scroll to #rsvp upon submit
                            window.location.href = this.props.rsvpScrollTo;
                            return this.props.onSubmit(e, fields, RSVPFormHandler, "/rsvps/");
                        }}
                        submitText={this.props.rsvpForm.submitText}
                        title={this.props.rsvpForm.title}
                        fields={this.props.rsvpForm}
                    />
                </div>

                <div className="col-sm-6 col-xs-12 jna--wedding-sidebar">
                    <div className="jna--wedding-sidebar-container">
                        <div className="jna--wedding-sidebar-when">
                            <h4>{this.props.intro.when.title}</h4>
                            <span className="jna--intro-event-when-date">{this.props.intro.when.date}</span>
                            <span className="jna--intro-event-when-time">{this.props.intro.when.time}</span>
                        </div>

                        <div className="jna--wedding-sidebar-where">
                            <h4>{this.props.intro.where.title}</h4>
                            <address className="jna--wedding-sidebar-event-where">
                                <span className="jna--wedding-sidebar-event-name">{this.props.intro.where.name}</span>
                                <span className="jna--wedding-sidebar-event-address">{this.props.intro.where.address}</span>
                                <span className="jna--wedding-sidebar-event-location">{this.props.intro.where.city}, {this.props.intro.where.state} {this.props.intro.where.zip}</span>
                            </address>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-xs-12">
                    <QuestionFormContainer
                        onTryAgain={this.props.onQuestionTryAgain}
                        itemRenderer={this.props.getElementsFromItems}
                        onChange={(value, field) => {
                            return this.props.onChange(value, field, QuestionFormHandler);
                        }}
                        onSubmit={(e, fields) => {
                            return this.props.onSubmit(e, fields, QuestionFormHandler, "/questions/");
                        }}
                        submitText={this.props.questionsForm.submitText}
                        title={this.props.questionsForm.title}
                        subtitle={this.props.questionsForm.subtitle}
                        fields={this.props.questionsForm}
                    />
                </div>
            </div>
        );
    }
}

export default WeddingContainer;