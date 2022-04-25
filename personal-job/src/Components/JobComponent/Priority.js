import { Button } from "@mui/material";
import React, { Component } from "react";

class Priority extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: this.props.color,
        };
    }

    render() {
        var color;
        if (this.props.color === "red") {
            color = "error"
        }
        if (this.props.color === "yellow") {
            color = "warning"
        }
        // let className = "btn btn-";
        // let link = toAbsoluteUrl(`${this.state.src}`);
        // if (this.state.outline) className += "outline-";
        // className += this.state.variant;
        // if (this.state.icon === true) className += " p-0";
        // if (this.state.className) {
        //     className = className + " " + this.state.className;
        // }
        return (
            <>
                <Button
                    style={{ minWidth: "100px" }}
                    variant="contained"
                    color={color}
                >
                    {this.props.color === "red" && "Urgent"}
                    {this.props.color === "yellow" && "Regular"}
                    {this.props.color === "blue" && "Trivial"}
                </Button>
            </>
        );
    }
}
export default Priority;