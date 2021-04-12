import React from "react";
import AuthService from "../services/auth.service";
import UserService from "../services/user-service";

export class Login extends React.Component {

    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
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

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }



     handleLogin() {
        let data = {
            username: "nowa nazwa",
            email: "and@gmffal.com8",
            password: "password",
            roles: 'admin',
            message: "User regisfvvfteedsfully!",
            successful: true
        };


        AuthService.login(data.username, data.password).then(
            () => {
                 this.props.history.push("/home");
                 window.location.reload();
            },
            error => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                this.setState({
                    loading: false,
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
                        type="text"
                        className="form-control"
                        id="price"
                        required
                        name="Price"
                    />
                </div>

           <div className="form-group">
                    <label htmlFor="price">Haslo</label>
                    <input
                        type="password"
                        className="form-control"
                        id="price"
                        required
                        name="Price"
                    />
                </div>




                <button onClick={this.handleLogin} className="btn btn-success">
                    Zaloguj
                </button>
            </div>

        );
    }
}