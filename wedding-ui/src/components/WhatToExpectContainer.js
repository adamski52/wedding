import React, {Component} from "react";

class WhatToExpectContainer extends Component {
    getSections() {
        return this.props.items.map((item, index) => {
            let classes = ["jna--faq-question-answer"],
                icon = ["glyphicon"];

            if(item.isOpen) {
                classes.push("jna--faq-question-answer-open");
                icon.push("glyphicon-minus");
            }
            else {
                icon.push("glyphicon-plus");
            }

            return (
                <div
                    key={index}
                    className="jna--faq-question"
                    id={item.anchor}
                >
                    <h3 className="jna--faq-question-title" onClick={(e) => {
                        return this.props.onToggle(item);
                    }}><i className={icon.join(" ")}/>{item.question}</h3>
                    <div className={classes.join(" ")}>
                        <ul className="jna--faq-question-answers">
                        {
                            this.props.itemRenderer(
                                "li",
                                item.answer
                            )
                        }
                        </ul>
                    </div>
                </div>
            );
        })
    }

    render() {
        return (
            <div className="jna--faq-container">
                <h2 className="jna--section-title">{this.props.title}</h2>
                <div className="jna--faq-questions">
                    {
                        this.getSections()
                    }
                </div>
            </div>
        );
    }
}

export default WhatToExpectContainer;