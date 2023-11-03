import { Landing, Portfolio, Value, Clients } from "./components/exports";
import { Shell } from "./components/ui/shell";
export default function Home() {
  return (
    <main
      className="  flex min-h-screen flex-col justify-center items-center overflow-x-hidden gap-36 overflow-y-hidden
                   max-w-screen mx-auto "
    >
      {/* Home */}
      <Shell className="relative top-[6.5rem] md:top-[10rem] lg:top-0 ">
        <Landing />
        <Value />
        <Clients />
      </Shell>

      {/* portfolio */}
      <Shell className="">
        <Portfolio />
      </Shell>
    </main>
  );
}
