import React, { useState } from "react";
import { Box, Button } from "grommet";
import { FormAdd } from "grommet-icons";
import { ToggleForm } from "../../components/ToggleForm";
import { CourseForm } from "../../components/CourseForm";

export const AddCourseContainer = props => {
  const [isAddingNewCourse, setIsAddingNewCourse] = useState(false);
  const toggleCourseAddForm = () => setIsAddingNewCourse(!isAddingNewCourse);
  return (
    <Box>
      <Button
        icon={<FormAdd />}
        reverse
        label="Add new course"
        onClick={toggleCourseAddForm}
      />
      {isAddingNewCourse && (
        <ToggleForm toggleVisibility={toggleCourseAddForm}>
          <CourseForm
            headline="Add new course"
            onSubmitSuccess={toggleCourseAddForm}
          />
        </ToggleForm>
      )}
    </Box>
  );
};
