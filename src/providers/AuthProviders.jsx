import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)

const AuthProviders = ({children}) => {
const [user, setUser] = useState(null);

const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
}

const signInUser = (emaill, password) => {
    return signInWithEmailAndPassword(auth, emaill, password)
}

const logOutUser = () => {
    return signOut(auth)
}

useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
        console.log('Observing Current User inside Useeffect of AuthProvider', currentUser)
    });
    return () => {
        unSubscribe()
    }
}, [])

    const authInfo = {user, createUser, signInUser, logOutUser}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;

AuthProviders.propTypes = {
    children: PropTypes.node,
}