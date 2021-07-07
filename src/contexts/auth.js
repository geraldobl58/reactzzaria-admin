import React, { useState, useEffect, createContext, useCallback } from 'react';
import PropTypes from 'prop-types';

import firebase, { db } from 'services/firebase';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [userInfo, setUserInfo] = useState({
    isUserLoggedIn: false,
    user: null,
  });

  useEffect(() => {
    console.log('DADOS DO USUARIO', userInfo.user);
    const uid = userInfo.user?.uid || 'EMPTY';
    db.collection('users').doc(uid).get().then(doc => {
      console.log('EXISTE?', doc.exists, uid);
      if (doc.exists || uid === 'EMPTY') {
        console.log('JÁ EXISTE OU É EMPTY', doc, uid);
        return;
      }

      db.collection('users').doc(uid).set({
        email: userInfo.user.email,
        name: userInfo.user.displayName,
        role: 'user'
      });
    });
  }, [userInfo]);

  const login = useCallback(() => {
    const provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }, []);

  const logout = useCallback(() => {
    firebase.auth().signOut().then(() => {
      setUserInfo({
        isUserLoggedIn: false,
        user: null
      });
    });
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, userInfo, setUserInfo }}>
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export { AuthProvider, AuthContext };
