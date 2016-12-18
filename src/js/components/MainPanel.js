import React from "react";
import { Router, Route, IndexRoute, hashHistory, Link } from "react-router";

import ArrayPage from "./pages/ArrayPage";
import DefaulPage from "./pages/DefaultPage";
import Header from "./Header";
import RouterPage from "./pages/RouterPage";

export default class MainPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }


    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Header}>
                    <IndexRoute component={DefaulPage}></ IndexRoute>
                    <Route path="arraypage" component={ArrayPage}></ Route>
                    <Route path="routerpage" component={RouterPage}></ Route>
                </ Route>
            </ Router>
        )
    }
}