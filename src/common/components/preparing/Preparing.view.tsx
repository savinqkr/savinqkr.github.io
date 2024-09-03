import { IPreparing } from "./Preparing.interface";
import styles from "./Preparing.module.scss";
import Image from "next/image";

const VPreparing: React.FC<IPreparing.IVProps> = (props) => {
  return (
    <div className={styles.preparing}>
      {/* <Image
        src={"/hourglass.png"}
        alt='Preparing...'
        width={150}
        height={150}
        // layout="fill"
        priority
        loading='eager'
      /> */}
      <img src='/hourglass.png' alt='Preparing...' width={150} height={150} loading='eager' />
      <p>Preparing...</p>
    </div>
  );
};

export default VPreparing;
