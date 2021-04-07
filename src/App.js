import React from "react";
import {
    BrowserRouter,
    Route
} from "react-router-dom";
import {CreateNewItem} from "./Pages/CreateNewItem";
import NavBar from "./Pages/Navbar";
import {Home} from "./Pages/Home";
import Foot from "./Pages/Footer";

export class App extends React.Component {

    render() {
        return (
            <div className="gamePage">
                <BrowserRouter>
                    <div>
                       <NavBar />

                        <Route exact path="/home" component={Home} />
                        <Route  path="/create" component={CreateNewItem} />

                        <div className="footer">
                        <Foot />
                        </div>

                    </div>
                </BrowserRouter>

            </div>
        );
    }


}



