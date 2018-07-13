import React, {Component} from "react";

class SlideshowContainer extends Component {

    constructor(props) {
        super(props);

        this.start();
    }

    start() {
        setInterval(() => {
            this.props.onNextSlide();
        }, this.props.slideshow.duration);
    }

    getSlideItem(slide, isActive) {
        let classes = ["jna--slideshow-slide-item"];
        if(isActive) {
            classes.push("jna--slideshow-slide-item-active");
        }

        return (
            <div
                key={slide}
                className={classes.join(" ")}
                style={{
                    backgroundImage: "url(" + slide + ")"
                }}
            />
        );
    }

    getSlideNavItems() {
        return this.props.slideshow.slides.map((slide, index) => {
            let classes = ["jna--slideshow-nav-item"];

            if(this.props.slideshow.currentIndex === index) {
                classes.push("jna--slideshow-nav-item-active");
            }

            return (
                <li key={slide}
                    className={classes.join(" ")}
                    onClick={(e) => {
                        this.props.onSetSlide(index);
                    }}><span className="sr-only">index</span></li>
            );
        });
    }

    render() {
        return (
            <div className="jna--slideshow-container">
                <div className="jna--slideshow-slides">
                    {this.getSlideItem(this.props.slideshow.slides[this.props.slideshow.prevIndex])}
                    {this.getSlideItem(this.props.slideshow.slides[this.props.slideshow.currentIndex], true)}
                </div>
                <ul className="jna--slideshow-nav">
                    {this.getSlideNavItems()}
                </ul>
            </div>
        );
    }
}

export default SlideshowContainer;