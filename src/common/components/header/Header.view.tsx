import { IHeader } from "./Header.interface";
import styles from "./Header.module.scss";

const VHeader: React.FC<IHeader.IVProps> = (props) => {
  return <header className={styles.test}>HEADER</header>;
};

export default VHeader;
