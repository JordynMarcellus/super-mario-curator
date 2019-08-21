import React, { memo } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginForm } from "../../components/LoginForm";
import { CourseContainer } from "../CourseContainer";
import { HomeContainer } from "../HomeContainer";
import { PlaylistContainer } from "../PlaylistContainer";
import { NotFound } from "../../components/NotFound";

export const RoutesContainer = memo(props => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route path="/login" component={LoginForm} />
      <Route path="/courses" component={HomeContainer} />
      <Route path="/courses/:courseId" component={CourseContainer} />
      <Route path="/playlists" component={PlaylistContainer} />
      <Route path="/playlists/:playlistId" component={CourseContainer} />
      <Route component={NotFound} />
    </Switch>
  </Router>
));
