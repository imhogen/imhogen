import Link from "next/link";
import { machina } from "../exports";

const NavigationBar = () => {
  return (
    <div className="max-w-screen ">
      <h2 className={`text-xl font-semibold leading-tight text-gray-100 `}>
        <Link href="/" className={`imho-gradient-text-to-r`}>
          Blog
        </Link>{" "}
        / Dashboard
      </h2>
    </div>
  );
};

export default NavigationBar;
