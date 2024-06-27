import { createContext, useEffect, useState } from "react";
<<<<<<< HEAD
import { PropTypes } from "prop-types";
=======
import PropTypes from 'prop-types'
>>>>>>> 907702b58353b68e6d6c7279a6ef0a4cc1140e50
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)

<<<<<<< HEAD
const AuthProviders = ({ children }) => {

    const [user, setuser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOutuser = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setuser(currentUser)
            console.log('Observering current state on auth change in use effect', currentUser)
        });
        return () => {
            unSubscribe()
        }

    }, [])

    const authInfo = {user, createUser, signInUser, logOutuser}
=======
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
>>>>>>> 907702b58353b68e6d6c7279a6ef0a4cc1140e50

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