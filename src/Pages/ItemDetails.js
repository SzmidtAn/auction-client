import React from 'react';
import {Button, Card, Form} from "react-bootstrap";

export class ItemDetails extends React.Component {

    constructor(id) {
        super(id);


    this.state = {
        numOfOffers: 0,
        newPrice: ""
    }

    }
    componentDidMount() {
        const search = this.props.location.search; // returns the URL query String
        const params = new URLSearchParams(search);
        const IdFromURL = params.get('id');
        this.setState({
           id: IdFromURL
        })
        this.getJsonFromApi(IdFromURL)
    }

    getJsonFromApi = (id) => {
        fetch("items/" + id)
            .then(res => res.json())
            .then(json =>
                {

                    this.setState({
                        item: json
                    })
                    this.itemToItem(json)
                }
            );

    }


    itemToItem  = (item) => {
        const title = item.name
        const description = item.description
        const currentPrice = item.currentPrice

        this.setState({
            name: title,
            description: description,
            currentPrice: currentPrice,
            minPriceOffset: 10,
            payment: "TPay, Płacę przy odbiorze, Przelew tradycyjny",
            condition: "Nowy",
            owner: "JACOB",
            timeLeft: "06:12:!3"
        })
    }

    handleClick = () => {
        if (this.state.currentPrice < this.state.newPrice){

        this.setState({
            currentPrice: this.state.newPrice
        })
        this.updateItem()
        }
    }

    onChangePrice = (e) => {
        this.setState({
            newPrice: e.target.value
        });
    }

    updateItem = async () => {
        let data = this.state.item
        data.currentPrice = this.state.newPrice
        let id = data.id

        await fetch("items/" + id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
    }

    render() {
        return (
            <div className="ItemDetails">
                <div className="productImg">

                <img
                    className="d-block "
                    style={{maxWidth: '40rem', minWidth: '40rem', width: '40rem'}}
                    src="https://cdn.pixabay.com/photo/2021/02/06/07/02/laptop-5987093_960_720.jpg"

                    alt="First slide"
                />
                </div>

                <div className="productDescription">

                    <Card style={{ width: '40rem' }}>
                        <Card.Body>
                            <Card.Title>{this.state.name}
                            </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Od: {this.state.owner}</Card.Subtitle>
                            <Card.Text className="mb-2 text-muted">Aktualna cena</Card.Text>
                            <Card.Subtitle className="mb-2 text-muted pris">{this.state.currentPrice} zl</Card.Subtitle>
                            <Card.Text className="mb-2 text-muted">{this.state.numOfOffers} osob licytuje</Card.Text>
                            <Card.Text className="mb-2 text-muted">Stan przedmiotu: {this.state.condition}</Card.Text>
                            <Card.Text className="mb-2 text-muted">Dostawa od 15 zl</Card.Text>
                            <Card.Text className="mb-2 text-muted">Płatności: {this.state.payment}</Card.Text>

                            <Form inline >
                                <Form.Group  controlId="formBasicEmail">
                                    <Form.Label>Twoja oferta     </Form.Label>
                                    <Form.Control type="number" placeholder={this.state.currentPrice + this.state.minPriceOffset + ' zl'}
                                                  value={this.state.newPrice} onChange={this.onChangePrice} />
                                    <Form.Text className="text-muted">
                                        {this.state.timeLeft} do końca
                                    </Form.Text>
                                </Form.Group>

                            </Form>
                                <Button variant="primary" type="submit" onClick={this.handleClick}>
                                    Licytuj
                                </Button>

                        </Card.Body>
                    </Card>

                </div>

                <div className="productDetailDescription">

                    <Card style={{ width: '80rem' }}>
                        <Card.Body>
                            <Card.Title>OPIS
                            </Card.Title>
                                <br/>
                                <br/>
                            <Card.Subtitle className="mb-2 text-muted"><b>{this.state.name}</b></Card.Subtitle>

                            <Card.Text className="mb-2 text-muted">

                                {this.state.description}

                            </Card.Text>


                        </Card.Body>
                    </Card>

                </div>


            </div>
        );
    }
}

