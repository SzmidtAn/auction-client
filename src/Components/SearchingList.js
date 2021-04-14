import React from "react";
import UserService from "../services/user-service";
import {Button, CardDeck, Form, FormControl, Navbar} from "react-bootstrap";
import {Item} from "./ItemList";


export class SearchingList extends React.Component {

    constructor() {
        super();

        this.state = {
            getName: "",
            result:[]
        }

    }


    itemToItem  = (item) => {
        const title = item.name
        const description = item.description
        const currentPrice = item.currentPrice
        const id= item.id

       return <li>{title}</li>
    }

    render() {
        return (
            <div className="searchBar" >


                <h4>Oferty</h4>
                {this.props.result.map(this.itemToItem)}


            </div>
        );
    }


}

