import {combineReducers} from "redux";
import IntroHandler from "./IntroHandler";
import OurStoryHandler from "./OurStoryHandler";
import NavHandler from "./NavHandler";
import FunFactsHandler from "./FunFactsHandler";
import QuestionFormHandler from "./QuestionFormHandler";
import WhatToExpectHandler from "./WhatToExpectHandler";
import RegistryHandler from "./RegistryHandler";
import RSVPFormHandler from "./RSVPFormHandler";
import FooterHandler from "./FooterHandler";
import ErrorHandler from "./ErrorHandler";
import SlideshowHandler from "./SlideshowHandler";

class AppHandler {
    static reducer = combineReducers({
        intro: IntroHandler.reducer,
        ourStory: OurStoryHandler.reducer,
        nav: NavHandler.reducer,
        funFacts: FunFactsHandler.reducer,
        questionsForm: QuestionFormHandler.reducer,
        whatToExpect: WhatToExpectHandler.reducer,
        registry: RegistryHandler.reducer,
        rsvpForm: RSVPFormHandler.reducer,
        footer: FooterHandler.reducer,
        errors: ErrorHandler.reducer,
        slideshow: SlideshowHandler.reducer
    });
}

export default AppHandler;