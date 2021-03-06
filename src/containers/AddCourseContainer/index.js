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
        label="New course"
        onClick={toggleCourseAddForm}
      />
      <ToggleForm
        isVisible={isAddingNewCourse}
        toggleVisibility={toggleCourseAddForm}>
        <CourseForm
          headline="Add new course"
          onSubmitSuccess={toggleCourseAddForm}
        />
      </ToggleForm>
    </Box>
  );
};
