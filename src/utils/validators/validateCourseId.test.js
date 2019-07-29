import {validateCourseId} from './validateCourseId'

const mockData = ["CYP-1Y5-8TG", "0MY-DXY-QQF", "8X3-S37-B3G", "8CH-GK4-R3G", "P40-2TP-GKG"]
const badMockData = "CPP-!KB-CQP"
describe('validateCourseId tests', () => {
    mockData.forEach(element => {
        it(`validates courseID ${element} to be true `, () => {
            expect(validateCourseId(element)).toBe(true)            
        })
    })
    it('fails the validation case for special characters', () => {
        expect(validateCourseId(badMockData)).toBe(false)
    })
})