import { Landing, Portfolio, Value, Clients } from "./components/exports";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col justify-center items-center  
                   w-screen mx-auto "
    >
      <section className="flex flex-col relative w-full top-10  gap-10 items-center">
        {/* Home */}
        <>
          <Landing />
          <Value />
        </>
        {/* cleints and partners */}
        <Clients />
        <Portfolio />
      </section>

      {/* portfolio */}
      <section className="flex flex-col relative top-20 md:top-36  gap-10"></section>
    </main>
  );
}
