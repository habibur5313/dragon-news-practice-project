import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateCurrentUser, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.init';


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
const [user,setUser] = useState(null)
const [loading,setLoading] = useState(true)

console.log(user);

const SignUp = (email,password) => {
                    return createUserWithEmailAndPassword(auth,email,password)
                 
}

const SignIn = (email,password) => {
               return signInWithEmailAndPassword(auth,email,password)
                    
}

const updateUser = (update) => {
                   return updateProfile(auth.currentUser,update)
}

const logOut = () => {
                    signOut(auth,res => {
                                        console.log(res)
                                        setLoading(true)
                    }
                    )
}

useEffect(() => {
                    const unSubscribe = onAuthStateChanged(auth,cUser => {
                                        setUser(cUser);
                                        setLoading(false)
                                        
                    })
                    return () => {unSubscribe}
},[])

const AuthInfo = {
                    name: 'mamun',
                    SignUp,
                    SignIn,
                    user,
                    logOut,
                    loading,
                    setUser,
                    setLoading,
                    updateUser
}
                    return (
                                        <AuthContext.Provider value={AuthInfo} >
                                                            {children}
                                        </AuthContext.Provider>
                    );
};

export default AuthProvider;

