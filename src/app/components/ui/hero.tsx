import React from "react";
import SearchBox from "./search-box";
import { machina } from "../exports";

const hero = () => {
  return (
    <div>
      <div
        className={` lg:top-[6rem] flex flex-col gap-5 ${machina.className} `}
      >
        <div className="mx-auto">
          <span className="text-white sub-heading font-extrabold leading-10">
            All{" "}
          </span>
          <span className="imho-gradient-text-to-r sub-heading font-extrabold leading-10">
            Blog{" "}
          </span>
          <span className="text-white sub-heading font-extrabold leading-10">
            Posts{" "}
          </span>
        </div>

        {/* search */}

        <SearchBox />
      </div>
    </div>
  );
};

export default hero;
