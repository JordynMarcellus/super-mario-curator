import React, {memo} from 'react'
import {Router, Link} from '@reach/router'
import { LoginForm } from '../../components/LoginForm' 

export const RoutesContainer = memo((props) => (
    <Router>
        <LoginForm path="/" />
    </Router>
))