import React, {Component} from "react";
import OurStoryItem from "./OurStoryItem";

class OurStoryContainer extends Component {
    getItems() {
        return this.props.items.map((item, index) => {
            let classes = [
                "col-xs-offset-1",
                "col-xs-10"
            ];

            if(index % 2 === 0) {
                classes.push("col-sm-5 col-sm-offset-1");
                classes.push("col-md-4 col-md-offset-2");
                classes.push("col-lg-3 col-lg-offset-3");
                classes.push("jna--our-story-item-even");
            }
            else {
                classes.push("col-sm-5 col-sm-offset-6");
                classes.push("col-md-4 col-md-offset-6");
                classes.push("col-lg-3 col-lg-offset-6");
                classes.push("jna--our-story-item-odd");
            }

            classes.push("jna--our-story-item");

            return (
                <div key={index} className="row">
                    <div className={classes.join(" ")}>
                        <OurStoryItem
                            item={item}
                        />
                    </div>
                </div>
            );
        })
    }

    render() {
        return (
            <div className="jna--our-story-container">
                <h2 className="jna--section-title">{this.props.title}</h2>
                <div className="row jna--our-story-timeline">
                    {this.getItems()}
                </div>
            </div>
        );
    }
}

export default OurStoryContainer;