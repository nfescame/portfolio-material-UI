import React, { useState, useEffect } from "react";
import api from "../services/api";

export const AuthContext = React.createContext({});

export const Auth = (props) => {
  const [cards, setCards] = useState();
  const [skills, setSkills] = useState();
  const [appBarOpen, setAppBarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    api
      .get("/")
      .then((res) => {
        setCards(res.data.cardsDB);
        setSkills(res.data.skillsDB);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        skills,
        darkMode,
        setDarkMode,
        cards,
        appBarOpen,
        setAppBarOpen,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
