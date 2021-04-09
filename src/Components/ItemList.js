import React from "react";
import {Button, Card, CardDeck} from "react-bootstrap";
import UserService from "../services/user-service";
import AuthService from "../services/auth.service";

export class ItemsList extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            items: [],

        };
    }




    componentDidMount() {
        this.getJsonFromApi()
    }

    getJsonFromApi() {


                UserService.getAll()
                    .then(r => {
                        this.setState({
                            items: this.state.items.concat(r.data)
                        })
                    }
                )


    }



    itemToItem  = (item) => {
        const title = item.name
        const description = item.description
        const currentPrice = item.currentPrice
        const id= item.id

        return <Item key={title} title={title} description={description} price={currentPrice} id={id} showItemsDescription={this.handleClick}/>;
    }

    handleClick = (id) => {
        if (localStorage.getItem('user')){
      window.location.href = `details?id=${id}`;
        }else {
      window.location.href = `login`;
        }

    }

    render() {
        return (
            <div className="itemList" >
                <div className="itemList" >

                    <CardDeck>
                        {this.state.items.map(this.itemToItem)}
                    </CardDeck>
                </div>
            </div>
        );
    }


}


export const Item = ({title, description, price, id, showItemsDescription}) => {
    return (
        <div className="item" onClick={() => showItemsDescription(id)}>
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