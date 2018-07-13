class SlideshowHandler {
    static INITIAL_STATE = {
        duration: 8000,
        currentIndex: 1,
        prevIndex: 0,
        slides: [
            require("../assets/images/forever.jpg"),
            require("../assets/images/group-woods.jpg"),
            require("../assets/images/walking-toward.jpg"),
            require("../assets/images/kneeling-group.jpg"),
            require("../assets/images/sitting-tree.jpg"),
            require("../assets/images/sitting-group.jpg"),
            require("../assets/images/walking-away.jpg")
        ]
    };

    static ON_NEXT = "ON_SLIDESHOW_NEXT";
    static ON_PREV = "ON_SLIDESHOW_PREV";
    static ON_SET = "ON_SLIDESHOW_SET";

    static onNextSlide() {
        return {
            type: SlideshowHandler.ON_NEXT
        };
    }

    static onSetSlide(index) {
        return {
            type: SlideshowHandler.ON_SET,
            index: index
        };
    }

    static reducer(state = SlideshowHandler.INITIAL_STATE, action) {
        let currentIndex,
            prevIndex;

        switch(action.type) {
            case SlideshowHandler.ON_SET:
                // invalid selection.  do nothing.
                if(action.index < 0 || action.index > state.slides.length - 1) {
                    return state;
                }

                prevIndex = state.currentIndex;
                currentIndex = action.index;

                return {
                    ...state,
                    prevIndex: prevIndex,
                    currentIndex: currentIndex
                };

            case SlideshowHandler.ON_NEXT:
                prevIndex = state.currentIndex;
                currentIndex = state.currentIndex + 1;

                if(currentIndex > state.slides.length - 1) {
                    currentIndex = 0;
                }

                return {
                    ...state,
                    currentIndex: currentIndex,
                    prevIndex: prevIndex
                };

            case SlideshowHandler.ON_PREV:
                prevIndex = state.currentIndex;
                currentIndex = state.currentIndex - 1;

                if(currentIndex < 0) {
                    currentIndex = state.slides.length - 1;
                }

                return {
                    ...state,
                    currentIndex: currentIndex,
                    prevIndex: prevIndex
                };

            default:
                return state;
        }
    }
}

export default SlideshowHandler;
