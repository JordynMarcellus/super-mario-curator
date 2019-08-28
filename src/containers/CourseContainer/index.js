import React, { memo, useContext, useEffect, useState } from "react";
import { Box, Heading, Text } from "grommet";
import { Layout } from "../../components/Layout";
import { FirebaseContext } from "../../components/Firebase";
import { CourseNotFoundContainer } from "../../containers/CourseNotFoundContainer";

export const CourseContainer = memo(props => {
  const { firestoreDB } = useContext(FirebaseContext);
  const [isLoading, setLoadingState] = useState(true);
  const [courseInfo, setCourseInfo] = useState(null);
  const { courseId } = props.match.params;
  useEffect(() => {
    firestoreDB
      .collection("courses")
      .doc(courseId)
      .get()
      .then(docSnap => {
        const courseData = docSnap.exists ? docSnap.data() : null;
        setCourseInfo(courseData);
        setLoadingState(false);
      })
      .catch(e => console.error(e));
  }, [firestoreDB, courseId]);
  return (
    <Layout>
      <Box justify="center">
        <Heading level="2">
          Course information for... {props.match.params.courseId}
        </Heading>
        {isLoading && <div>Loading...</div>}
        {courseInfo === null && isLoading === false && (
          <CourseNotFoundContainer courseId={props.match.params.courseId} />
        )}
        {courseInfo !== null && !isLoading && (
          <Box as="ul">
            <Heading as="li" level="3">
              Name: <Text>{courseInfo.courseName}</Text>
            </Heading>
            <Heading as="li" level="3">
              Maker: <Text>{courseInfo.makerId}</Text>
            </Heading>
            <Text as="li">Style: {courseInfo.style.label}</Text>
            <Text as="li">Tags: {courseInfo.tags.label}</Text>
            <Text as="li">Themes: {courseInfo.themes.label}</Text>
          </Box>
        )}
      </Box>
    </Layout>
  );
});
