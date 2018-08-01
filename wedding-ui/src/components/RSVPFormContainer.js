import React, {Component} from "react";
import GenericTextFormField from "./form-fields/GenericTextFormField";
import GenericNumberFormField from "./form-fields/GenericNumberFormField";
import GenericTextareaFormField from "./form-fields/GenericTextareaFormField";
import GenericMultiSelectFormField from "./form-fields/GenericMultiSelectFormField";
import GenericEmailFormField from "./form-fields/GenericEmailFormField";
import GenericSingleSelectFormField from "./form-fields/GenericSingleSelectFormField";
import GenericFormGroup from "./form-fields/GenericFormGroup";

class RSVPFormContainer extends Component {
    isAttending() {
        return this.props.fields.attendance.value === this.props.fields.attendance.options[0];
    }

    isStayingAtHotel() {
        return this.isAttending() && this.props.fields.hotel.value.indexOf(this.props.fields.hotel.options[0]) > -1;
    }

    isUsingShuttle() {
        return this.isStayingAtHotel() && this.props.fields.shuttle.value.indexOf(this.props.fields.shuttle.options[0]) > -1;
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

        if(this.props.fields.isAttending) {
            return (
                <div className="jna--form-success">
                    <h3>Great success!</h3>
                    <p>You're all set. See you there!</p>
                    <p><strong>Please note</strong>: Shuttle space is limited.  If you signed up, we'll do our best to accommodate you.  A final reservation confirmation approval/rejection will follow.</p>
                </div>
            );
        }

        return (
            <div className="jna--form-success">
                <h3>Oh.  OK.  Be that way!</h3>
                <p>More drinks for us!</p>
            </div>
        );
    }

    getForm() {
        if(this.props.fields.isError || this.props.fields.isSuccess) {
            return null;
        }

        return (
            <form className="jna--form" onSubmit={(e) => {
                e.preventDefault();
                return this.props.onSubmit(e, this.props.fields);
            }}>
                <GenericFormGroup title="Decision time..." children={
                    <fieldset>
                        <div className="col-xs-12">
                            <GenericTextFormField
                                field={this.props.fields.name}
                                onChange={this.props.onChange}
                            />
                        </div>

                        <div className="col-xs-12">
                            <GenericSingleSelectFormField
                                field={this.props.fields.attendance}
                                onChange={this.props.onChange}
                        />
                        </div>
                    </fieldset>
                } />

                <GenericFormGroup title="Good choice... let's get some more information" visible={this.isAttending()} children={
                    <fieldset>
                        <div className="col-xs-12 col-sm-6">
                            <GenericEmailFormField
                                field={this.props.fields.email}
                                onChange={this.props.onChange}
                            />
                        </div>

                        <div className="col-xs-12 col-sm-6">
                            <GenericTextFormField
                                field={this.props.fields.song}
                                onChange={this.props.onChange}
                            />
                        </div>

                        <div className="col-xs-12">
                            <GenericTextareaFormField
                                field={this.props.fields.guests}
                                onChange={this.props.onChange}
                            />
                        </div>

                        <div className="col-xs-12">
                            <GenericSingleSelectFormField
                                field={this.props.fields.rehearsal}
                                onChange={this.props.onChange}
                                onAnchorClick={this.props.onAnchorClick}
                            />
                        </div>
                    </fieldset>
                } />

                <GenericFormGroup visible={this.isAttending()} children={
                    <fieldset>
                        <div className="col-xs-12">
                            <GenericSingleSelectFormField
                                field={this.props.fields.hotel}
                                onChange={this.props.onChange}
                                onAnchorClick={this.props.onAnchorClick}
                        />
                        </div>
                    </fieldset>
                } />

                <GenericFormGroup visible={this.isStayingAtHotel()} children={
                    <fieldset>
                        <div className="col-xs-12">
                            <GenericMultiSelectFormField
                                field={this.props.fields.shuttle}
                                onChange={this.props.onChange}
                            />
                        </div>
                    </fieldset>
                } />

                <GenericFormGroup title="When do you want to use the shuttle?" visible={this.isUsingShuttle()} children={
                    <fieldset>
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <GenericMultiSelectFormField
                                field={this.props.fields.shuttleToVenue}
                                suppressTitle={true}
                                onChange={this.props.onChange}
                            />
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <GenericMultiSelectFormField
                                field={this.props.fields.shuttleToHotel}
                                suppressTitle={true}
                                onChange={this.props.onChange}
                            />
                        </div>

                        <div className="col-xs-12 col-md-4">
                            <GenericNumberFormField
                                field={this.props.fields.numberSeats}
                                suppressTitle={true}
                                onChange={this.props.onChange}
                            />
                        </div>
                    </fieldset>
                } />

                <GenericFormGroup children={
                    <fieldset>
                        <div className="col-xs-12">
                            <button className="btn jna--theme-wedding-btn">{this.props.submitText}</button>
                        </div>
                    </fieldset>
                } />
            </form>
        );
    }

    render() {
        return (
            <div id="rsvp" className="jna--rsvp-form-container">
                {this.getForm()}
                {this.getSuccess()}
                {this.getError()}
            </div>
        );
    }
}

export default RSVPFormContainer;