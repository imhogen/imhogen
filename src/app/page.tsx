import localFont from "@next/font/local";
import { Navbar, Slider, Dropdown, Landing } from "./components/exports";
import Clients from "./components/sections/clients";

import Value from "./components/sections/value";
import Portfolio from "./components/sections/portfolio";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center  
                   w-11/12 mx-auto "
    >
      <Navbar />
      <Slider />
      <Dropdown />
      {/* Home */}
      <section className="flex flex-col relative top-20 md:top-36  gap-10">
        <Landing />
        <Value />
        {/* cleints and partners */}
        <Clients />
        <Portfolio />
      </section>

      {/* portfolio */}
      <section className="flex flex-col relative top-20 md:top-36  gap-10"></section>
    </main>
  );
}
