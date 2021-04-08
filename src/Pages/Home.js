import React from "react";
import Carouselka from "./Carouselka";
import {ItemsList} from "../Components/ItemList";

export class Home extends React.Component {

    render() {
        return (
            <div className="homePage" >

            <Carouselka />
            <ItemsList />
            </div>
        );
    }


}


