import React from "react";
import {
    BrowserRouter,
    Route
} from "react-router-dom";
import {CreateNewItem} from "./Pages/CreateNewItem";
import NavBar from "./Pages/Navbar";
import {Home} from "./Pages/Home";
import Foot from "./Pages/Footer";
import {ItemDetails} from "./Pages/ItemDetails";
import {CreateUser} from "./Pages/CreateUser";
import {Login} from "./Pages/Login";
import {ProfileUsersPage} from "./Pages/ProfileUsersPage";


export class App extends React.Component {




    render() {
        return (
            <div className="gamePage">
                <BrowserRouter>
                    <div>
                       <NavBar />

                        <Route exact path="/home" component={Home} />
                        <Route  path="/create" component={CreateNewItem} />
                        <Route  path="/addUSer" component={CreateUser} />
                        <Route  path="/login" component={Login} />
                        <Route  path="/logout" component={Login} />
                        <Route  path="/profile" component={ProfileUsersPage} />
                        <Route path="/details" component={ItemDetails}  />


                        <div className="footer">
                        <Foot />
                        </div>

                    </div>
                </BrowserRouter>

            </div>
        );
    }


}



