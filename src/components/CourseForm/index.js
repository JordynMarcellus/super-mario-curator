import React, { useContext, useState } from "react";
import { Box, Button, Form, FormField, Select, TextInput } from "grommet";
import * as courseInformation from "../../utils/constants/maps";
import { FirebaseContext } from "../Firebase";
import { validateCourseId } from "../../utils/validators/validateCourseId";

const optionsObject = {
  style: courseInformation.courseStyleOptionsArray,
  themes: courseInformation.courseThemesOptionsArray,
  tags: courseInformation.courseTagsOptionsArray,
};

const addCourseToFirestore = (
  { firestoreDB, firebaseService },
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
  const { firestoreDB, firebaseService } = useContext(FirebaseContext);
  return (
    <Box>
      <Form
        onSubmit={e => {
          e.preventDefault();
          return validateCourseId(courseId)
            ? addCourseToFirestore(
                { firestoreDB, firebaseService },
                {
                  courseId,
                  makerId,
                  courseName,
                  style: metaData.style,
                  tags: metaData.tags,
                  themes: metaData.themes,
                }
              )
            : console.error("oh no it didn't work");
        }}>
        <FormField
          label="Course ID (add dashes)"
          htmlFor="courseId-input-pt-one">
          <TextInput
            id="courseId-input"
            value={courseId}
            maxLength="11"
            minLength="11"
            onChange={e => setCourseId(e.target.value)}
            required
            type="text"
          />
        </FormField>
        <FormField label="Course name" htmlFor="courseName-input">
          <TextInput
            id="courseName-input"
            value={courseName}
            onChange={e => setCourseName(e.target.value)}
            required
            type="text"
          />
        </FormField>
        <FormField label="Maker ID" htmlFor="makerId-input">
          <TextInput
            id="makerId-input"
            value={makerId}
            onChange={e => setMakerId(e.target.value)}
            required
            type="text"
          />
        </FormField>
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
