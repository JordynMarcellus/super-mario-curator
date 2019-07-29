import React, {useContext, useEffect, useState} from "react"
import {Box, Button, Collapsible, Heading} from 'grommet'
import {CourseForm} from '../../components/CourseForm'
import {FirebaseContext} from '../../components/Firebase'

export const SearchContainer = (props) => {
    const {firestoreDB} = useContext(FirebaseContext)
    const [courses, setCourses] = useState([])
    const [isAddingNewCourse, setIsAddingNewCourse] = useState(false)

    useEffect(() => {
        firestoreDB.collection("courses").get().then(snapshot => {
            const newData = snapshot.docs.map(doc => doc.data())
            setCourses(newData)
        }).catch(e => console.error(e))
    }, [])

    return (
        <>
            <Heading level="1">Random courses:</Heading>

            {courses.map(({courseName, makerId, courseId}) => (
               <div key={courseId}>
                   <ul>
                        <li>{courseName}</li>
                        <li>{courseId}</li>
                        <li>{makerId}</li>
                    </ul>
                </div>
            ))}
            
            <Button label="Add new course" onClick={() => setIsAddingNewCourse(!isAddingNewCourse)} />
            <Collapsible open={isAddingNewCourse}>
                <Box>
                    <CourseForm />
                </Box>
            </Collapsible>
        </>
    )
}