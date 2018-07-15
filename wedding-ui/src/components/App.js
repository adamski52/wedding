import React, {Component} from "react";
import {connect} from "react-redux";
import IntroContainer from "./IntroContainer";
import OurStoryContainer from "./OurStoryContainer";
import NavContainer from "./NavContainer";
import FunFactsContainer from "./FunFactsContainer";
import WhatToExpectContainer from "./WhatToExpectContainer";
import RegistryContainer from "./RegistryContainer";
import FooterContainer from "./FooterContainer";
import HttpService from "../Http.service";
import LoaderContainer from "./LoaderContainer";
import ErrorContainer from "./ErrorContainer";
import ErrorHandler from "../handlers/ErrorHandler";
import WeddingContainer from "./WeddingContainer";
import SlideshowContainer from "./SlideshowContainer";
import SlideshowHandler from "../handlers/SlideshowHandler";
import FunFactsHandler from "../handlers/FunFactsHandler";
import WhatToExpectHandler from "../handlers/WhatToExpectHandler";
import NavHandler from "../handlers/NavHandler";

class App extends Component {
    render() {
        return (
            <div className="container-fluid jna--app">
                <LoaderContainer
                    isSending={this.props.questionsForm.isSending || this.props.rsvpForm.isSending}
                />

                <ErrorContainer
                    onRemoveError={this.props.onRemoveError}
                    items={this.props.errors.errors}
                />

                <div id="nav" className="row jna--nav">
                    <div className="col-xs-12">
                        <NavContainer
                            onNavToggle={this.props.onNavToggle}
                            isOpen={this.props.nav.isOpen}
                            itemRenderer={this.props.getElementsFromItems}
                            items={this.props.nav.items}
                        />
                    </div>
                </div>

                <div id="intro" className="row jna--intro">
                    <h1>{this.props.nav.intro.title}</h1>
                    <div className="col-xs-10 col-xs-push-1 col-md-4 col-md-push-8">
                        <IntroContainer
                            numDays={this.props.intro.numDays}
                            when={this.props.intro.when}
                            where={this.props.intro.where}
                            rsvp={this.props.nav.rsvp}
                        />
                    </div>
                </div>

                <div id="wedding" className="row jna--wedding">
                   <div className="col-lg-12 col-xs-12">
                       <WeddingContainer
                           getElementsFromItems={this.props.getElementsFromItems}
                           onSubmit={this.props.onSubmit}
                           onChange={this.props.onChange}
                           questionsForm={this.props.questionsForm}
                           rsvpForm={this.props.rsvpForm}
                           intro={this.props.intro}
                           title={this.props.nav.wedding.title}
                       />
                   </div>
                </div>

                <div id="fun-facts" className="row">
                    <SlideshowContainer
                        onSetSlide={this.props.onSetSlide}
                        onNextSlide={this.props.onNextSlide}
                        slideshow={this.props.slideshow}
                    />
                    <div className="col-xs-offset-7 col-xs-5 jna--fun-facts">
                        <FunFactsContainer
                            itemRenderer={this.props.getElementsFromArray}
                            title={this.props.nav.funFacts.title}
                            items={this.props.funFacts.facts}
                            config={this.props.funFacts}
                            onNextFact={this.props.onNextFact}
                        />
                    </div>
                </div>

                <div id="our-story" className="row jna--our-story">
                    <div className="col-xs-12">
                        <OurStoryContainer
                            itemRenderer={this.props.getElementsFromItems}
                            title={this.props.nav.ourStory.title}
                            items={this.props.ourStory.stories}
                        />
                    </div>
                </div>

                <div id="what-to-expect" className="row jna--what-to-expect">
                    <div className="col-xs-12">
                        <WhatToExpectContainer
                            itemRenderer={this.props.getElementsFromArray}
                            onToggle={this.props.onToggle}
                            title={this.props.nav.whatToExpect.title}
                            items={this.props.whatToExpect.questions}
                        />
                    </div>
                </div>

                <div id="registry" className="row jna--registry">
                    <div className="col-xs-12">
                        <RegistryContainer
                            itemRenderer={this.props.getElementsFromArray}
                            title={this.props.nav.registry.title}
                            items={this.props.registry.text}
                        />
                    </div>
                </div>

                <div id="footer" className="row jna--footer">
                    <div className="col-xs-12">
                        <FooterContainer
                            title={this.props.footer.title}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    (state) => {
        return {
            ...state
        };
    },
    (dispatch) => {
        return {

            // TODO:  Use a markdown syntax for this?
            getElementsFromArray: (Element, arr) => {
                return arr.map((value, index) => {
                    return (
                        <Element
                            dangerouslySetInnerHTML={{
                                __html: value
                            }}
                            key={index}
                        />
                    );
                });
            },

            // TODO:  Use a markdown syntax for this?
            getElementsFromItems: (Element, items) => {
                return items.map((item, index) => {
                    return (
                        <Element
                            key={index}
                            item={item}
                        />
                    );
                });
            },

            onChange: (value, field, handler) => {
                return dispatch(handler.onChange(value, field));
            },

            onRemoveError: (error) => {
                return dispatch(ErrorHandler.removeError(error));
            },

            onNextSlide: () => {
                return dispatch(SlideshowHandler.onNextSlide());
            },

            onSetSlide: (index) => {
                return dispatch(SlideshowHandler.onSetSlide(index));
            },

            onNextFact: () => {
                return dispatch(FunFactsHandler.onNextFact());
            },

            onToggle: (item) => {
                return dispatch(WhatToExpectHandler.onToggle(item));
            },

            onNavToggle: () => {
                return dispatch(NavHandler.onToggle());
            },

            onSubmit: (e, fields, handler, url) => {
                e.preventDefault();

                let action = handler.onSubmitStart(fields);
                dispatch(action);

                dispatch(ErrorHandler.removeAll());

                return HttpService.post(url, action.payload)
                    .then((json) => {
                        dispatch(handler.onSubmitSuccess(json));
                        return json;
                    }).catch((error) => {
                        dispatch(handler.onSubmitError(error));
                        dispatch(ErrorHandler.addError("Failed to submit.  Please try again."));
                        return error;
                    });
            }
        };
    }
)(App);
