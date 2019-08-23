import React, { useState } from "react";
import { Box, Button, Form, FormField, TextArea } from "grommet";
import { FormAdd } from "grommet-icons";
import { courseIdValidationRegex } from "../../utils/validators/validateCourseId";
const DEFAULT_PLAYLIST_ADD_STATE = {
  name: "",
  id: "",
};
// will need to use responsiveContext from Grommet here to modify layout variables!
// responsive grid will be a good ex here https://storybook.grommet.io/?path=/story/responsivecontext--responsive-grid

export const PlaylistForm = props => {
  const [courses, setCourses] = useState([DEFAULT_PLAYLIST_ADD_STATE]);
  return (
    <Box overflow="auto">
      <Form
        onSubmit={event => {
          const { value } = event;
          event.preventDefault();
          console.log(value);
        }}>
        <Box margin={{ bottom: "large" }}>
          <FormField
            name="playlist-name--input"
            label="Name"
            id="playlist-name"
            required
          />
          <FormField
            name="playlist-description--text-area"
            component={TextArea}
            label="Description (optional)"
            size="medium"
          />
        </Box>
        <Box overflow="auto">
          {courses.map((representation, index) => (
            <Box direction="row" key={`playlist-course--${index}`}>
              <Box margin={{ right: "small" }}>
                <FormField
                  label="CourseID (add dashes)"
                  name={`courseID--${index}`}
                  required
                  maxLength="11"
                  minLength="11"
                  validate={{
                    regex: courseIdValidationRegex,
                    message: "Doesn't match validation criteria",
                  }}
                />
              </Box>
              <Box>
                <FormField
                  label="Course name"
                  name={`courseName--${index}`}
                  required
                />
              </Box>
            </Box>
          ))}
        </Box>
        <Box direction="row" flex="grow" justify="between" pad="small">
          <Button
            icon={<FormAdd />}
            label="Add course"
            onClick={e => setCourses([...courses, DEFAULT_PLAYLIST_ADD_STATE])}
          />
          <Button label="Add another course" type="submit" />
        </Box>
      </Form>
    </Box>
  );
};
