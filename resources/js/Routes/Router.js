import React from 'react';
import {
    BrowserRouter as Router, Route,
    Switch
} from 'react-router-dom';
import IndexController from "../Controllers/Index/IndexController";
import AdminIndexController from "../Controllers/Admin/IndexController";
import AdminDashboardController from "../Controllers/Admin/DashboardController";
import NotFoundController from "../Controllers/Error/NotFoundController";


const MainRouter = () => (
    <Router>
            <Switch>
                <Route exact path="/" component={IndexController} />,
                <Route exact path="/admin" component={AdminIndexController} />
                <Route exact path="/admin/dashboard" component={AdminDashboardController} />
                <Route component={NotFoundController} />
            </Switch>
    </Router>
)

export default MainRouter;
