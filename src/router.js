
import UserData from "pages/User";
import {  Switch, Route } from "react-router-dom";
import Header from "components/Header";
import Items from "pages/Items";
import Pay from "pages/Pay";

import { DataUserProvider } from 'context/useDataUser';
import { DataItemProvider } from 'context/useDataItem';
const AppRouter = () => {

    return(
    <>
        <Header />
        <Switch>
            <DataItemProvider>
            <DataUserProvider>
            <Route exact path="/" >
                
                <UserData />
            </Route>
            
            <Route path="/items">
                <Items />
            </Route>
            </DataUserProvider>    
            <Route path="/pay">
                <Pay />
            </Route>
            </DataItemProvider>
        </Switch>
        </>)
}


export default AppRouter