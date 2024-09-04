import { IPreparing } from "./Preparing.interface";
import styles from "./Preparing.module.scss";

const VPreparing: React.FC<IPreparing.IVProps> = (props) => {
  return (
    <div className={styles.preparing}>
      <img
        src="/images/hourglass.png"
        alt="Preparing..."
        width={150}
        height={150}
        loading="eager"
      />
      <p>Preparing...</p>
    </div>
  );
};

export default VPreparing;
