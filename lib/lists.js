import sandyx from "../public/sandy-x.com.png";
import weatherApp from "../public/weatherApp.png";
import superDelta from "../public/superdeltahvac.ca.png";

const stackList = {
  react: {
    class: "devicon-react-original colored",
    href: "https://reactjs.org",
  },
  nextjs: {
    class: "devicon-nextjs-original-wordmark",
    href: "https://nextjs.org",
  },
  css: { class: "devicon-css3-plain colored", href: "https://w3.org" },
  tailwindcss: {
    class: "devicon-tailwindcss-plain colored",
    href: "https://tailwindcss.com",
  },
  bulma: {
    class: "devicon-bulma-plain colored",
    href: "https://bulma.io",
  },
};

export const projectList = [
  {
    name: "Sandy-X Inc.",
    description: "Description",
    image: sandyx,
    href: "https://www.sandy-x.com",
    stack: [stackList.nextjs, stackList.bulma],
  },
  {
    name: "SuperDelta HVAC",
    description: "Landing page for an HVAC company.",
    image: superDelta,
    href: "https://superdeltahvac.ca",
    github: "https://github.com/m3tron/superdelta",
    stack: [stackList.react],
  },
  {
    name: "WeatherApp",
    description:
      "An application that displays weather information for a given city.",
    image: weatherApp,
    href: "https://weatherapp-m3tron.vercel.app/",
    github: "https://github.com/m3tron/weatherapp",
    stack: [stackList.react, stackList.tailwindcss],
  },
];
