import React from 'react'
import {render} from '@testing-library/react'
import {Header} from './'

describe('Header component tests', () => {
    it('renders a component with arbitrary children', () => {
        const {container} = render(
            <Header>
                <h1>Hi! I'm the header's child.</h1>
            </Header>
        )
        expect(container.firstChild).toMatchSnapshot()
        expect(container).toHaveTextContent("Hi! I'm the header's child.")
    })
})