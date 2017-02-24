import React, {Component} from "react";
import HelloWorld from "./HelloWorld";
import User from "./User";
import UserList from "./UserList";
import UserCreation from "./UserCreation";

export default class App extends Component {

    render() {
        const user1 = {firstName: "Anton", lastName: "Hinlegen"};
        const user2 = {firstName: "Berta", lastName: "Müller"};
        const user3 = {firstName: "Claus", lastName: "Geiger"};
        const user4 = {firstName: "Daniela", lastName: "Pfeiffer"};

        return <div>
            <UserList users={[user1, user2, user3, user4]}/>
            <UserCreation/>
        </div>;
    }

}
