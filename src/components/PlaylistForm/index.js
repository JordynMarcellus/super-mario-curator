import React, { useState } from "react";
import { Box, Button, Form, FormField, TextArea, TextInput } from "grommet";
import { FormAdd } from "grommet-icons";
const DEFAULT_PLAYLIST_ADD_STATE = {
  name: "",
  id: "",
};

// will need to use responsiveContext from Grommet here to modify layout variables!
// responsive grid will be a good ex here https://storybook.grommet.io/?path=/story/responsivecontext--responsive-grid

const setCoursesAtIndex = (event, index, arrayToCopy = [], callback) => {
  const immutableCourseArray = [...arrayToCopy];
  immutableCourseArray[index] = {
    ...immutableCourseArray[index],
    [event.target.name]: event.target.value,
  };
  callback(immutableCourseArray);
};

export const PlaylistForm = props => {
  const [courses, setCourses] = useState([DEFAULT_PLAYLIST_ADD_STATE]);

  return (
    <Box overflow="auto">
      <Form
        onSubmit={event => {
          const { value: playlistData } = event;
          event.preventDefault();
          props.submitFormData({ playlistData, courses });
        }}>
        <Box margin={{ bottom: "large" }}>
          <FormField
            name="playlistName"
            label="Name"
            id="playlist-name"
            required
          />
          <FormField
            name="playlistDescription"
            component={TextArea}
            label="Description (optional)"
            size="medium"
          />
        </Box>
        <Box overflow="auto">
          {courses.map((course, index) => (
            <Box direction="row" key={`playlist-course--${index}`}>
              <Box margin={{ right: "small" }}>
                <FormField label="CourseID (add dashes)">
                  <TextInput
                    label="CourseID (add dashes)"
                    required
                    name="id"
                    maxLength="11"
                    minLength="11"
                    onChange={event =>
                      setCoursesAtIndex(event, index, courses, setCourses)
                    }
                    value={course.id}
                  />
                </FormField>
              </Box>
              <Box>
                <FormField label="Course name">
                  <TextInput
                    name="name"
                    required
                    onChange={event =>
                      setCoursesAtIndex(event, index, courses, setCourses)
                    }
                    value={course.name}
                  />
                </FormField>
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
          <Button primary label="Submit playlist" type="submit" />
        </Box>
      </Form>
    </Box>
  );
};
