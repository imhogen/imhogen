import Tabs from "../components/blog/blog-tabs";
import { Dropdown, Navbar, Slider, redhat } from "../components/exports";
import Hero from "../components/ui/hero";
import { Shell } from "../components/ui/shell";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Shell className={`${redhat.variable}   `}>
      <Navbar />
      <Slider />
      <Dropdown />
      <Hero />

      <div className="relative lg:top-[6rem] flex flex-col md:flex-row w-full min-h-screen gap-5">
        <section className="flex-2 ">
          {" "}
          <Tabs />
        </section>

        <section className="flex-1 ">{children}</section>
      </div>
    </Shell>
  );
};

export default DashboardLayout;
