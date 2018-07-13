class IntroHandler {
    static INITIAL_STATE = {
        numDays: Math.floor((new Date(2018, 8, 22).getTime() - new Date().getTime()) / 1000 / 60 / 60 / 24),
        when: {
            title: "When",
            date: "Saturday, Sep 22",
            time: "5:00 PM"
        },
        where: {
            title: "Where",
            name: "Wiegand's Lake Park",
            address: "9346 Kinsman Rd",
            city: "Novelty",
            state: "OH",
            zip: "44072"
        }
    };

    static reducer(state = IntroHandler.INITIAL_STATE, action) {
        return state;
    }
}

export default IntroHandler;
