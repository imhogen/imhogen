import localFont from "next/font/local";
import Slider from "./navigation/Tablet-navigation";
import Navbar from "./navigation/Desktop-navigation";
import Dropdown from "./navigation/mobile-navigation";
import Clients from "./sections/Clients";
import Help from "./sections/Help";
import Landing from "./sections/Landing";
import Team from "./sections/Our-team";
import Portfolio from "./sections/Portfolio";
import Value from "./sections/Value";

export {
  Dropdown,
  Landing,
  Slider,
  Navbar,
  Value,
  Portfolio,
  Clients,
  Help,
  Team,
};

export const machina = localFont({
  src: "../../../public/fonts/NeueMachina-Ultrabold.otf",
  variable: "--font-machina",
});
export const redhat = localFont({
  src: "../../../public/fonts/RedHatDisplay-VariableFont_wght.ttf",
  variable: "--font-redhat",
});

export const calligraffitti = localFont({
  src: "../../../public/fonts/Calligraffitti-Regular.ttf",
  variable: "--font-calligraffitti",
});
