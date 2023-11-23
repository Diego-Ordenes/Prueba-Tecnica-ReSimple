/* eslint-disable no-unused-vars */

/* Hooks */
import { useCompaniesContext } from "../Context/ContextCompanies";

/* Components */
import CorporateCard from "../Components/Companies/CorporateCard";

/* Icons or Images */
import img_Resimple from "../../public/img/ReSimple-transformed.png";

function HomePage() {
  /* Obtain companies from the Context  */
  const { companies } = useCompaniesContext();

  return (
    <section className="flex justify-center items-center w-full h-full bg-bg-color-black overflow-y-scroll">
      <div className="flex w-full justify-center h-screen">
        <div className="body-content w-full p-4 flex items-center justify-start h-max flex-col gap-8">
          <div className="w-56 max-[450px]:w-28">
            <img src={img_Resimple} alt="" className="w-full" />
          </div>
        <ul className="w-full flex flex-col gap-4 h-full">
          {companies.length > 0  ? (
            companies.map((company) => (
              <CorporateCard key={company.ID_EMPRESA} company={company} />
            ))
          ) : (
            <div className="w-full flex justify-center items-center">
              <li className="text-2xl text-white max-[450px]:text-xs">No hay Empresas...</li>
            </div>
          )}
        </ul>
      </div>
      </div>
    </section>
  );
}

export default HomePage;
