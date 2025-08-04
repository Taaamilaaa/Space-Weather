import { TbSunWind } from "react-icons/tb";
import { SiApachestorm } from "react-icons/si";
import { GiSunRadiations } from "react-icons/gi";
import { GiBarbedSun } from "react-icons/gi";
import { GiSunSpear } from "react-icons/gi";
import styles from "./CardIcon.module.css";

function CardIcon({ type }) {
  return (
    <div className={styles.iconWrapper}>
      {type === "GST" && <SiApachestorm size={35} />}
      {type === "FLR" && <TbSunWind size={35} color="yellow" />}
      {type === "SEP" && <GiSunRadiations size={35} color="yellow" />}
      {type === "MPC" && <GiBarbedSun size={35} color="yellow" />}
      {type === "RBE" && <GiSunRadiations size={35} color="yellow" />}
      {type === "HSS" && <GiSunSpear size={35} color="yellow" />}
    </div>
  );
}
export default CardIcon;
