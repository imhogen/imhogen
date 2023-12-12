import Navbar from "./components/navigation/desktop-navigation";
import Slider from "./components/navigation/tablet-navigation";

import Dropdown from "./components/navigation/mobile-navigation";
import Clients from "./components/sections/clients";
import Help from "./components/sections/help";
import Process from "./components/sections/imho-process";
import Team from "./components/sections/our-team";
import Portfolio from "./components/sections/portfolio";
import Value from "./components/sections/value";

import { Shell } from "./components/ui/shell";
import Landing from "./components/sections/landing";
export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col justify-center items-center overflow-x-hidden overflow-y-hidden
                  max-w-full mx-auto "
    >
      <Navbar />
      <Dropdown />
      <Slider />
      {/* Home */}
      <Shell className=" relative lg:top-0 gap-10 lg:gap-36  ">
        <Landing />
        <Value />
        <Clients />
        <Portfolio />
        <Help />
        <Process />
        <Team />
      </Shell>
    </main>
  );
}
