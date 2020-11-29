import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  LOGIN_ROUTE,
  HOME_ROUTE,
  REGISTER_ROUTE,
  POST_LIST,
} from "./utils/constant";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Header from "./common/header";
import PostList from "./pages/posts-list";
import { Layout, AppBodyWrapper } from "./common/styles";

const AllRoutes = (props) => {
  return (
    <AppBodyWrapper>
      <Header />
      <Layout>
        <Switch>
          {/* <Route exact path={HOME_ROUTE} component={Home} /> */}
          <Route exact path={LOGIN_ROUTE} component={Login} />
          <Route exact path={REGISTER_ROUTE} component={Register} />
          <Route exact path={HOME_ROUTE} component={PostList} />

          {/* <Route component={PageNotFound} /> */}
        </Switch>
      </Layout>
    </AppBodyWrapper>
  );
};

export default AllRoutes;
