import Link from "next/link";
import Button from "./components/ui/button";

import RootLayout from "./layout";
export default function NotFound() {
  return (
    <RootLayout hideNavAndFooter>
      <main className="w-screen h-screen bg-white flex-col justify-center items-center  gap-5 md:gap-12 inline-flex">
        <div className=" w-full px-5 md:px-12 flex-col justify-start items-center flex">
          <div className="not-found font-machina text-center  text-[10rem] bg-[500px] lg:bg-[500px] lg:text-[16rem] font-extrabold ">
            404
          </div>
          <div className=" w-full md:w-4/5 text-center text-black text-opacity-60 text-base md:text-xl font-normal font-redhat">
            The page you are looking for doesn't exist or has been moved. Please
            go back to the homepage.
          </div>
        </div>
        <Link href="/">
          <Button text={"Home sweet home"} />
        </Link>
      </main>
    </RootLayout>
  );
}
