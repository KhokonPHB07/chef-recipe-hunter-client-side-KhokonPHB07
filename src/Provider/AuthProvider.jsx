import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.config';
import { Dna } from 'react-loader-spinner';


export const Authcontext = createContext(null);

const auth = getAuth(app);




const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = async (email, password) => {
        setLoading(true);
        try {
            const userCreated = await createUserWithEmailAndPassword(auth, email, password);
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
            {loading ? (
                // Render the DNA loading component while loading is true
                <Dna visible={true} height="80" width="80" ariaLabel="dna-loading" wrapperStyle={{}} wrapperClass="dna-wrapper" />
            ) : (
                // Render the children components when loading is false
                children
            )}
        </Authcontext.Provider>
    );
};

export default AuthProvider;