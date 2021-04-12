import React from "react";
import AuthService from "../services/auth.service";

export class CreateUser extends React.Component {

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
        let data = {
            username: "user222",
            email: "and@gffa.432com8",
            password: "password",
            roles: 'admin',
            message: "User regisfvvfteedsfully!",
            successful: true
        };



        AuthService.register(
         data.username, data.email, data.password
        ).then(
            response => {

                this.setState({
                    message: response.data.message,
                    successful: true
                });

                this.props.history.push({
                    pathname: '/home'})

            },
            error => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                this.setState({
                    successful: false,
                    message: resMessage
                });
            }
        );





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


                    <div className="form-group">
                        <label htmlFor="price">Nazwa uzytkownika</label>
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




                    <button onClick={this.saveTutorial} className="btn btn-success">
                        Utworz konto
                    </button>
                </div>

        );
    }
}