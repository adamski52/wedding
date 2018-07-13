import React, {Component} from "react";

class FunFactsContainer extends Component {
    constructor(props) {
        super(props);

        this.positionedItems = this.props.items.map((item) => {
            return {
                value: item,
                left: 20 + this.getRandomBetween(0, 60) + "%",
                top: 20 + this.getRandomBetween(0, 60) + "%",
                scale: (100 - this.getRandomBetween(0, 50)) / 100,
            };
        });

        setInterval(() => {
            this.props.onNextFact();
        }, this.props.config.duration);
    }

    getRandomBetween(min, max) {
        return Math.floor(Math.random() * max + min);
    }

    getItems() {
        return this.positionedItems.map((item, index) => {
            let classes = ["jna--fun-facts-item"];
            if(this.props.config.openItem === index) {
                classes.push("jna--fun-facts-item-active");
            }

            return (
                <p
                    className={classes.join(" ")}
                    style={{
                        left: item.left,
                        top: item.top,
                        transform: "scale(" + item.scale + ")"
                    }}>
                    <span className="jna--fun-facts-text">{item.value}</span>
                </p>
            );
        });
    }

    render() {
        return (
            <div className="jna--fun-facts-container">
                {this.getItems()}
            </div>
        );
    }
}

export default FunFactsContainer;