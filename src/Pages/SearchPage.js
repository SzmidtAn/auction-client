import React from "react";
import {SearchingList} from "../Components/SearchingList";
import {Search} from "../Components/Search";
import UserService from "../services/user-service";

export class SearchPage extends React.Component {
    constructor() {
        super();

        this.state = {
            getName: "",
            result:  UserService.getCurrentData()
        }

    }
    handleFilterUpdate = (filterValue) => {
        this.setState({
            result: filterValue
        });
    }

    render() {
        return (
            <div className="homePage" >
                 <Search updateFilter={this.handleFilterUpdate}/>
                <SearchingList result={this.state.result} />
            </div>
        );
    }


}


