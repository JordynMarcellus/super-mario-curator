import React, {useContext, useState} from 'react'
import {Box, Button, Grommet, Form, FormField, TextInput} from 'grommet'
import { FirebaseContext } from "../Firebase";
import {validateCourseId} from '../../utils/validators/validateCourseId'

const addCourseToFirestore = (db, {courseId, makerId, courseName}) => {
    db.collection("courses").doc(courseId).set({
        courseId, 
        makerId,
        courseName
    }).then(() => {
        // document successfully submitted
        console.log("submitted!")
    }).catch(e => console.error(e))
}

export const CourseForm = (props) => {
    const [courseId, setCourseId] = useState('')
    const [makerId, setMakerId] = useState('')
    const [courseName, setCourseName] = useState('')
    const [tags, setTags] = useState('')
    const { firestoreDB } = useContext(FirebaseContext)
    return (
        <Grommet>
            <Box>
                <Form onSubmit={(e) => {
                    e.preventDefault()
                    return validateCourseId(courseId) ? addCourseToFirestore(firestoreDB, {courseId, makerId, courseName}) : console.error("oh no it didn't work")
                }}>
                    <FormField label="Course ID (add dashes)" htmlFor="courseId-input-pt-one">
                        <TextInput
                            id="courseId-input"
                            value={courseId}
                            maxLength="11"   
                            minLength="11"
                            onChange={(e) => setCourseId(e.target.value)}
                            required
                            type="text"
                        />
                    </FormField>
                    <FormField label="Course name" htmlFor="courseName-input">
                        <TextInput
                            id="courseName-input"
                            value={courseName}
                            onChange={(e) => setCourseName(e.target.value)}
                            required
                            type="text"
                        />
                    </FormField>
                    <FormField label="Maker ID" htmlFor="makerId-input">
                        <TextInput
                            id="makerId-input"
                            value={makerId}
                            onChange={(e) => setMakerId(e.target.value)}
                            required
                            type="text"
                        />
                    </FormField>
                    <Button type="submit" label="Add Course!"/>
                </Form>
            </Box>
        </Grommet>    
    )    
}