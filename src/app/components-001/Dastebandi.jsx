import styles from "./Dastebandi.module.css";
import List from "./List";

function Dastebandi() {
  return (
    <div>
      <div>
        <h3 className={styles.h3}>دسته بندی کالاها</h3>
      </div>
      <div className={styles.mainDiv}>
        <List src="electric.png" matn="ابزار های برقی"></List>
        <List src="charge.png" matn="ابزار های شارژی"></List>
        <List src="wind.png" matn="ابزار های بادی"></List>
        <List src="petrol.png" matn="ابزار های بنزینی"></List>
        <List src="measurment.png" matn="ابزار های انازه گیری"></List>
        <List src="parts.png" matn="قطعات یدکی عمومی"></List>
      </div>
    </div>
  );
}

export default Dastebandi;
