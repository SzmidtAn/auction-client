import React from "react";
import {Button, Card, CardDeck} from "react-bootstrap";
import UserService from "../services/user-service";
import AuthService from "../services/auth.service";

export class ItemsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
        };
    }




    componentDidMount() {
        this.getAndSaveDataFromApi()
    }

    getAndSaveDataFromApi() {
                UserService.getAll()
                    .then(r =>
                   this.getDataFromLocalStorage()
                )
    }

    getDataFromLocalStorage = () => {
        const data = UserService.getCurrentData()
        this.setState({
            items: data
        })
    }


    itemToItem  = (item) => {
        const title = item.name
        const description = item.description
        const currentPrice = item.currentPrice
        const id= item.id

        return <Item key={title} title={title} description={description} price={currentPrice} id={id} showItemsDescription={this.handleClick}/>;
    }

    handleClick = (title, id) => {
      window.location.href = `details?${title}&id=${id}`;
    }

    render() {
        return (
            <div className="itemList" >

                    <CardDeck>
                        {this.state.items.map(this.itemToItem)}
                    </CardDeck>
                </div>
        );
    }


}


export const Item = ({title, description, price, id, showItemsDescription}) => {
    return (
        <div className="item" onClick={() => showItemsDescription(title, id)}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://assets.catawiki.nl/assets/2021/2/20/c/c/b/thumb2_ccb7d083-8b25-4029-a9f2-292543e4790c.jpg" />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button variant="primary">{price}zl</Button>
                </Card.Body>
            </Card>
        </div>
    );
};