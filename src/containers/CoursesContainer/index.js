import React, { useContext, useEffect, useState } from "react";
import { Box, Heading, Text } from "grommet";
import { Card } from "../../components/Card";
import { CardWrapper } from "../../components/CardWrapper";
import { FirebaseContext } from "../../components/Firebase";
import { Spinner } from "../../components/Spinner";
import { AddCourseContainer } from "../AddCourseContainer";

export const CoursesContainer = props => {
  const { firestoreDB } = useContext(FirebaseContext);
  const [courses, setCourses] = useState([]);
  const [isLoading, setLoadingState] = useState(true);
  useEffect(() => {
    firestoreDB
      .collection("courses")
      .get()
      .then(snapshot => {
        const newData = snapshot.docs.map(doc => doc.data());
        setCourses(newData);
        setLoadingState(false);
      })
      .catch(e => console.error(e));
  }, [firestoreDB]);

  return (
    <Box pad="small">
      <Heading level="2">Newest courses:</Heading>
      <Box margin="medium" flex="grow">
        {isLoading && <Spinner />}
        {courses.length !== 0 && (
          <CardWrapper>
            {courses.map(course => (
              <Card
                key={course.courseId}
                title={course.courseName}
                description={<Text />}
                linkTo={`/courses/${course.courseId}`}
              />
            ))}
          </CardWrapper>
        )}
      </Box>
      <AddCourseContainer />
    </Box>
  );
};
