import { TbSunWind } from "react-icons/tb";
import styles from "./CardIcon.module.css";

function CardIcon() {
  return (
    <div className={styles.iconWrapper}>
      <TbSunWind size={35} color="yellow" />
    </div>
  );
}
export default CardIcon;
