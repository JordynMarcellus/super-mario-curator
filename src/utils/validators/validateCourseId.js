const courseIdValidationRegex = /([A-Z0-9]){3}-([A-Z0-9]){3}-([A-Z0-9]){3}/i

export const validateCourseId = (courseId) => { 
    const isCourseIdValid = courseIdValidationRegex.test(courseId)
    if (isCourseIdValid === true) {
        return true
    }
    return false
}