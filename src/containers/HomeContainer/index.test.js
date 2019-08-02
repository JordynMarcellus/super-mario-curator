import React from 'react'
import firebse from 'firebase'
import {firebaseService, firestoreDB} from '../../services/firebase/index'
import { render } from '@testing-library/react'
import {HomeContainer} from './'

jest.mock('firebase')

describe("HomeContainer tests", () => {
    it("renders the home container", () => {
        const {container} = render(
            <HomeContainer />
        )
        expect(container).toMatchSnapshot()
    })
})