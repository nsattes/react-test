import React from "react";

import Header from "./Header";

let values = [];
let counter = 0;

export default class MainPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Nobbi",
            title: "Hierhin soll ein Titel",
            values: values
        };
    }

    onButtonClick(event) {
        setTimeout(() => this.setState({ name: "Fitz", title: "TITEELLLLLLLLLLLLLLL!!" }), 2000);
        console.log(this.state);
    }

    increaseValue() {
        values.push({ key: counter, content: "Inhalt Nummer " + counter });
        counter++;

        this.setState({ values });

        console.log(this.state.values);
    }

    removeValue() {
        // sort descending:
        // values.sort((a, b) => b.key - a.key);
        // sort a certain value to the last position:

        // remove last element:
        let x = Math.random() * values.length;
        x = Math.floor(x);
        let key = values[x].key;
        values.sort((a, b) => a.key == key);

        let removed = values.pop();

        this.setState({ values });

        console.log(this.state.values);
        console.log("Removed Element: " + removed.content + "; Random number: " + x);
    }

    render() {
        return (
            <div>
                <div>
                    <Header title={this.state.title} />
                    Es klappt schonmal mit dem Namen:
                    <div>
                        {this.state.name}
                    </div>
                    <button type="button" onClick={this.onButtonClick.bind(this)}>Klick Mich!!</button>
                </div>
                <div>
                    <button type="button" onClick={this.increaseValue.bind(this)}>Wert hinzufügen</button>
                    <button type="button" onClick={this.removeValue.bind(this)}>Wert entfernen</button>
                </div>
            </div>
        )
    }
}