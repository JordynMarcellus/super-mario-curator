import React, {memo} from 'react'
import {Layout} from '../../components/Layout'
import {SearchContainer} from '../SearchContainer'

export const HomeContainer = memo((props) => (
    <Layout>
        <SearchContainer />
    </Layout>
))