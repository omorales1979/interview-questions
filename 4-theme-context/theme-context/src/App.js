import React, {useContext, useEffect, useState} from "react";
import "./App.css"

const ThemeContext= React.createContext("dark")


function ThemeStatus({children}){
  const { theme }= useContext(ThemeContext);
  return (
    <>
      <div aling="center">
        <h1>Current Theme: {ThemeContext}</h1>
        { children }
      </div>
    </>
  )
}

function ThemeSelection(){
  const {setTheme} = useContext(ThemeContext);
  return (
    <div aling="center">
      <button onClick={()=> setTheme("light")} >Light</button>
      <button onClick={()=> setTheme("dark")} >Dark</button>
    </div>
  )
}

export default function App() {
  const [theme, setTheme] =  useState("light");

  return (
    <ThemeContext.Provider value={{theme}}>
      <ThemeStatus>
        <ThemeSelection />
      </ThemeStatus>
    </ThemeContext.Provider>
  );
}

