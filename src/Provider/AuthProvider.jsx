import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.config';


export const Authcontext = createContext(null);

const auth = getAuth(app);




const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = async (email, password) => {
        setLoading(true);
        try {
            const userCreated = await createUserWithEmailAndPassword(auth, email, password);
            // setUser(userCreated.user);
            setLoading(false);
            return userCreated;
        } catch (error) {
            setLoading(false);
            throw error;
        }
    };

    const signIn = async (email, password) => {
        setLoading(true);
        try {
            const signInUser = await signInWithEmailAndPassword(auth, email, password);
            setUser(signInUser.user);
            setLoading(false);
            return signInUser;
        } catch (error) {
            setLoading(false);
            throw error;
        }
    };



    const logOut = () => {
        setLoading(true);
        return signOut(auth)
            .then(() => {
                setUser(null); 
                setLoading(false);
            })
            .catch(error => {
                setLoading(false);
                throw error;
            });
    };


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {

            setUser(loggedUser);
            setLoading(false);
        })

        return () => {
            unsubscribe();
        }

    }, [])

    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
        loading
    }

    return (
        <Authcontext.Provider value={authInfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthProvider;