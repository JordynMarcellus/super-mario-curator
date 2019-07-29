import React, {memo} from 'react'
import {SearchContainer} from '../SearchContainer'
import {CourseForm} from '../../components/CourseForm'

export const HomeContainer = memo((props) => (
    <div> 
        <SearchContainer />
        <CourseForm />
    </div>
))