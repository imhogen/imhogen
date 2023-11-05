import { help } from "../../../../content/mapped-content";
import { machina, redhat } from "../exports";

export default function Card() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2  h-full w-full  gap-5  mx-auto py-10 ">
      {help.map((item, index) => (
        <div
          key={index}
          className=" background-white-card   h-full  lg:w-11/12  flex-col  items-center lg:justify-around lg:items-start inline-flex"
        >
          <div className="w-28 relative  ">
            <img src={item.customIcon} width={200} height={200} alt="icon" />
          </div>
          <div className="flex flex-col gap-5">
            <h1
              className="title-white-card text-center lg:text-left "
              style={machina.style}
            >
              {item.title}
            </h1>
            <p
              className="  descriptive-text-white-card text-center lg:text-left"
              style={redhat.style}
            >
              {item.descriptiveText}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
