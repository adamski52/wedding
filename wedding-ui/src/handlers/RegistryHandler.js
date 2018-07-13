class RegistryHandler {
    static INITIAL_STATE = {
        text: [
            `Your presence is the most important gift, especially considering the distance some may have to travel.`,
            `If you do choose to give a gift, instead of a typical registry, we would love for any gifts to go towards one of our larger home renovation purchases (kitchen, bathroom, removing in ground basement swimming pool, etc).`,
            `We will have options available to designate which of these items your gift should contribute to.`
        ]
    };

    static reducer(state = RegistryHandler.INITIAL_STATE, action) {
        return state;
    }
}

export default RegistryHandler;
