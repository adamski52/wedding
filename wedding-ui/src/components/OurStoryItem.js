import React, {Component} from "react";

class OurStoryItem extends Component {
    getStoryContents() {
        return this.props.item.summary.map((paragraph, index) => {
            return (
                <p key={index}>{paragraph}</p>
            )
        });
    }

    render() {
        return (
            <div className="jna--our-story-item-container">
                <h3 className="jna--our-story-date">{this.props.item.date}</h3>
                <h4 className="jna--our-story-title">{this.props.item.title}</h4>
                <div className="jna--our-story-contents">
                    {this.getStoryContents()}
                </div>
            </div>
        );
    }
}

export default OurStoryItem;