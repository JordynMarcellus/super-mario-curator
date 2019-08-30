import React, { useContext, useEffect, useState } from "react";
import { Box, Heading, TableCell, TableRow } from "grommet";
import { Link } from "react-router-dom";
import { SearchTable } from "../../components/SearchTable";
import { FirebaseContext } from "../../components/Firebase";
import { AddCourseContainer } from "../AddCourseContainer";
const TABLE_HEADERS = ["Course name", "CourseId", "MakerId"];

const buildCourseTableCells = courses => {
  return courses.map(course => (
    <TableRow key={course.courseId}>
      <TableCell>
        <Link to={`/courses/${course.courseId}`}>{course.courseName}</Link>
      </TableCell>
      <TableCell>{course.courseId}</TableCell>
      <TableCell>{course.makerId}</TableCell>
    </TableRow>
  ));
};

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
      <Heading level="2">Random courses:</Heading>
      <Box margin="medium">
        {isLoading ? (
          <div>loading...</div>
        ) : (
          <SearchTable
            cells={buildCourseTableCells(courses)}
            headers={TABLE_HEADERS}
          />
        )}
      </Box>
      <AddCourseContainer />
    </Box>
  );
};
