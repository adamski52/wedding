class RSVPFormHandler {
    static INITIAL_STATE = {
        title: "RSVP",
        submitText: "RSVP",
        isSending: false,
        isSuccess: false,
        isAttending: undefined,
        isError: false,
        name: {
            dataType: "text",
            value: "",
            placeholder: "Your Name",
            name: "name",
            required: true
        },
        attendance: {
            dataType: "singleselect",
            value: undefined,
            title: "Are you attending?",
            name: "attendance",
            required: true,
            options: [
                "Yes, I'll be there",
                "Sorry, I can't make it"
            ]
        },
        email: {
            dataType: "email",
            value: "",
            placeholder: "Your Email",
            name: "email",
            required: true
        },
        rehearsal: {
            dataType: "multiselect",
            value: [],
            options: [
                "I will be attending the optional BBQ on Friday, September 21."
            ],
            name: "rehearsal"
        },
        song: {
            dataType: "text",
            value: "",
            placeholder: "A song you would like to hear at the reception",
            name: "song"
        },
        guests: {
            dataType: "textarea",
            value: "",
            placeholder: "Additional Guest Name(s)",
            name: "guests"
        },
        hotel: {
            dataType: "multiselect",
            value: [],
            options: [
                "I am staying at the Spring Hill Suites"
            ],
            name: "hotel"
        },
        shuttle: {
            dataType: "multiselect",
            value: [],
            options: [
                "I would like to request Wedding Day shuttle service"
            ],
            name: "shuttle"
        },
        shuttleToVenue: {
            dataType: "multiselect",
            value: [],
            title: "Wedding Day Shuttle",
            subtitle: "Hotel to Venue",
            name: "shuttleToVenue",
            options: [
                "3:30pm departure",
                "4:15pm departure"
            ]
        },
        shuttleToHotel: {
            dataType: "multiselect",
            value: [],
            title: "Wedding Day Shuttle",
            subtitle: "Venue to Hotel",
            name: "shuttleToHotel",
            options: [
                "9:45pm departure",
                "10:00pm departure",
                "10:30pm departure"
            ]
        },
        numberSeats: {
            dataType: "number",
            value: 1,
            title: "Number of seats",
            subtitle: "Number of seats (please include yourself)",
            name: "numberSeats",
            min: 1,
            max: 10
        }
    };

    // TODO:  This isn't pure and should probably live in the reducer anyway.
    static onChange(value, field) {
        if(field.dataType === "multiselect") {
            let newValue = [].concat(field.value),
                index = newValue.indexOf(value);

            if (index > -1) {
                newValue.splice(index, 1);
            }
            else {
                newValue.push(value);
            }

            field.value = newValue;

            return {
                type: RSVPFormHandler.ON_CHANGE,
                field: field
            };
        }

        field.value = value;

        return {
            type: RSVPFormHandler.ON_CHANGE,
            field: field
        };
    }

    static ON_CHANGE = "ON_RSVP_CHANGE";
    static ON_TRANSMIT_START = "ON_RSVP_TRANSMIT_START";
    static ON_TRANSMIT_SUCCESS = "ON_RSVP_TRANSMIT_SUCCESS";
    static ON_TRANSMIT_ERROR = "ON_RSVP_TRANSMIT_ERROR";
    static ON_TRY_AGAIN = "ON_RSVP_TRY_AGAIN";


    static pushToPayload(payload, field) {
        if(!field.value) {
            return;
        }

        if(typeof field.value === "object") {
            payload[field.name] = field.value.join("\n");
            return;
        }

        payload[field.name] = field.value;
    }

    static onSubmitStart(fields) {
        let payload = {};

        RSVPFormHandler.pushToPayload(payload, fields.name);
        RSVPFormHandler.pushToPayload(payload, fields.attendance);
        RSVPFormHandler.pushToPayload(payload, fields.email);
        RSVPFormHandler.pushToPayload(payload, fields.song);
        RSVPFormHandler.pushToPayload(payload, fields.guests);
        RSVPFormHandler.pushToPayload(payload, fields.hotel);
        RSVPFormHandler.pushToPayload(payload, fields.shuttle);
        RSVPFormHandler.pushToPayload(payload, fields.shuttleToVenue);
        RSVPFormHandler.pushToPayload(payload, fields.shuttleToHotel);
        RSVPFormHandler.pushToPayload(payload, fields.numberSeats);

        return {
            type: RSVPFormHandler.ON_TRANSMIT_START,
            payload: payload
        };
    }

    static onTryAgain() {
        return {
            type: RSVPFormHandler.ON_TRY_AGAIN
        };
    }

    static onSubmitSuccess(json) {
        return {
            type: RSVPFormHandler.ON_TRANSMIT_SUCCESS,
            json: json
        };
    }

    static onSubmitError() {
        return {
            type: RSVPFormHandler.ON_TRANSMIT_ERROR
        };
    }

    static reducer(state = RSVPFormHandler.INITIAL_STATE, action) {
        switch(action.type) {
            case RSVPFormHandler.ON_CHANGE:
                return {
                    ...state,
                    isAttending: undefined,
                    isSending: false,
                    isError: false,
                    isSuccess: false,
                    [action.field.name]: action.field
                };

            case RSVPFormHandler.ON_TRANSMIT_START:
                return {
                    ...state,
                    isAttending: undefined,
                    isSending: true,
                    isError: false,
                    isSuccess: false
                };

            case RSVPFormHandler.ON_TRANSMIT_ERROR:
                return {
                    ...state,
                    isAttending: undefined,
                    isSending: false,
                    isError: true,
                    isSuccess: false
                };

            case RSVPFormHandler.ON_TRANSMIT_SUCCESS:
                return {
                    ...RSVPFormHandler.INITIAL_STATE,
                    isSending: false,
                    isAttending: action.json.attendance === RSVPFormHandler.INITIAL_STATE.attendance.options[0],
                    isSuccess: true
                };

            case RSVPFormHandler.ON_TRY_AGAIN:
                return {
                    ...state,
                    isSending: false,
                    isError: false,
                    isSuccess: false,
                    isAttending: undefined
                };

            default:
                return state;
        }
    }
}

export default RSVPFormHandler;
