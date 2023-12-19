import Motion, { childVariants } from "@/app/framer";
import { help } from "../../../../content/mapped-content";
import { machina, redhat } from "../exports";

export default function Card() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2  h-fit w-full gap-5 mx-auto px-2 ">
      {help.map((item, index) => (
        <div
          key={index}
          className=" background-white-card h-full  lg:w-full  flex-col  items-center lg:justify-around lg:items-start inline-flex px-4"
        >
          <div className="w-36 relative  ">
            <img src={item.customIcon} width={200} height={200} alt="icon" />
          </div>
          <Motion childVariants={childVariants}>
            <div className="flex flex-col gap-5 px-4">
              <h1 className="title-white-card text-center lg:text-left font-machina">
                {item.title}
              </h1>

              <p className="  descriptive-text-white-card text-center lg:text-left font-redhat">
                {item.descriptiveText}
              </p>
            </div>
          </Motion>
        </div>
      ))}
    </div>
  );
}
