import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const GlobalContext = createContext(0);

const GlobalContextProvider = (props) => {
  async function dealWithAPIData({ endpoint, method, headers, bodyObj }) {
    return fetch(`https://hyateka7la.com/api/${endpoint}`, {
      method: method ? method : "GET",
      headers: headers,

      // headers: {
      //   // "Content"
      // },
      body: JSON.stringify({ ...bodyObj }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result, "result getting data");
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
