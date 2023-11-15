import { AiOutlineHtml5 } from "react-icons/ai";
import { SiDart, SiFastapi, SiGnubash } from "react-icons/si";
import {
  BiLogoJavascript,
  BiLogoFlutter,
  BiLogoReact,
  BiLogoPython,
  BiLogoTailwindCss,
  BiLogoJava,
  BiLogoTypescript,
} from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { GrArchlinux } from "react-icons/gr";
import { BsFiletypeCss, BsFiletypeSql, BsGit } from "react-icons/bs";
import { sala, sala2, sala3 } from "./images";

export const routes = [
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Schedule",
    path: "/schedule",
  },
  {
    name: "Reviews",
    path: "/reviews",
  },
  {
    name: "About",
    path: "/schedule",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export const abilities = [
  {
    id: "01.",
    title: "Powerful Cleaning",
    description:
      "Our vacuums offer powerful suction for deep cleaning, removing dirt and dust from every surface.",
  },
  {
    id: "02.",
    title: "Versatile Options",
    description:
      "From uprights to canisters, we have a wide selection of vacuums to choose from, ensuring that you find the perfect fit for your needs.",
  },
  {
    id: "03.",
    title: "Expert Cleaners",
    description:
      "Our professional cleaners use the latest technology to clean your carpets, leaving them looking and feeling like new.",
  },
  {
    id: "04.",
    title: "Organized Home",
    description:
      "Our cleaning solutions help you organize your home, ensuring that every item has its place and is easily accessible.",
  },
];

export const services = [
  {
    image: sala3,
    title: "We wash your carpet",
  },
  {
    image: sala,
    title: "Arragment of your home",
  },
  {
    image: sala2,
    title: "Deep cleaning of your home",
  },
];

export const cardclean = [
  {
    image: sala3,
    title: "Clean",
    description: "We wash your carpet",
  },
  {
    image: sala,
    title: "Arragment",
    description: "We wash your carpet",
  },
];

export const reviews = [ // Tengo que cambiar esto para que las recoja desde google y nop las tenga que esta actualizando a mano. 
  {
    text:
      "They did an excellent job deep cleaning my kitchen. Professional and friendly.",
    name: "Wabasha",
    date: "Hace 2 años",
    stars: 5,
    image: sala3,
  },
  {
    text:
      "Max is AMAZING and the best local carpet cleaner here in Utah and has competitive pricing. Book him for your home and car carpet cleaning!  He cleaned my parent’s basement n detailed my car and they both look brand new!",
    name: "Loa Kauvaka",
    date: "Hace 2 años",
    stars: 4,
    image: sala3,
  },
  {
    text:
      "Fueron tan rápidos en programar el último minuto, muy complacientes con mi horario. Tuve que cambiar la hora y aún no estaba listo cuando llegaron, ¡pero solucionaron mi pobre programación e hicieron un trabajo fantástico!",
    name: "Whitney Rose",
    date: "Hace 2 años",
    stars: 5,
    image: sala3,
  },
  {
    text:
      "Ellos hacen un excelente trabajo. Muy profesional y el precio es correcto ",
    name: "Cassia Da Silva",
    date: "Hace 2 años",
    stars: 1,
    image: sala3,
  },
  {
    text:
      "Fueron tan rápidos en programar el último minuto, muy complacientes con mi horario. Tuve que cambiar la hora y aún no estaba listo cuando llegaron, ¡pero solucionaron mi pobre programación e hicieron un trabajo fantástico!",
    name: "Whitney Rose",
    date: "SEO, ElementumUI",
    stars: 5,
    image: sala3,
  },
];

export const tecnologies = [
  {
    name: "HTML",
    icon: AiOutlineHtml5,
  },
  {
    name: "CSS",
    icon: BsFiletypeCss,
  },
  {
    name: "Javascript",
    icon: BiLogoJavascript,
  },
  {
    name: "Java",
    icon: BiLogoJava,
  },
  {
    name: "Python",
    icon: BiLogoPython,
  },
  {
    name: "FastAPI",
    icon: SiFastapi,
  },
  {
    name: "React",
    icon: BiLogoReact,
  },
  {
    name: "NextJS",
    icon: TbBrandNextjs,
  },
  {
    name: "Flutter",
    icon: BiLogoFlutter,
  },
  {
    name: "SQL",
    icon: BsFiletypeSql,
  },
  {
    name: "Bash",
    icon: SiGnubash,
  },
  {
    name: "Linux",
    icon: GrArchlinux,
  },
  {
    name: "TailwindCSS",
    icon: BiLogoTailwindCss,
  },
  {
    name: "Git",
    icon: BsGit,
  },
  {
    name: "Dart",
    icon: SiDart,
  },
  {
    name: "Typescript",
    icon: BiLogoTypescript,
  },
];
