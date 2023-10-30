import { Navbar, Slider, Dropdown, Landing } from "./components/exports";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center  gap-4 mt-5 
                   w-11/12 mx-auto "
    >
      <Navbar />
      <Slider />
      <Dropdown />

      <section className="relative top-20 md:top-36">
        <Landing />
      </section>
    </main>
  );
}
