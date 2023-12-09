import { LinkProps } from "next/link";
import {
  PortfolioProps,
  clientsProps,
  valueProps,
  HelpProps,
  teamProps,
  navLinkProps,
  SocialMediaProps,
} from "../Types";

export const value: valueProps[] = [
  {
    title: "Engineering Design Solutions for SMEs within Africa",
    description:
      "We're dedicated to making a difference in the heart of Africa. By concentrating on Small and Medium Enterprises (SMEs) and startups, we catalyze innovation, bringing cutting-edge products to the African market. Bridging the chasm between the vast potential of Africa's informal sector and advanced engineering technologies is our forte. We're not just designing products; we're shaping opportunities and transforming dreams into reality, one innovative solution at a time",
    src: "/images/Artboard1.svg",
  },
  {
    title: "Engineering Design Skills for the African Youth",
    description:
      "We take pride in our mission to empower Africa's youth through engineering design skills. With our expertise, we're dedicated to equipping the next generation of African innovators, who will drive transformative change. By imparting knowledge and fostering creativity, we're not just designing products; we're shaping futures.",
    src: "/images/Artboard4.svg",
  },
];

export const client: clientsProps[] = [
  {
    src: "/images/ic.webp",
    alt: "ic logo",
  },
  {
    src: "/images/KBI.webp",
    alt: "kbi logo",
  },
  {
    src: "/images/COE.webp",
    alt: "coe logo",
  },
  {
    src: "/images/SMIDO.webp",
    alt: "smido logo",
  },
  {
    src: "/images/tcc_knust.webp",
    alt: "tcc logo",
  },
  {
    src: "/images/Commeph.webp",
    alt: "commaph logo",
  },
  {
    src: "/images/abu_diyah.webp",
    alt: "abu diya logo",
  },

  {
    src: "/images/TF_AFRICA.webp",
    alt: "tf Africa logo",
  },
];

export const portfolio: PortfolioProps[] = [
  {
    count: "01",
    title: "Engineering Design Workshop",
    description:
      "In collaboration with the esteemed Prof. George Obeng, Dean of the Faculty of Mechanical and Chemical Engineering, we hosted an enlightening workshop. Many students tend to sidestep engineering design, deeming it daunting. Our workshop aimed to change this perception by highlighting the incredible value of engineering design in career growth and national development. We showcased that, with the right tools and techniques, engineering design becomes approachable and gratifying. This event not only raised awareness about the field but also rekindled student enthusiasm.We're committed to nurturing the future of engineering design.",
    Src: "/images/portfolio_1.webp",
    alt: "image",
  },

  {
    count: "02",
    title: "  Disc Brake Casting Process",
    description:
      " The Foundry Men Association led by Abu-Diyau sought a partner to expand their product lines and drive research and development, all within budget constraints and technological boundaries. Seizing the vision to bolster Ghana's automotive sector, an opportunity arose to become Original Equipment Manufacturers (OEMs). Our team existing capabilities and expertise. This endeavor birthed a new product line, propelling the foundry towards a promising future and a thriving market presence.",
    Src: "/images/portfolio_2.webp",
    alt: "image",
  },
  {
    count: "03",
    title: "Laboratory High Shear MixerEngineering Design Workshop",
    description:
      " In partnership with TCC-CIMET, IMHO proudly presents the Laboratory High Shear Mixer, a tailor-made solution for the Transport Research and Education Centre (TRECK) at KNUST. This cutting-edge equipment is instrumental for blending diverse materials and formulating composite substances essential for civil laboratory experiments and research. The seamless integration of this solution promises to significantly enhance the progress of ongoing research endeavors",
    Src: "/images/portfolio_3.webp",
    alt: "image",
  },
  {
    count: "04",
    title: "  Simple pyrolysis",
    description:
      " IMHO has helped deliver the design of simple pyrolysis system for charing, plastic to fuel conversion and other circular technologies. We have been a great partner for commeph and associate, helping deliver various forms of green and and sustainable technolgies.",
    Src: "/images/portfolio_4.webp",
    alt: "image",
  },
];

