import styles from "./List.module.css";


function List({ src, matn }) {
  return (
    <div className={styles.parentDiv}>
      <div className={styles.ChildDiv}>
        <img src={src}></img>
        <h3>{matn}</h3>
        <a href="#"></a>
      </div>
    </div>
  );
}

export default List;
