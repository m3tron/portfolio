import Image from "next/image";
import styles from "../styles/Projects.module.css";

const Project = ({ name, description, stack, href, image }) => {
  return (
    <div className={styles.project}>
      {image && (
        <Image
          className={styles.image}
          src={image}
          alt={name}
          width={250}
          height={150}
        />
      )}
      <div>{name}</div>
      <div>{description}</div>
      <div className={styles.projectStack}>
        {stack.map(icon => (
          <div key={icon} className={styles.icon}>
            <span className="iconify" data-icon={icon}></span>
          </div>
        ))}
      </div>
      <a href={href} target="_blank" rel="noreferrer">
        Website
      </a>
    </div>
  );
};

export default Project;
