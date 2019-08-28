import React, { memo } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SignUpForm } from "../../components/SignUpForm";
import { CourseContainer } from "../CourseContainer";
import { HomeContainer } from "../HomeContainer";
import { PlaylistContainer } from "../PlaylistContainer";
import { PlaylistSingleContainer } from "../PlaylistSingleContainer";
import { SignOutContainer } from "../SignOutContainer";
import { NotFound } from "../../components/NotFound";

export const RoutesContainer = memo(props => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route path="/login" component={SignUpForm} />
      <Route path="/signout" component={SignOutContainer} />
      <Route exact path="/courses" component={HomeContainer} />
      <Route path="/courses/:courseId" component={CourseContainer} />
      <Route exact path="/playlists" component={PlaylistContainer} />
      <Route
        path="/playlists/:playlistId"
        component={PlaylistSingleContainer}
      />
      <Route component={NotFound} />
    </Switch>
  </Router>
));
