import PATH from "@/constants/path";
import { IHeader } from "./Header.interface";
import styles from "./Header.module.scss";
import Link from "next/link";
import { FiLink } from "react-icons/fi";

const VHeader: React.FC<IHeader.IVProps> = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <Link href={PATH.MAIN}>SAVINQKR</Link>
        </div>
        <div className={styles.right}>
          <Link className={styles.menu} href={PATH.DEVLOG.MAIN}>
            <FiLink size={14} />
            <span>Devlog</span>
          </Link>
          <Link className={styles.menu} href={PATH.PROJECT.MAIN}>
            <FiLink size={14} />
            <span>Projects</span>
          </Link>
          <Link className={styles.menu} href={PATH.ABOUT.MAIN}>
            <FiLink size={14} />
            <span>About</span>
          </Link>
          <Link className={styles.menu} href={PATH.GITHUB}>
            <FiLink size={14} />
            <span>Github</span>
          </Link>
          <Link className={styles.menu} href={PATH.NOTION}>
            <FiLink size={14} />
            <span>Notion</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default VHeader;
