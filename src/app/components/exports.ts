import localFont from "@next/font/local";
import Navbar from "./layout/desktop-navigation";
import Dropdown from "./layout/mobile-navigation";
import Slider from "./layout/tablet-navigation";
import Landing from "./sections/landing";
import Value from "./sections/value";
import Clients from "./sections/clients";
import Portfolio from "./sections/portfolio";

const exports = {
  Dropdown,
  Landing,
  Slider,
  Navbar,
  Value,
  Clients,

  Portfolio,
};

export { Dropdown, Landing, Slider, Navbar, Value, Portfolio, Clients };

export const machina = localFont({
  src: "../../../fonts/NeueMachina-Ultrabold.otf",
});
export const redhat = localFont({
  src: "../../../fonts/RedHatDisplay-VariableFont_wght.ttf",
});
