import React, { useState } from "react";
import { Box, Button, Form, TextArea } from "grommet";
import { FormAdd } from "grommet-icons";
import { FormTextInput } from "../FormTextInput";

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
        <FormTextInput
          label="Playlist name"
          id="playlist-name"
          value={playlistData.name}
          onChange={e =>
            setPlaylistData({ ...playlistData, name: e.target.value })
          }
          required
        />
        <TextArea
          placeholder="Add a descriptional (optional)"
          value={playlistData.description}
          onChange={e =>
            setPlaylistData({ ...playlistData, description: e.target.value })
          }
        />
        <hr />
        <Button
          icon={<FormAdd />}
          plain
          label="Add another course"
          onClick={e => setCourses([...courses, DEFAULT_PLAYLIST_ADD_STATE])}
        />
        {courses.map(({ name, id }, index) => (
          <Box key={`playlist-course--${index}`}>
            <FormTextInput
              label="CourseID (add dashes)"
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
          </Box>
        ))}
      </Form>
    </Box>
  );
};
