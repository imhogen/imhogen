import { Navbar, Slider, Dropdown, Landing } from "./components/exports";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center gap-4 mt-5 
                   w-screen mx-auto px-4"
    >
      <Navbar />
      <Slider />
      <Dropdown />

      <Landing />
    </main>
  );
}
