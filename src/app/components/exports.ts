import localFont from "@next/font/local";
import Navbar from "./navigation/desktop-navigation";
import Dropdown from "./navigation/mobile-navigation";
import Slider from "./navigation/tablet-navigation";
import Landing from "./sections/landing";
import Value from "./sections/value";
import Clients from "./sections/clients";
import Portfolio from "./sections/portfolio";
import Help from "./sections/help";

const exports = {
  Dropdown,
  Landing,
  Slider,
  Navbar,
  Value,
  Clients,
  Help,

  Portfolio,
};

export { Dropdown, Landing, Slider, Navbar, Value, Portfolio, Clients, Help };

export const machina = localFont({
  src: "../../../public/fonts/NeueMachina-Ultrabold.otf",
  variable: "--font-machina",
});
export const redhat = localFont({
  src: "../../../public/fonts/RedHatDisplay-VariableFont_wght.ttf",
  variable: "--font-redhat",
});
