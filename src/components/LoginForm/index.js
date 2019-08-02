import React, {useEffect, useState} from 'react'
import {Box, Button, Form, FormField, Grommet, TextInput} from 'grommet'

import { FirebaseContext } from "../Firebase";

export const authInWithFirebase = async (firebase, {username, password}) => {
    try {
        const response = await firebase.auth().createUserWithEmailAndPassword(username, password)
        return response
    } catch (e) {
        console.log(e)
    }
}

export const LoginForm = (props) => {
    const [userObject, setUserObject] = useState({
        username: '',
        password: '',
    })

    

    return (
        <Grommet>
        <Box align="center">
            <FirebaseContext.Consumer>
                {firebase => {
                    return (
                    <Form onSubmit={
                        e => {
                            e.preventDefault()
                            authInWithFirebase(firebase.firebaseService, userObject)
                        }
                    }>
                        <FormField 
                            label='Username' 
                            htmlFor="login-username-input" 
                        >
                            <TextInput 
                                autocomplete="on"
                                id="login-username-input" 
                                onChange={(e) => setUserObject({...userObject, username: e.target.value })}
                                placeholder="gooigi@protonmail.com" 
                                type="email"
                                value={userObject.username}
                            />
                        </FormField>
                        <FormField 
                            label='password' 
                            htmlFor="login-password-input" 
                        >
                            <TextInput 
                                autocomplete="on"
                                id="login-password-input"
                                onChange={(e) => setUserObject({...userObject, password: e.target.value })}
                                value={userObject.password}
                                type="password"
                            />
                        </FormField>
                        <Button  label="Sign up now" type="submit" />
                    </Form>                    
                )}}
            </FirebaseContext.Consumer>
        </Box>
    </Grommet>
    )
}