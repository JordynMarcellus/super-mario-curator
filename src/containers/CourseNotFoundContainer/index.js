import React from "react";
import { Box, Text } from "grommet";
import { AddCourseContainer } from "../../containers/AddCourseContainer";

export const CourseNotFoundContainer = props => (
  <Box>
    <Text>
      This course isn't in our records! Help us grow by adding it below.
    </Text>
    <AddCourseContainer />
  </Box>
);
