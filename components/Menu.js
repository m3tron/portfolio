import styles from "../styles/Menu.module.css";

const Menu = () => {
  return (
    <div>
      <div className={styles.bars} onClick={() => console.log("clicked bars")}>
        <span className={styles.bar1}>&nbsp;</span>
        <span className={styles.bar2}>&nbsp;</span>
        <span className={styles.bar3}>&nbsp;</span>
      </div>
    </div>
  );
};

export default Menu;
