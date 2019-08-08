import React, { useContext, useEffect, useState } from "react";
import { Box, Button, Heading, Layer } from "grommet";
import { FormAdd } from "grommet-icons";
import { CourseForm } from "../../components/CourseForm";
import { SearchTable } from "../../components/SearchTable";
import { FirebaseContext } from "../../components/Firebase";

export const SearchContainer = props => {
  const { firestoreDB } = useContext(FirebaseContext);
  const [courses, setCourses] = useState([]);
  const [isLoading, setLoadingState] = useState(true);
  const [isAddingNewCourse, setIsAddingNewCourse] = useState(false);

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
  const toggleCourseAddForm = () => setIsAddingNewCourse(!isAddingNewCourse);
  return (
    <Box pad="small">
      <Heading level="2">Random courses:</Heading>
      <Box margin="medium">
        {isLoading ? <div>loading...</div> : <SearchTable courses={courses} />}
      </Box>
      <Button
        icon={<FormAdd />}
        reverse
        label="Add new course"
        onClick={toggleCourseAddForm}
      />
      {isAddingNewCourse && (
        <Layer onEsc={toggleCourseAddForm} onClickOutside={toggleCourseAddForm}>
          <Box pad="large">
            <CourseForm />
          </Box>
        </Layer>
      )}
    </Box>
  );
};
