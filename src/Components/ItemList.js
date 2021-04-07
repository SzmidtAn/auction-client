import React from "react";
import {Button, Card, CardDeck} from "react-bootstrap";

export class ItemsList extends React.Component {

    state = {
        items: [],
    }

    componentDidMount() {
        this.getJsonFromApi()
    }

    getJsonFromApi() {
        fetch("api/items")
            .then(res => res.json())
            .then(json =>
                {

                    this.setState({
                        items: this.state.items.concat(json)
                    })

                }
            );

    }



    itemToItem  = (item) => {
        const title = item.name
        const description = item.description
        const currentPrice = item.currentPrice

        return <Item key={title} title={title} description={description} price={currentPrice} showItemsDescription={this.showItemsDescription}/>;
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
};


export const Item = ({title, description, price, showItemsDescription}) => {
    return (
        <div className="item" onClick={showItemsDescription}>
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