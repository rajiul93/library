import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { PropTypes } from "prop-types";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);

  const [user, setUser] = useState({});
const [loading, setLoading] = useState(true)



const googleProvider = new GoogleAuthProvider() 
const logByGoogle =()=>{
   return signInWithPopup(auth, googleProvider)
}

 
const createWithEmailPassword =(  email,password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
}
const loginWithEmail = (email, password) => { 
    return signInWithEmailAndPassword(auth, email, password);
  };
const logOut =async()=>{
// const {data}= await axios(`${import.meta.env.VITE_API_URL}/log-out`,{withCredentials:true})
// console.log(data);
   return signOut(auth)
}
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      
        setUser(user);
        setLoading(false)
      });
      return () => {
        unSubscribe();
      };
  }, [auth]);
 
 
  const authInfo = { 
    logByGoogle,
    createWithEmailPassword,
    user,
    logOut,
    loading,
    loginWithEmail, 
 };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = { 
  children: PropTypes.node,
}