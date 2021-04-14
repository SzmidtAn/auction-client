import React from "react";
import AuthService from "../services/auth.service";

export class CreateUser extends React.Component {

    constructor(props) {
        super(props);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeCheckPassword = this.onChangeCheckPassword.bind(this);
        this.saveUser = this.saveUser.bind(this);
        this.createUser = this.createUser.bind(this);

        this.state = {
            id: null,
            name: "",
            email: "",
            password: "",
            checkPassword: "",

            submitted: false
        };
    }



    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onChangeCheckPassword(e) {
        this.setState({
            checkPassword: e.target.value
        });
    }

    createUser() {
        if (this.state.password === this.state.checkPassword) {
            this.saveUser()
        }
    }

    async saveUser() {
        let data = {
            username: this.state.name,
            email: this.state.email,
            password: this.state.password,
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



    render() {
        return (
            <div className="submit-form">
                <h2>Rejestracja</h2>


                    <div className="form-group">
                        <label htmlFor="price">Nazwa uzytkownika</label>
                        <input
                            type="text"
                            className="form-control"
                            id="price"
                            required
                            value={this.state.name}
                            onChange={this.onChangeName}
                            name="Price"
                        />

                        <label htmlFor="price">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            required
                            value={this.state.emal}
                            onChange={this.onChangeEmail}
                            name="Email"
                        />


                        <label htmlFor="password">Haslo</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            required
                            value={this.state.password}
                            onChange={this.onChangePassword}
                            name="Password"
                        />


                        <label htmlFor="password">Powtorz haslo</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            required
                            value={this.state.checkPassword}
                            onChange={this.onChangeCheckPassword}
                            name="Password"
                        />
                    </div>




                    <button onClick={this.createUser} className="btn btn-success">
                        Utworz konto
                    </button>
                </div>

        );
    }
}