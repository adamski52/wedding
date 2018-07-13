import React, {Component} from "react";

class IntroContainer extends Component {
    render() {
        return (
            <div className="jna--intro-container">
                <h3 className="jna--intro-days-remaining">{this.props.numDays} days to the event</h3>

                <p className="jna--intro-event-when">
                    <span className="jna--intro-event-when-date">{this.props.when.date}</span>
                    <span className="jna--intro-event-when-time">{this.props.when.time}</span>
                </p>

                <address className="jna--intro-event-where">
                    <span className="jna--intro-event-where-name">{this.props.where.name}</span>
                    <span className="jna--intro-event-where-address">{this.props.where.address}</span>
                    <span className="jna--intro-event-where-location">{this.props.where.city}, {this.props.where.state} {this.props.where.zip}</span>
                </address>

                <a className="btn jna--theme-intro-btn" href={this.props.rsvp.anchor}>{this.props.rsvp.title}</a>
            </div>
        );
    }
}

export default IntroContainer;