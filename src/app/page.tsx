import {
  Landing,
  Portfolio,
  Value,
  Clients,
  Help,
  Team,
} from "./components/exports";
import Process from "./components/sections/imho-process";
import { Shell } from "./components/ui/shell";
export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col justify-center items-center overflow-x-hidden overflow-y-hidden
                  max-w-full mx-auto "
    >
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
