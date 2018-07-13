class ErrorHandler {
    static INITIAL_STATE = {
        errors: []
    };

    static REMOVE_ALL_ERROR = "REMOVE_ALL_ERROR";
    static removeAll() {
        return {
            type: ErrorHandler.REMOVE_ALL_ERROR
        };
    }

    static ADD_ERROR = "ADD_ERROR";
    static addError(error) {
        return {
            type: ErrorHandler.ADD_ERROR,
            error: error
        };
    }

    static REMOVE_ERROR = "REMOVE_ERROR";
    static removeError(error) {
        return {
            type: ErrorHandler.REMOVE_ERROR,
            error: error
        };
    }

    static reducer(state = ErrorHandler.INITIAL_STATE, action) {
        let errors;
        switch(action.type) {
            case ErrorHandler.ADD_ERROR:
                errors = [].concat(state.errors, {
                    message: action.error,
                    id: new Date().getTime()
                });

                return {
                    ...state,
                    errors: errors
                };

            case ErrorHandler.REMOVE_ERROR:
                let index = state.errors.indexOf(action.error);

                if(index < 0) {
                    return state;
                }

                errors = [].concat(state.errors);
                errors.splice(index, 1);

                return {
                    ...state,
                    errors: errors
                };

            case ErrorHandler.REMOVE_ALL_ERROR:
                return {
                    ...ErrorHandler.INITIAL_STATE
                };
            default:
                return state;
        }
    }
}

export default ErrorHandler;
