import React, { useState } from "react";
import { Box, Button, Form, FormField, TextArea, TextInput } from "grommet";
import { FormAdd } from "grommet-icons";

// will need to use responsiveContext from Grommet here to modify layout variables!
// responsive grid will be a good ex here https://storybook.grommet.io/?path=/story/responsivecontext--responsive-grid

const DEFAULT_PLAYLIST_ADD_COURSE_STATE = {
  name: "",
  id: "",
};

const DEFAULT_PLAYLIST_ADD_DATA_STATE = {
  playlistName: "",
  playlistDescription: "",
};

const ADD_PLAYLIST_FORM_COURSE_STATE = [DEFAULT_PLAYLIST_ADD_COURSE_STATE];

const setCoursesAtIndex = (event, index, arrayToCopy = [], callback) => {
  const immutableCourseArray = [...arrayToCopy];
  immutableCourseArray[index] = {
    ...immutableCourseArray[index],
    [event.target.name]: event.target.value,
  };
  callback(immutableCourseArray);
};

export const PlaylistForm = props => {
  const [courses, setCourses] = useState(props.initialFormStateCourses);
  const [playlistData, setPlaylistData] = useState(props.initialFormStateData);
  return (
    <Box overflow="auto">
      <Form
        onSubmit={event => {
          event.preventDefault();
          props.submitFormData({ playlistData, courses });
        }}>
        <Box margin={{ bottom: "large" }}>
          <FormField label="Name" required>
            <TextInput
              onChange={e =>
                setPlaylistData({
                  ...playlistData,
                  playlistName: e.target.value,
                })
              }
              value={playlistData.playlistName}
            />
          </FormField>
          <FormField>
            <TextArea
              label="Description (optional)"
              size="medium"
              onChange={e =>
                setPlaylistData({
                  ...playlistData,
                  playlistDescription: e.target.value,
                })
              }
              value={playlistData.playlistDescription}
            />
          </FormField>
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
            onClick={e =>
              setCourses([...courses, DEFAULT_PLAYLIST_ADD_COURSE_STATE])
            }
          />
          <Button primary label="Submit playlist" type="submit" />
        </Box>
      </Form>
    </Box>
  );
};

PlaylistForm.defaultProps = {
  initialFormStateData: DEFAULT_PLAYLIST_ADD_DATA_STATE,
  initialFormStateCourses: ADD_PLAYLIST_FORM_COURSE_STATE,
};