export const help: HelpProps[] = [
  {
    customIcon: "/images/Artboard2.svg",
    title: "Product Design and Development",
    descriptiveText:
      "Transform your vision into reality with our product design and development expertise. From concept to prototype, our engineering team specializes in crafting innovative, market-ready solutions. We thrive on challenges and excel in turning ideas into tangible products. Whether you're a startup or an established company, we're your dedicated partners in the journey from design to delivery. Let's collaborate to create cutting-edge products that stand out in today's competitive market. Your success is our priority, and we're here to make it happen.",
  },
  {
    customIcon: "/images/Artboard3.svg",
    title: "Engineering Design Capacity Building",
    descriptiveText:
      "At our core, we're not just designers; we're educators and enablers. Our passion lies in engineering design capacity building. We offer tailored programs to empower your team with the skills and knowledge needed to excel in this ever-evolving field. Whether it's honing existing expertise or introducing novices to the art of design, our training programs are meticulously crafted to elevate your capabilities. Let us be your partners in skill development and innovation, and together, we'll drive excellence in engineering design. Explore how we can help your team thrive and flourish.",
  },
  {
    customIcon: "/images/Artboard5.svg",
    title: "Process Design and Development",
    descriptiveText:
      "At the heart of innovation lies effective process design and development. We specialize in transforming ideas into efficient, functional, and sustainable processes. With our expertise, we'll guide your project from concept to reality, ensuring optimal performance and cost-efficiency. Whether you're launching a new product, improving an existing process, or pursuing sustainable solutions, our team is here to collaborate and drive success. Let's harness the power of engineering design to shape a brighter future for your enterprise.",
  },
  {
    customIcon: "/images/Artboard6.svg",
    title: "Design Documentation",
    descriptiveText:
      "Navigating the intricate landscape of design documentation can be challenging. At IMHO, we specialize in simplifying this process for you. Our expert team ensures your project is meticulously documented, providing you with a comprehensive record of every design detail. From CAD drawings to technical specifications, we've got you covered. With our support, your design documentation will be seamless, accurate, and ready to propel your project to success. Let us be your partner in achieving excellence through precise design documentation.",
  },
];

export const team: teamProps[] = [
  {
    title: "Work with our dedicated team",
    description:
      "At IMHO, we boast a dynamic and dedicated team with diverse expertise in engineering and industrial design. We're more than just designers; we're problem solvers. Collaborating closely with our clients, we ensure a comprehensive understanding of their needs and deliver optimal value. Our client-centric approach involves engagement at every design stage, ensuring tailored, high-quality solutions are rapidly developed with cost-effectiveness in mind. When you work with our team, you're investing your money wisely, receiving the best value. Integrity is paramount to us; we prioritize confidentiality, safeguarding our clients' information and ideas with utmost integrity. Your trust is our foundation.",
    Src: "/images/our-team-2.webp",
    alt: "image",
  },

  {
    title: " Vision",
    description:
      " Our vision is to Empower a sustainable and survivable future. By innovating transformational techologies and upskilling the next generation of innovators.",
    Src: "/images/our-team-1.webp",
    alt: "image",
  },
];

// to do: make navigation links functional
export const navLinks: navLinkProps[] = [
  { link: "Home", href: "/" },
  { link: "Portfolio", href: "/#portfolio" },
  { link: "Our Process", href: "/#process" },
  { link: "Our Team", href: "/#team" },
  { link: "Blog", href: "/blog" },
];

// export const blogPosts: blogPostsProps[] = [
//   {
//     src: "/images/blog-image.png ",
//     title: "Ghana's current industrialization",
//     description:
//       "On the 11th of March, 1964, Kwame Nkrumah submitted “blueprint of our goal. launching the seven-year development plan.” to the parliament of Ghana..",
//     link: "",
//   },
//   {
//     src: "/images/blog-image.png ",
//     title: "Innovate Make and Have Ours Co. Ltd.",
//     description:
//       "Engineering Design Companies, A Catalyst for National Development    A paper from the IMHO team",
//     link: "",
//   },
//   {
//     src: "/images/blog-image.png ",
//     title:
//       "  Electronic Product Design — and the Technology That Makes It Possible",
//     description:
//       "As time goes on, more products are designed with integrated electronics to provide specific functionality or connectivity.",
//     link: "",
//   },
//   {
//     src: "/images/blog-image.png ",
//     title:
//       "  Electronic Product Design — and the Technology That Makes It Possible",
//     description:
//       "As time goes on, more products are designed with integrated electronics to provide specific functionality or connectivity.",
//     link: "",
//   },
//   {
//     src: "/images/blog-image.png ",
//     title:
//       "  Electronic Product Design — and the Technology That Makes It Possible",
//     description:
//       "As time goes on, more products are designed with integrated electronics to provide specific functionality or connectivity.",
//     link: "",
//   },
//   {
//     src: "/images/blog-image.png ",
//     title:
//       "  Electronic Product Design — and the Technology That Makes It Possible",
//     description:
//       "As time goes on, more products are designed with integrated electronics to provide specific functionality or connectivity.",
//     link: "",
//   },
//   {
//     src: "/images/blog-image.png ",
//     title:
//       "  Electronic Product Design — and the Technology That Makes It Possible",
//     description:
//       "As time goes on, more products are designed with integrated electronics to provide specific functionality or connectivity.",
//     link: "",
//   },
// ];

export const socialMedia: SocialMediaProps[] = [
  {
    link: "https://www.linkedin.com/company/imho-ltd/",
    path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
    linkrect: true,
    linkcircle: true,
    instarect: false,
    instaline: false,
  },
  {
    link: "https://www.facebook.com/theimhogen/",
    path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
    linkrect: false,
    linkcircle: false,
    instarect: false,
    instaline: false,
  },
  {
    link: "https://www.instagram.com/theimhogen/",
    path: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
    linkrect: false,
    linkcircle: false,
    instarect: true,
    instaline: true,
  },
  {
    link: "https://twitter.com/theimhogen",
    path: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
    linkrect: false,
    linkcircle: false,
    instarect: false,
    instaline: false,
  },
];
