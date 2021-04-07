import React from "react";
import {Form} from 'react-bootstrap';


export class CreateNewItem extends React.Component {

    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.saveTutorial = this.saveTutorial.bind(this);
        this.newTutorial = this.newTutorial.bind(this);

        this.state = {
            id: null,
            name: "",
            description: "",
            currentPrice: "",
            published: false,

            submitted: false
        };
    }



    onChangeTitle(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangePrice(e) {
        this.setState({
            currentPrice: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    async saveTutorial() {
        var data = {
            name: this.state.name,
            description: this.state.description,
            currentPrice: this.state.currentPrice
        };



        await fetch('/api/items', {
            method:  'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });

        this.props.history.push({
            pathname: '/home'})
    }



    newTutorial() {
        this.setState({
            id: null,
            title: "",
            description: "",
            currentPrice: "",
            published: false,

            submitted: false
        });
    }


    render() {
        return (
            <div className="submit-form">

                    <div>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                required
                                value={this.state.title}
                                onChange={this.onChangeTitle}
                                name="title"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="price">Price</label>
                            <input
                                type="number"
                                className="form-control"
                                id="price"
                                required
                                value={this.state.currentPrice}
                                onChange={this.onChangePrice}
                                name="Price"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input
                                type="text"
                                className="form-control"
                                id="description"
                                required
                                value={this.state.description}
                                onChange={this.onChangeDescription}
                                name="description"
                            />
                        </div>

                        <button onClick={this.saveTutorial} className="btn btn-success">
                            Submit
                        </button>
                    </div>

            </div>
        );
    }
}