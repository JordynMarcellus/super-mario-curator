import React from "react";
import { Box, Text } from "grommet";
import { AddCourseContainer } from "../../containers/AddCourseContainer";

export const CourseNotFoundContainer = props => (
  <Box>
    <Text>This course isn't in our records!</Text>
    <AddCourseContainer />
  </Box>
);
