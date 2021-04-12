import React from "react";
import AuthService from "../services/auth.service";
import UserService from "../services/user-service";
import {CardDeck} from "react-bootstrap";
import {Item} from "../Components/ItemList";

export class ProfileUsersPage extends React.Component {

    constructor() {
        super();

        this.state = {
          user: "",
            items: []
        }

    }



    componentDidMount() {
        if (!AuthService.getCurrentUser()){
            this.props.history.push({
                pathname: '/login'})
        }else {
          this.setState({
            user: AuthService.getCurrentUser()
          })
        }
    }



    showItemsForUser = () => {
        let id = this.state.user.id
        AuthService.getItemsForUser(id).then(r => {
            this.setState({
                items: (r.data)
            })
        })
    }

    itemToItem  = (item) => {
        const title = item.name
        const description = item.description
        const currentPrice = item.currentPrice
        const id= item.id

        return <Item key={title} title={title} description={description} price={currentPrice} id={id} showItemsDescription={this.showDetailsFor}/>;
    }

    showDetailsFor = (id) => {
        window.location.href = `details?id=${id}`;
    }

    render() {
        return (
            <div className="submit-form">
                Nazwa uzytkownika: <h2>{this.state.user.username}</h2>
                Email: <h3>{this.state.user.email}</h3>
                Data dolaczenia: <h4>{this.state.user.time}</h4>
                <button className="btn btn-success" onClick={this.showItemsForUser}>Moje licytacje</button>

                <CardDeck>
                    {this.state.items.map(this.itemToItem)}
                </CardDeck>
            </div>

        );
    }
}