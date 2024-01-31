import styles from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={styles.parentDiv}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Loader;
