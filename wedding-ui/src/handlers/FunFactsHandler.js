class FunFactsHandler {
    static INITIAL_STATE = {
        facts: [
            "All the Adamski-Lilley dogs receive a name based on a children's story.",
            "Jon crafts furniture.",
            "Baloo's favorite pastime is finding 'wild' poop to roll in.",
            "Megan favorite plant to grow is cherry tomatoes.",
            "Franklin is a certified Therapy Dog.",
            "Megan has wanted to hear 'At the Beginning' (Anastasia) played at her wedding since she was 10 years old.",
            "Jon is a web developer, and started when he was 11 but hates the Internet.",
            "Jasmine is an accomplished hunter.",
            "Megan enjoys walking dogs.",
            "Jon has one sibling -- older brother Mike",
            "Megan has three siblings -- oldest sister Tricia, older brother Brett, and younger sister Jenna"
        ],
        openItem: 0,
        duration: 5000
    };

    static ON_NEXT = "FUN_FACT_ON_NEXT";

    static onNextFact() {
        return {
            type: FunFactsHandler.ON_NEXT
        };
    }

    static reducer(state = FunFactsHandler.INITIAL_STATE, action) {
        switch(action.type) {
            case FunFactsHandler.ON_NEXT:
                let index = state.openItem + 1;
                if(index > state.facts.length - 1) {
                    index = 0;
                }

                return {
                    ...state,
                    openItem: index
                };
            default:
                return state;
        }
    }
}

export default FunFactsHandler;
