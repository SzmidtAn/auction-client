import React from "react";
import axios from "axios";
import UserService from "../services/user-service";
import authHeader from "../services/auth-header";

export class CreateNewItem extends React.Component {

    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.saveTutorial = this.saveTutorial.bind(this);
        this.newTutorial = this.newTutorial.bind(this);

        this.state = {
            id: null,
            name: "",
            description: "",
            currentPrice: "",
            published: false,
            category: "",
            file: [],

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


   onChangeCategory(e) {
        this.setState({
            category: e.target.value
        });
    }

   onChangeImage(e) {
        // // Assuming only image
        // let file = this.refs.file.files[0];
        // let reader = new FileReader();
        // let url = reader.readAsDataURL(file);
        //
        // reader.onloadend = function (e) {
        //     this.setState({
        //         imgSrc: [reader.result],
        //     })
        // }.bind(this);
        // console.log(url) // Would see a path?
        // // TODO: concat files

   }





    async saveTutorial() {
        console.log(this.state.imgSrc)
        let data = {
            name: this.state.name,
            description: this.state.description,
            category: this.state.category,
            currentPrice: this.state.currentPrice,
            owner: "Piotr",
            payment: "",
            bestOffer: "Maciek",
            timeLeft: 7*24,
        };




        await fetch('/api/items', {
            method:  'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(authHeader(), data),
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
                    <form>
                        <label htmlFor="image">Dodaj zdjecie przedmiotu</label>
                        <input
                            ref="file"
                            type="file"
                            name="user[image]"
                            multiple="true"
                            onChange={this.onChangeImage}/>
                    </form>
                    {/* Only show first image, for now. */}
                    <img src={this.state.imgSrc} />
                </div>


                <div>

                        <div className="form-group">
                            <label htmlFor="title">Nazwa przedmiotu</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                required
                                placeholder="Wpisz, co chcesz sprzedac"
                                value={this.state.title}
                                onChange={this.onChangeTitle}
                                name="title"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">Opis przedmiotu</label>
                            <input
                                type="text"
                                className="form-control"
                                id="description"
                                required
                                placeholder="Opisz ten przedmiot"
                                value={this.state.description}
                                onChange={this.onChangeDescription}
                                name="description"
                            />
                        </div>



                        <div className="form-group">
                            <label htmlFor="category">Kategoria</label>
                            <select
                                className="form-control"
                                id="category"
                                required
                                value={this.state.category}
                                onChange={this.onChangeCategory}
                                name="category"
                            >
                                <option value="Ubrania">Ubrania</option>
                                <option value="Meble">Meble</option>
                                <option value="Inne">Inne</option>
                            </select>

                        </div>

                        <div className="form-group">
                            <label htmlFor="price">Cena wywolawcza</label>
                            <input
                                type="number"
                                className="form-control"
                                id="price"
                                required
                                placeholder="0,00"
                                value={this.state.currentPrice}
                                onChange={this.onChangePrice}
                                name="Price"
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