import React from 'react';
import RouterApp from './router/RouterApp';
import { AppContext } from './context/Context';
import AuthContextProvider from './context/AuthContext';



const initialState = {Title:"", ImageURL:"", Content:"", User:"", CreateDate:""};

const App = () => {

  return (
    <AuthContextProvider>
    <AppContext.Provider value ={initialState}>
      <RouterApp/>
    </AppContext.Provider>
    </AuthContextProvider>
  )
}

export default App;
