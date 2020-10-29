import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "../components/LandingPage";
import ProductDetails from "../components/ProductDetails";
import UserLogin from "../components/UserLogin";
import UserRegistration from "../components/UserRegistration";
import ForgetPass from "../components/ForgetPass";
import ChangePass from "../components/ChangePass";
import Banned from '../components/Banned'
import AdminPage from '../components/Adminpage'


const UserRoutes = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/products/:id" component={ProductDetails} />
    <Route exact path="/login" component={UserLogin} />
    <Route exact path="/register" component={UserRegistration} />
    <Route exact path="/forgetpass" component={ForgetPass} />
    <Route exact path="/changepass/:token" children={<ChangePass />} />
    <Route exact path="/banneduser" component={Banned} />
    <Route exact path="/admin" component={AdminPage} />
  </Switch>
);

export default UserRoutes;
