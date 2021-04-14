import React from "react";
import UserService from "../services/user-service";
import {Button, Form, FormControl, Navbar} from "react-bootstrap";


export class Search extends React.Component {

    constructor() {
        super();
        this.state = {
            getName: "",
            data: [],
            minPris: 1,
            maxPris: 99999
        }
    }

    componentDidMount() {
        this.getData()
    }

    getData = () => {
        const data = UserService.getCurrentData()
    this.setState({
        data: data
    })
    }

    handleChange = ( e) => {
        const getValue = e.target.value
        console.log(e.target.id)
        this.setState({
            [e.target.id]: getValue,
        })
    }

    updateList = () => {

        const result = this.getFilteredUsersForText(this.state.getName, this.state.minPris, this.state.maxPris)
        this.props.updateFilter(result);
        console.log(result)
    }

    getFilteredUsersForText = (text, minPris, maxPris) => {
        let data = this.state.data
        data = data.filter(user => user.name.toLowerCase().includes(text.toLowerCase()))
           data = data.filter(item => item.currentPrice >= minPris && item.currentPrice <= maxPris)
           data = data.filter(item => item.currentPrice >= 20)
        return (data)
    }

    render() {
        return (
            <div className="searchBar" >

                <h2>Wyszukiwarka</h2>
                <Form inline>
                    <FormControl type="text" placeholder="Szukana fraza" id="getName" className="mr-sm-2" ref="filterInput" onChange={this.handleChange} />
                    <FormControl type="number" placeholder="Minimalna cena" id="minPris" className="mr-sm-2"  onChange={this.handleChange} />
                    <FormControl type="number" placeholder="Maxymalna cena" id="maxPris" className="mr-sm-2"  onChange={this.handleChange} />
                    <Button variant="primary" onClick={this.updateList}
                    >Wyszukaj</Button>
                </Form>
            </div>
        );
    }

}

