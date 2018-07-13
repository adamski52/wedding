import React, {Component} from "react";

class NavItem extends Component {
    render() {
        return (
            <a className="col-xs-12 jna--nav-item" href={this.props.item.anchor}>
                {this.props.item.title}
            </a>
        );
    }
}

export default NavItem;