import { IFooter } from "./Footer.interface";
import styles from "./Footer.module.scss";

const VFooter: React.FC<IFooter.IVProps> = (props) => {
  return <footer className={styles.footer}>FOOTER</footer>;
};

export default VFooter;
