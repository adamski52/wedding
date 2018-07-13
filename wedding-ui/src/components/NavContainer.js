import React, {Component} from "react";
import NavItem from "./NavItem";

class NavContainer extends Component {
    render() {
        let navClasses = ["jna--nav-menu"],
            iconClasses = ["glyphicon"];

        if(this.props.isOpen) {
            navClasses.push("jna--nav-menu-open");
            iconClasses.push("glyphicon-remove");
        }
        else {
            iconClasses.push("glyphicon-menu-hamburger");
        }

        return (
            <nav className="jna--nav-container">
                <span
                    className="jna--nav-menu-description"
                    onClick={this.props.onNavToggle}>
                    <i
                        className={iconClasses.join(" ")}
                    />
                    Menu
                </span>

                <div
                    className={navClasses.join(" ")}>
                    {
                        this.props.itemRenderer(
                            NavItem,
                            this.props.items
                        )
                    }
                </div>
            </nav>
        );
    }
}

export default NavContainer;