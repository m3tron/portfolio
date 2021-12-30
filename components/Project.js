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
          layout="intrinsic"
          width={720}
          height={475}
        />
      )}
      <div className={styles.info}>
        <div>{name}</div>
        <div>{description}</div>
        <div className={styles.projectStack}>
          {stack.map(icon => (
            <a
              key={icon.name}
              href={icon.href}
              target="_blank"
              rel="noreferrer"
              className={styles.icon}
            >
              <span className="iconify" data-icon={icon.name}></span>
            </a>
          ))}
        </div>
        <a href={href} className={styles.link} target="_blank" rel="noreferrer">
          Website
        </a>
      </div>
    </div>
  );
};

export default Project;
