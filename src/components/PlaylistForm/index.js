import React, { useState } from "react";
import { Box, Form } from "grommet";
import { FormTextInput } from "../FormTextInput";

const DEFAULT_PLAYLIST_ADD_STATE = {
  name: "",
  id: "",
};

export const PlaylistForm = props => {
  const [courses, setCourses] = useState([DEFAULT_PLAYLIST_ADD_STATE]);
  return (
    <Box>
      <Form onSubmit={e => e.preventDefault()}>
        {courses.map(({ name, id }) => (
          <>
            <FormTextInput
              label="CourseID (add dsahes)"
              id="courseId-input"
              value={id}
              onChange={e => console.log(e.target.value)}
              required
              inputProps={{ maxLength: "11", minLength: "11" }}
            />
            <FormTextInput
              label="Course name"
              id="courseName-input"
              value={name}
              onChange={e => console.log(e.target.value)}
              required
            />
          </>
        ))}
      </Form>
    </Box>
  );
};
