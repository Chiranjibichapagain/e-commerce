import React from "react";
import { Switch, Route } from "react-router-dom";

import AdminPage from "../components/Adminpage";
import Products from "../components/Adminpage/Products";
import Users from "../components/Adminpage/Users";
import Login from "../components/UserLogin";
import LandingPage from "../components/LandingPage";

const AdminRoutes = () => (
  <Switch>
    <Route exact path="/admin" component={AdminPage} />
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/admin/products" component={Products} />
    <Route exact path="/admin/users" component={Users} />
  </Switch>
);

export default AdminRoutes;
