class QuestionFormHandler {
    static INITIAL_STATE = {
        title: "Have a question?",
        subtitle: "Ask Megan and Jon",
        submitText: "Submit",
        isSending: false,
        isError: false,
        isSuccess: false,
        name: {
            dataType: "text",
            value: "",
            name: "name",
            placeholder: "Your Name",
            required: true
        },
        email: {
            dataType: "email",
            value: "",
            name: "email",
            placeholder: "Your Email",
            required: true
        },
        message: {
            dataType: "textarea",
            value: "",
            name: "message",
            placeholder: "Your Message",
            required: true
        }
    };


    static ON_CHANGE = "ON_QUESTION_CHANGE";
    static onChange(value, oldField) {
        let field = {
            ...oldField
        };

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
                type: QuestionFormHandler.ON_CHANGE,
                field: field
            };
        }

        field.value = value;

        return {
            type: QuestionFormHandler.ON_CHANGE,
            field: field
        };
    }

    static ON_TRANSMIT_START = "ON_QUESTION_TRANSMIT_START";
    static ON_TRANSMIT_SUCCESS = "ON_QUESTION_TRANSMIT_SUCCESS";
    static ON_TRANSMIT_ERROR = "ON_QUESTION_TRANSMIT_ERROR";
    static ON_TRY_AGAIN = "ON_QUESTION_TRY_AGAIN";

    static onSubmitStart(fields) {
        let payload = {
            name: fields.name.value,
            email: fields.email.value,
            message: fields.message.value
        };

        return {
            type: QuestionFormHandler.ON_TRANSMIT_START,
            payload: payload
        };
    }

    static onSubmitSuccess(json) {
        return {
            type: QuestionFormHandler.ON_TRANSMIT_SUCCESS,
            json: json
        };
    }

    static onSubmitError() {
        return {
            type: QuestionFormHandler.ON_TRANSMIT_ERROR
        };
    }

    static onTryAgain() {
        return {
            type: QuestionFormHandler.ON_TRY_AGAIN
        };
    }

    static reducer(state = QuestionFormHandler.INITIAL_STATE, action) {
        switch(action.type) {
            case QuestionFormHandler.ON_CHANGE:
                return {
                    ...state,
                    [action.field.name]: action.field
                };

            case QuestionFormHandler.ON_TRANSMIT_START:
                return {
                    ...state,
                    isSending: true,
                    isError: false,
                    isSuccess: false
                };

            case QuestionFormHandler.ON_TRANSMIT_ERROR:
                return {
                    ...state,
                    isSending: false,
                    isError: true,
                    isSuccess: false
                };

            case QuestionFormHandler.ON_TRANSMIT_SUCCESS:
                return {
                    ...state,
                    isSending: false,
                    isError: false,
                    isSuccess: true
                };

            case QuestionFormHandler.ON_TRY_AGAIN:
                return {
                    ...QuestionFormHandler.INITIAL_STATE
                };

            default:
                return state;
        }
    }
}

export default QuestionFormHandler;
