import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const GlobalContext = createContext(0);

const GlobalContextProvider = (props) => {
  async function dealWithAPIData({ endpoint }) {
    return await fetch(`https://hyateka7la.com/api/v1/${endpoint}`, {
      // method: method ? method : "GET",
      // headers: headers,
      // headers: {
      //   // "Content"
      // },
      // body: method ? JSON.stringify({ ...bodyObj }) : null,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result, "result getting data");
        return result;
      })
      .catch((error) => console.log(error, "error getting data"));
  }

  return (
    <GlobalContext.Provider value={{ dealWithAPIData }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
