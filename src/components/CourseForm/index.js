import React, { useContext, useState } from "react";
import { Box, Button, Form, FormField, Select, TextInput } from "grommet";
import { FirebaseContext } from "../Firebase";
import { FormTextInput } from "../FormTextInput";
import * as courseInformation from "../../utils/constants/maps";
import { validateCourseId } from "../../utils/validators/validateCourseId";

const optionsObject = {
  style: courseInformation.courseStyleOptionsArray,
  themes: courseInformation.courseThemesOptionsArray,
  tags: courseInformation.courseTagsOptionsArray,
};

const addCourseToFirestore = (
  firestoreDB,
  { courseId, makerId, courseName, style, tags, themes }
) => {
  firestoreDB
    .collection("courses")
    .doc(courseId)
    .set({
      courseId,
      makerId,
      courseName,
      style,
      tags,
      themes,
    })
    .then(() => {
      // document successfully submitted
      console.log("submitted!");
    })
    .catch(e => console.error(e));
};

export const CourseForm = props => {
  const [courseId, setCourseId] = useState("");
  const [makerId, setMakerId] = useState("");
  const [courseName, setCourseName] = useState("");
  const [metaData, setMetaData] = useState({
    style: "",
    tags: [],
    themes: [],
  });
  const { firestoreDB } = useContext(FirebaseContext);
  return (
    <Box>
      <Form
        onSubmit={e => {
          e.preventDefault();
          if (validateCourseId(courseId)) {
            addCourseToFirestore(firestoreDB, {
              courseId,
              makerId,
              courseName,
              style: metaData.style,
              tags: metaData.tags,
              themes: metaData.themes,
            });
            return props.onSubmitSuccess();
          }
          console.error("oh no it didn't work");
        }}>
        <FormTextInput
          label="Course ID (add dashes)"
          id="courseId-input"
          value={courseId}
          onChange={setCourseId}
          required
          inputProps={{
            maxLength: "11",
            minLength: "11",
          }}
        />
        <FormTextInput
          label="Course name"
          id="courseName-input"
          value={courseName}
          onChange={setCourseName}
          required
        />
        <FormTextInput
          label="Maker ID"
          id="makerId-input"
          value={makerId}
          onChange={setMakerId}
          required
        />
        {Object.keys(metaData).map(metaDataKey => (
          <Select
            key={metaDataKey}
            id={`${metaDataKey}--select`}
            name={`${metaDataKey}--select`}
            placeholder={`Choose ${metaDataKey}`}
            value={metaData[metaDataKey]}
            labelKey="label"
            valueKey="value"
            margin="small"
            onChange={({ option }) => {
              setMetaData({
                ...metaData,
                [metaDataKey]: option,
              });
            }}
            options={optionsObject[metaDataKey]}
          />
        ))}
        <Button type="submit" label="Add Course!" />
      </Form>
    </Box>
  );
};
