import React from 'react';

// Basically React.createContext is an object that can
// be used anywhere in the app without passing props
// Somehow like a global variable behaviour
const authContext = React.createContext({
  authenticated: false,
  login: () => {}
});

export default authContext;
