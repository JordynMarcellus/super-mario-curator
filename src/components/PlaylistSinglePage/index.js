import React from "react";
import { Box, Heading, Paragraph, Text } from "grommet";
import { StyledLink } from "../../styles/styles";
export const PlaylistSinglePage = props => (
  <Box>
    <Heading level="2">{props.playlistName}</Heading>
    <Paragraph>{props.playlistDescription}</Paragraph>
    {props.playlistCourses.map((course, index) => (
      <StyledLink key={course.id} to={`/courses/${course.id}`}>
        {index + 1}. {course.name}
      </StyledLink>
    ))}
  </Box>
);
