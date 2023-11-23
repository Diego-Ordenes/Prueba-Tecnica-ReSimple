/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-const-assign */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

/* Hooks */
import { createContext, useContext, useEffect, useState } from "react";

/* Datas */
import { getJSON } from '../api/api';

const CompaniesContext = createContext();

export const useCompaniesContext = () => {
  const context = useContext(CompaniesContext);
  /* Validate error  */
  if (!context) {
    throw new Error("CompaniesContext needs to use CompaniesContextProvide");
  }
  return context;
};

function CompaniesContextProvide({ children }) {

  /*------------- Logic to obtain the JSON and transform it into Array  --------------------  */
  const [companies, setCompanies] = useState([]);

  const getCompanies = async () => {
    try {
      const data = await getJSON('/src/data/dicionario-de-datos.json');
      setCompanies(data.EMPRESAS);
      // Show Array of Json
      // console.log(data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCompanies();
  }, []);

  return (
    <CompaniesContext.Provider value={{ companies }}>
      {children}
    </CompaniesContext.Provider>
  );
}

export { CompaniesContext, CompaniesContextProvide };
