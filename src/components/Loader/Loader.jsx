import styles from "./Loader.module.css";
const Loader = ({ isImageLoader }) => {
  return (
    <div className={styles.parentDiv}>
      {isImageLoader ? (
        <span className={styles.imageLoader}></span>
      ) : (
        <div className={styles.loader}></div>
      )}
    </div>
  );
};

export default Loader;
