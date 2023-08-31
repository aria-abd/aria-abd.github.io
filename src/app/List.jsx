import styles from "./components/List.module.css";
import Images from "../../public/charge.png";

function List(srca) {
  return (
    <div>
      <div className={styles.ChildDiv}>
        <img src={Images.srca} />
        <h3></h3>
        <p></p>
      </div>
    </div>
  );
}

export default List;
