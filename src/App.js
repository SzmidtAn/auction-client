import logo from './logo.svg';
import './App.css';
import React from "react";

export class App extends React.Component {

    state = {
        contacts: [],
    }

    componentDidMount() {
        this.getJsonFromApiAdvanced()
    }

    getJsonFromApiAdvanced() {
    fetch("api/ser")
        .then(res => res.json())
        .then(json =>
            {

                this.setState({
                    contacts: this.state.contacts.concat(json)
                })
                console.log(json)

            }
        );

}
    wordToWordItem  = (word) => {
        const title = word.name

        return <WordItem key={title} title={title} showItemsDescription={this.showItemsDescription}/>;
    }

    render() {
        return (
            <div className="gamePage">
                hej

                <div className="wordList" >
                    {this.state.contacts.map(this.wordToWordItem)}
                </div>

            </div>
        );
    }


}

export const WordItem = ({title, showItemsDescription}) => {
    return (
        <div className="wordItem" onClick={showItemsDescription}>
            <h2 className="header">{title}</h2>
        </div>
    );
};

