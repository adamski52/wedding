class NavHandler {
    static SECTIONS = {
        intro: {
            title: "The Adamski Wedding",
            anchor: ""
        },
        ourStory: {
            title: "Our Story",
            anchor: "#our-story"
        },
        rsvp: {
            title: "RSVP",
            anchor: "#rsvp"
        },
        funFacts: {
            title: "Fun Facts",
            anchor: "#fun-facts"
        },
        wedding: {
            title: "The Wedding",
            anchor: "#wedding"
        },
        question: {
            title: "Ask a Question",
            anchor: "#ask-a-question"
        },
        whatToExpect: {
            title: "What to expect",
            anchor: "#what-to-expect"
        },
        registry: {
            title: "Registry",
            anchor: "#registry"
        }
    };

    static INITIAL_STATE = {
        ...NavHandler.SECTIONS,
        items: [
            NavHandler.SECTIONS.wedding,
            NavHandler.SECTIONS.rsvp,
            NavHandler.SECTIONS.ourStory,
            NavHandler.SECTIONS.funFacts,
            NavHandler.SECTIONS.whatToExpect,
            NavHandler.SECTIONS.registry
        ],
        isOpen: false
    };

    static ON_TOGGLE = "ON_NAV_TOGGLE";
    static onToggle() {
        return {
            type: NavHandler.ON_TOGGLE
        };
    }

    static reducer(state = NavHandler.INITIAL_STATE, action) {
        switch(action.type) {
            case NavHandler.ON_TOGGLE:
                return {
                    ...state,
                    isOpen: !state.isOpen
                };

            default:
                return state;
        }
    }
}

export default NavHandler;