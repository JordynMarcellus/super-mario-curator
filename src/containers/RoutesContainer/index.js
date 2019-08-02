import React, {useContext, useEffect, memo} from 'react'
import {Router, Link} from '@reach/router'
import {Layout} from '../../components/Layout'
import { LoginForm } from '../../components/LoginForm' 
import {FirebaseContext} from '../../components/Firebase'
import {HomeContainer} from '../HomeContainer'

export const RoutesContainer = memo((props) => {
    const {firebaseService} = useContext(FirebaseContext)
    useEffect(() => {
        const unsubscribeFromFirebaseObservable = firebaseService.auth().onAuthStateChanged(user => {
            if (user) {
                return false
            }
            return false
        })
        return () => unsubscribeFromFirebaseObservable()
    })
    return (
            <Router>
                    <HomeContainer exact path="/" />
                    <LoginForm path="/login" />
            </Router>     
    )
})