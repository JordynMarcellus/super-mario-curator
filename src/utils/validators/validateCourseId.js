const courseIdValidationRegex = /([A-Z1-9]){3}-([A-Z1-9]){3}-([A-Z1-9]){3}/i

export const validateCourseId = (courseId) => { 
    console.log(courseId)
    const isCourseIdValid = courseIdValidationRegex.test(courseId)
    if (isCourseIdValid === true) {
        return true
    }
    return false
}