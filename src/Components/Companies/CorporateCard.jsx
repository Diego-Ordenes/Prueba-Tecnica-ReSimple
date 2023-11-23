/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */

/* Hooks */
import { React, useState } from "react";

/* Icons of React-icons */
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import {BiBuilding } from "react-icons/bi"

function CorporateCard({ company }) {
  /* Function to show and hide the company */
  const [companyVisible, setCompanyVisible] = useState(false);

  const toggleCompany = () => {
    setCompanyVisible(!companyVisible);
  };

  /* Control the visibility of each Area */
  const [areasVisibility, setAreasVisibility] = useState(
    company.AREAS.map(() => false)
  );

  /* Function to show and hide an individual Area */
  const toggleArea = (index) => {
    setAreasVisibility((prevVisibility) => {
      const newVisibility = [...prevVisibility];
      newVisibility[index] = !newVisibility[index];
      return newVisibility;
    });
  };


  return (
    <li className="w-full bg-bg-color-gray rounded-md" key={company.ID_EMPRESA}>
      <div className="flex items-center px-4 gap-2">
        <BiBuilding className="w-6 h-6 inline"/>
      <button
        className="w-full flex justify-between items-center py-6 text-base max-[450px]:text-sm"
        onClick={toggleCompany}>
        {company.NOMBRE_EMPRESA}
        {companyVisible ? (
          <IoIosArrowUp className="w-5 h-5 inline" />
        ) : (
          <IoIosArrowDown className="w-5 h-5 inline" />
        )}
      </button>
      </div>
      <div className={`border-2 rounded-lg m-4 ${companyVisible ? "" : "hidden"}`}>
        {company.AREAS &&
          company.AREAS.map((area,id_area) => (
            <div key={area.ID_AREA}>
              <button
                className="flex items-center justify-between w-full p-4" onClick={() => toggleArea(id_area)}>
                {area.NOMBRE_AREA}
                {areasVisibility[id_area] ? (
                  <IoIosArrowUp className="w-5 h-5 inline" />
                ) : (
                  <IoIosArrowDown className="w-5 h-5 inline" />
                )}
              </button>
              <div className={` ${areasVisibility[id_area]  ? "" : "hidden"} `}>
                {area.TRABAJADORES && area.TRABAJADORES.length > 0 ? (
                  <div className="flex flex-col max-[450px]:flex-row gap-0 max-[450px]:overflow-x-scroll">
                    <ul className={`flex justify-between w-full p-4 text-sm border-b-2 font-extrabold opacity-60 flex-row max-[450px]:flex-col max-[450px]:px-4 max-[450px]:py-1`}>
                      <li className="w-full flex justify-center max-sm:text-sm max-[450px]:justify-start">Nombre:</li>
                      <li className="w-full flex justify-center max-sm:text-sm max-[450px]:justify-start">Rut:</li>
                      <li className="w-full flex justify-center max-sm:text-sm max-[450px]:justify-start">Edad:</li>
                      <li className="w-full flex justify-center max-sm:text-sm max-[450px]:justify-start">Profesión:</li>
                      <li className="w-full flex justify-center max-sm:text-sm max-[450px]:justify-start">Cargo:</li>
                    </ul>
                    {area.TRABAJADORES.map((worker, rut) => (
                      <ul key={`${worker.RUT_TRABAJADOR}-${rut}`} className={`flex items-center justify-between w-full p-4 border-b-2 text-sm max-[450px]:flex-col max-[450px]:p-1 ${areasVisibility ? "" : "hidden"}`}>
                        <li className="w-full flex justify-center max-sm:text-xs  max-[450px]:justify-start truncate">{worker.NOMBRE_TRABAJADOR}</li>
                        <li className="w-full flex justify-center max-sm:text-xs  max-[450px]:justify-start truncate">{worker.RUT_TRABAJADOR}</li>
                        <li className="w-full flex justify-center max-sm:text-xs  max-[450px]:justify-start truncate">{worker.EDAD}</li>
                        <li className="w-full flex justify-center max-sm:text-xs  max-[450px]:justify-start truncate">{worker.PROFESION}</li>
                        <li className="w-full flex justify-center max-sm:text-xs  max-[450px]:justify-start truncate">{worker.CARGO}</li>
                      </ul>
                    ))}
                  </div>
                ) : (
                    <div className="flex w-full items-center justify-center p-4">
                        <p className="text-bg-color-black max-[450px]: text-sm">No hay trabajadores...</p>
                    </div>
                  ) }
              </div>
            </div>
          ))}
      </div>
    </li>
  );
}

export default CorporateCard;
