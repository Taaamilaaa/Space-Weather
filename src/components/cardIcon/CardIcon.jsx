import { TbSunWind } from "react-icons/tb";
import { SiApachestorm } from "react-icons/si";
import { GiSunRadiations } from "react-icons/gi";
import { GiBarbedSun } from "react-icons/gi";
import { GiSunSpear } from "react-icons/gi";
import { GiRadiations } from "react-icons/gi";
import styles from "./CardIcon.module.css";

function CardIcon({ type }) {
  return (
    <div className={styles.iconWrapper}>
      {type === "GST" && <SiApachestorm size={35} color="rgb(35, 155, 167)" />}
      {type === "FLR" && <TbSunWind size={35} color="rgb(255, 204, 0)" />}
      {type === "SEP" && (
        <GiSunRadiations size={35} color="rgb(225, 170, 54)" />
      )}
      {type === "MPC" && <GiBarbedSun size={35} color="rgb(154, 203, 208)" />}
      {type === "RBE" && <GiRadiations size={35} color="rgb(177, 59, 255)" />}
      {type === "HSS" && <GiSunSpear size={35} color="rgb(0, 101, 248)" />}
    </div>
  );
}
export default CardIcon;
