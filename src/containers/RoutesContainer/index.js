import React, { memo } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CourseSingleContainer } from "../CourseSingleContainer";
import { HomeContainer } from "../HomeContainer";
import { PlaylistContainer } from "../PlaylistContainer";
import { PlaylistSingleContainer } from "../PlaylistSingleContainer";
import { SignInContainer } from "../SignInContainer";
import { SignOutContainer } from "../SignOutContainer";
import { SignUpContainer } from "../SignUpContainer";
import { UserContainer } from "../UserContainer";
import { NotFound } from "../../components/NotFound";

export const RoutesContainer = memo(props => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route path="/sign-in" component={SignInContainer} />
      <Route path="/sign-out" component={SignOutContainer} />
      <Route path="/sign-up" component={SignUpContainer} />
      <Route exact path="/courses" component={HomeContainer} />
      <Route path="/courses/:courseId" component={CourseSingleContainer} />
      <Route exact path="/playlists" component={PlaylistContainer} />
      <Route
        path="/playlists/:playlistId"
        component={PlaylistSingleContainer}
      />
      <Route path="/user/:userId" component={UserContainer} />
      <Route component={NotFound} />
    </Switch>
  </Router>
));
