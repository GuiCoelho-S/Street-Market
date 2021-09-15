
import UserData from "./pages/User";
import {  Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Items from "./pages/Items";
import Pay from "./pages/Pay";

export default function AppRouter(){

    return(
    <>
        <Header />
        <Switch>
            <Route exact path="/" >
                <UserData />
            </Route>
            <Route path="/items">
                <Items />
            </Route>    
            <Route path="/pay">
                <Pay />
            </Route>
        </Switch>
        </>)
}


