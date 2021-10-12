import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { Usuarios } from "../components/Usuarios";

export const DashboardRouter = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/usuarios"  component={Usuarios}/>
                <Redirect to="/usuarios" />
            </Switch>
        </div>  
    )
}
