import React, {useContext, useEffect, useState} from "react"
import {Heading} from 'grommet'
import {FirebaseContext} from '../../components/Firebase'

export const SearchContainer = (props) => {
    const {firestoreDB} = useContext(FirebaseContext)
    const [courses, setCourses] = useState([])
    useEffect(() => {
        firestoreDB.collection("courses").get().then(snapshot => {
            const newData = snapshot.docs.map(doc => doc.data())
            setCourses(newData)
        }).catch(e => console.error(e))
    }, [firestoreDB])

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
        </>
    )
}