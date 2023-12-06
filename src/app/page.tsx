import Landing from "./blog/trending/page";
import Navbar from "./components/navigation/Desktop-navigation";
import Slider from "./components/navigation/Tablet-navigation";
import Dropdown from "./components/navigation/mobile-navigation";
import Clients from "./components/sections/Clients";
import Help from "./components/sections/Help";
import Process from "./components/sections/Imho-process";
import Team from "./components/sections/Our-team";
import Portfolio from "./components/sections/Portfolio";
import Value from "./components/sections/Value";
import { Shell } from "./components/ui/shell";
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
      <Shell className="Shell relative lg:top-0 gap-10 lg:gap-36  ">
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
