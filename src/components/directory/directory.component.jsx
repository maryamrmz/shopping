import React, { Component } from "react";
import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

class Directory extends Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: "hats",
                    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
                    linkUrl: "hats",
                    id: 1
                },
                {
                    title: "jackets",
                    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
                    linkUrl: "",
                    id: 2
                },
                {
                    title: "sneakers",
                    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
                    linkUrl: "",
                    id: 3
                },
                {
                    title: "womens",
                    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
                    linkUrl: "",
                    size: "large",
                    id: 4
                },
                {
                    title: "mens",
                    imageUrl: "https://i.ibb.co/R70vBrQ/mens.png",
                    linkUrl: "",
                    size: "large",
                    id: 5
                }
            ]
        };
    }

    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({ id, ...otherSectionProps }) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))}
            </div>
        );
    }
}

export default Directory;
