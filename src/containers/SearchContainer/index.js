import React, { useContext, useEffect, useState } from "react";
import { Grommet, grommet, Box, Button, Collapsible, Heading } from "grommet";
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

  return (
    <Grommet theme={grommet}>
      <Box>
        <Heading level="2">Random courses:</Heading>
        {isLoading ? <div>loading...</div> : <SearchTable courses={courses} />}
        <Button
          icon={<FormAdd />}
          reverse
          label="Add new course"
          onClick={() => setIsAddingNewCourse(!isAddingNewCourse)}
        />
        <Collapsible open={isAddingNewCourse}>
          <Box>
            <CourseForm />
          </Box>
        </Collapsible>
      </Box>
    </Grommet>
  );
};
