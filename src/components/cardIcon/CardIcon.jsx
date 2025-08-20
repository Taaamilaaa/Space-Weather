import { TbSunWind } from "react-icons/tb";
import { SiApachestorm } from "react-icons/si";
import { GiSunRadiations } from "react-icons/gi";
import { GiBarbedSun } from "react-icons/gi";
import { GiSunSpear } from "react-icons/gi";
import { GiRadiations } from "react-icons/gi";
import { typeColor } from "../../utils/helpers";
import styles from "./CardIcon.module.css";

function CardIcon({ type, size }) {
  return (
    <div className={styles.iconWrapper}>
      {type === "GST" && <SiApachestorm size={size} color={typeColor(type)} />}
      {type === "FLR" && <TbSunWind size={size} color={typeColor(type)} />}
      {type === "SEP" && (
        <GiSunRadiations size={size} color={typeColor(type)} />
      )}
      {type === "MPC" && <GiBarbedSun size={size} color={typeColor(type)} />}
      {type === "RBE" && <GiRadiations size={size} color={typeColor(type)} />}
      {type === "HSS" && <GiSunSpear size={size} color={typeColor(type)} />}
    </div>
  );
}
export default CardIcon;
