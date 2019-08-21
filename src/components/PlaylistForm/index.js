import React, { useState } from "react";
import { Box, Button, Form, FormField, TextArea } from "grommet";
import { FormAdd } from "grommet-icons";
import { FormTextInput } from "../FormTextInput";
import { courseIdValidationRegex } from "../../utils/validators/validateCourseId";
const DEFAULT_PLAYLIST_ADD_STATE = {
  name: "",
  id: "",
};

export const PlaylistForm = props => {
  const [courses, setCourses] = useState([DEFAULT_PLAYLIST_ADD_STATE]);
  const [playlistData, setPlaylistData] = useState({
    name: "",
    description: "",
  });
  return (
    <Box>
      <Form onSubmit={e => e.preventDefault()}>
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
        <Box>
          <Button
            icon={<FormAdd />}
            plain
            label="Add another course"
            onClick={e => setCourses([...courses, DEFAULT_PLAYLIST_ADD_STATE])}
          />
          {courses.map(({ name, id }, index) => (
            <Box key={`playlist-course--${index}`}>
              <FormField
                label="CourseID (add dashes)"
                name={`courseID--${index}`}
                required
                validate={{
                  regex: courseIdValidationRegex,
                  message: "Doesn't match validation criteria",
                }}
              />
              <FormField
                label="Course name"
                name={`courseName--${index}`}
                required
              />
            </Box>
          ))}
        </Box>
      </Form>
    </Box>
  );
};
