import styles from "../styles/Projects.module.css";
import sandyx from "../public/sandy-x.com.png";
import weatherApp from "../public/weatherApp.png";
import superDelta from "../public/superdeltahvac.ca.png";
import parkez from "../public/parkez.png";

import {
  Bulma,
  Chartdotjs,
  CssThree,
  Docker,
  Kubernetes,
  Mongodb,
  Nextdotjs,
  Nodedotjs,
  ReactJs,
  Styledcomponents,
  Tailwindcss,
  Typescript,
  Express,
  Mysql,
  Sequelize,
  Passport,
  Bootstrap,
} from "@icons-pack/react-simple-icons";

const stackList = {
  react: {
    href: "https://reactjs.org",
    icon: <ReactJs className={styles.icon} title="React" color="#61DAFB" />,
  },
  nextjs: {
    href: "https://nextjs.org",
    icon: <Nextdotjs className={styles.icon} title="Next.js" color="#ffffff" />,
  },
  css: {
    href: "https://w3.org",
    icon: <CssThree className={styles.icon} title="CSS3" color="#1572B6" />,
  },
  tailwindcss: {
    href: "https://tailwindcss.com",
    icon: (
      <Tailwindcss
        className={styles.icon}
        title="Tailwindcss"
        color="#06B6D4"
      />
    ),
  },
  bulma: {
    href: "https://bulma.io",
    icon: <Bulma className={styles.icon} title="Bulma" color="#00D1B2" />,
  },
  nodejs: {
    href: "https://nodejs.org",
    icon: <Nodedotjs className={styles.icon} title="Node.js" color="#339933" />,
  },
  mongodb: {
    href: "https://mongodb.com",
    icon: <Mongodb className={styles.icon} title="MongoDB" color="#47A248" />,
  },
  docker: {
    href: "https://docker.com",
    icon: <Docker className={styles.icon} title="Docker" color="#2496ED" />,
  },
  kubernetes: {
    href: "https://kubernetes.io",
    icon: (
      <Kubernetes className={styles.icon} title="Kubernetes" color="#326CE5" />
    ),
  },
  styledcomponents: {
    href: "https://styled-components.com",
    icon: (
      <Styledcomponents
        className={styles.icon}
        title="Styled-components"
        color="#DB7093"
      />
    ),
  },
  chartjs: {
    href: "https://chartjs.org",
    icon: (
      <Chartdotjs className={styles.icon} title="Chart.js" color="#FF6384" />
    ),
  },
  typescript: {
    href: "https://typescriptlang.org/",
    icon: (
      <Typescript className={styles.icon} title="Typescript" color="#3178C6" />
    ),
  },
  express: {
    href: "https://expressjs.com/",
    icon: (
      <Express className={styles.icon} title="Express.js" color="#ffffff" />
    ),
  },
  mysql: {
    href: "https://www.mysql.com/",
    icon: <Mysql className={styles.icon} title="MySQL" color="#4479A1" />,
  },
  sequelize: {
    href: "https://sequelize.org/",
    icon: (
      <Sequelize className={styles.icon} title="Sequelize" color="#52B0E7" />
    ),
  },
  passport: {
    href: "https://www.passportjs.org/",
    icon: <Passport className={styles.icon} title="Passport" color="#34E27A" />,
  },
  bootstrap: {
    href: "https://getbootstrap.com/",
    icon: (
      <Bootstrap className={styles.icon} title="Bootstrap" color="#7952B3" />
    ),
  },
};

export const projectList = [
  {
    name: "Sandy-X Inc.",
    description:
      "Web application for storage company that helps manage their parking spots and stores customer information.",
    image: sandyx,
    href: "https://www.sandy-x.com",
    stack: [
      stackList.nextjs,
      stackList.typescript,
      stackList.bulma,
      stackList.nodejs,
      stackList.express,
      stackList.mongodb,
      stackList.docker,
      stackList.kubernetes,
    ],
  },
  {
    name: "SuperDelta HVAC",
    description: "Landing page for an HVAC company.",
    image: superDelta,
    href: "https://superdeltahvac.ca",
    github: "https://github.com/m3tron/superdelta",
    stack: [stackList.react, stackList.styledcomponents],
  },
  {
    name: "WeatherApp",
    description:
      "An application that displays weather information for a given city.",
    image: weatherApp,
    href: "https://weatherapp-m3tron.vercel.app/",
    github: "https://github.com/m3tron/weatherapp",
    stack: [stackList.react, stackList.tailwindcss, stackList.chartjs],
  },
  {
    name: "ParkEz",
    description:
      "This was a capstone project developed in a group of 5. It allows people to book and reserve their parking spaces.",
    image: parkez,
    href: "https://parking-lot-manage.herokuapp.com/#/",
    github: "https://github.com/priyanshkumar/Parking_Lot_Manager",
    stack: [
      stackList.react,
      stackList.nodejs,
      stackList.express,
      stackList.mysql,
      stackList.sequelize,
      stackList.passport,
      stackList.bootstrap,
    ],
  },
];
