import React from "react";
import { Link } from "react-router";

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "Hierhin soll ein Titel",
            name: "Nobbi"
        }
    }

    onButtonClick(event) {
        setTimeout(() => this.setState({ name: "Fitz", title: "TITEELLLLLLLLLLLLLLL!!" }), 2000);
        console.log(this.state);
    }

    render() {
        return (
            <div>
                {this.state.title} <br />
                <div>
                    Es klappt schonmal mit dem Namen:

                    {this.state.name}<br />
                    <Link to="arraypage"><button>Zu den Arrays</button></ Link>
                    <Link to="routerpage"><button>Zum Router-Test</button></ Link>
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
